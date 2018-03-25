export const lifeCycle = {}

lifeCycle.getDefaultProps = `
# getDefaultProps() 设置默认的props
-----------------------------------------------
组件实例化之前调用，只调用一次，返回一个对象
-----------------------------------------------
# 示例：
---code---
getDefaultProps(){
	return {
		// defaultProps 设置默认属性值
		value: 123
	}
}
console.log(this.props.value) // 123
---code---
`
lifeCycle.getInitialState = `
# getInitialState() 初始化 State
-----------------------------------------------
组件实例化之前调用，只调用一次，返回一个对象。此时可以访问this.props
使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state
-----------------------------------------------
# 示例：
---code---
getInitialState(){
	return {
		// 初始化State
		value: 123,
		defProps: this.props.defProps
	}
}
console.log(this.state.value) //123
---code---
`
lifeCycle.constructor = `
# constructor() 中初始化 State
-----------------------------------------------
组件实例化之前调用，只调用一次。此时可以访问this.props
-----------------------------------------------
# 示例：
---code---
constructor(props){
	super(props);
	//也可以做一些操作
	let comp = '声明变量'
	this.fn() //调用函数
	this.state = {
		// 初始化 State
		comp,
		value: 123,
		defProps: this.props.defProps
	}
}
console.log(this.state.value) //123
---code---
`
lifeCycle.componentWillMount = `
# componentWillMount() 组件第一次实例化之前调用
-----------------------------------------------
在完成首次渲染之前调用，只调用一次，此时仍可以修改组件的state
-----------------------------------------------
# 示例：
---code---
componentWillMount(){
	//改变 State 
	this.setState({
		value: 456
	})
}
console.log(this.state.value) // 456
---code---
`
lifeCycle.componentDidMount = `
# componentDidMount() 真实的DOM被渲染出来后调用。
-----------------------------------------------
组件第一次渲染完成真实DOM之后调用。
在该方法中可通过this.getDOMNode()访问到真实的DOM元素。
此时已可以使用其他类库来操作这个DOM。
第一次与后台交互都是在该生命周期中完成。
-----------------------------------------------
# 示例：
---code---
componentDidMount(){
	// 获取真实DOM元素
	this.getDOMNode();
	// 向后退发送请求
	Ajax();
}
---code---
`
lifeCycle.componentWillReceiveProps = `
# componentWillReceiveProps() 组件接受新的props时调用。
-----------------------------------------------
组件接收到新的props时调用，并将其作为参数nextProps使用。
-----------------------------------------------
# 示例：
---code---
componentWillReceiveProps(nextProps){
	//新props 不等于 上一次props时更新 State
	if(this.props.value !== nextProps.value){
		this.setState({
			value: 123
		})
	}
}
---code---
`
lifeCycle.shouldComponentUpdate = `
# shouldComponentUpdate() 更新props或state时调用 
-----------------------------------------------
组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，
通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。
-----------------------------------------------
# 示例：
---code---
shouldComponentUpdate(nextProps, nextState){
	// 默认，渲染新的props或state
	return true;
	// 不渲染新的props或state
	return false;
}
---code---
# 优化性能
-----------------------------------------------
react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置
在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同
的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff
算法对比，节省大量性能，尤其是在dom结构复杂的时候
-----------------------------------------------
`
lifeCycle.componentWillUpdate = `
# componentWillUpdate() 接收到新的props或者state后，进行渲染之前调用
-----------------------------------------------
接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。
-----------------------------------------------
# 示例：
---code---
componentWillUpdate(){
	// 不允许更新 State
	// this.setState({})
}
---code---
`
lifeCycle.componentDidUpdate = `
# componentDidUpdate() 完成渲染新的props或者state后调用
-----------------------------------------------
完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。
-----------------------------------------------
# 示例：
---code---
componentDidUpdate(){
	// 获取真实DOM元素
  	this.getDOMNode();
}
---code---
`
lifeCycle.componentWillUnmount = `
# componentWillUnmount() 组件将要卸载时调用
-----------------------------------------------
组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
-----------------------------------------------
---code---
componentWillUnmount(){
	// 移除监听事件
	//removeEventListener('event', fn)
	// 清除定时器
	//clearInterval(timer)
	//clearTimeout(timer)
}
---code---
`
