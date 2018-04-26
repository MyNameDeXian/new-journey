`
对 react 的理解：
	一、react 组件分为 
		1.功能组件(也就是class声明的组件)
			拥有声明周期 和 自己的state
			需要通过生命周期 或 state 去改变自身的组件。
		2.函数组件
			无生命周期 和 state
			一般用于不需要改变自身的组件。
	二、react 的 ref 主要功能
		1.ref 用于组件，则指向该组件的的对象
			父组件可以通过 ref 来调用子组件的 state 和 方法, 也可以获取的到子组件 props 里的信息.
			ref 是父组件获取子组件信息和操作子组件的一种方式
		2.ref 用于 dom 节点，则指向该 dom 节点对象
			用于操作 该 dom 节点，
			react 和 原生配合使用也会有很好的效果。
	三、react 的 props 主要作用
		props 主要用于 父组件向子组件传递信息
		子组件可以配合生命周期 componentWillReceiveProps(nextProps){} 来判断父组件传递的信息，是否要更新。
	四、react 的 children 的简单说明
		react children 就是在父组件调用子组件时，在子组件节点里写的所有内容都会被封装成对象，
		然后利用 this.props.children 传递给子组件。
	 	在react 组件中利用 this.props.children 可以实现插槽模式的开发
	 	也可以配合 router 来实现按需加载等...
	五、祖父组件 向 孙子组件传递信息 使用 context 来传递，(官方不推荐使用)
`
`
react 在项目中实际运用，以开发商城项目为例：
	组件的分类，(组件尽量保持单一性)
		icon 类小组件
			
		表单类组件 form-comp
		展示类组件 show-comp
		动画组件 animation-comp
		功能性组件 action-comp 例：上拉加载更多，下拉刷新...
`