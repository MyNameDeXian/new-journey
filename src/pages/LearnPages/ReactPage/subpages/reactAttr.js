export const reactAttr = {}

reactAttr.learn = `
想学 react 可以把下面几个学好
-----------------------------------------------
props
ref 
children
函数组件
功能组件（就是class声明的那个）
生命周期
面试必考，实战必用
-----------------------------------------------
`
reactAttr.example=`
title React 渲染
# 示例：
---code---
import React, { Component } from 'react'
import { render } from 'react-dom'

render(
	<div>Hello world</div>, 
	document.body
)
---code---
`
reactAttr.props = `

`
reactAttr.ref = `
# ref 使用方法
-----------------------------------------------
ref 属性可以设置为一个回调函数，这是官方强烈推荐的用法
ref 也可以接收一个字符串
ref 可以挂载在组件上，也可以挂载在元素节点上
-----------------------------------------------
---code---
// 挂载在组件上，指向组件实例
<Comp ref='comp'/> 
this.refs.comp  //调用方法,指向Comp组件实例对象,可以调用Comp的State 和 方法

<Comp ref={el => this.comp =el}/> 
this.comp //调用方法,指向Comp组件实例对象,可以调用Comp的State 和 方法

//挂载在 Dom 上，指向 Dom 
<div ref='dom'></div> 
this.refs.dom //调用方法,指向DOM,可以调用Dom的属性和方法

<div ref={el => this.dom =el}></div> 
this.dom //调用方法,指向DOM,可以调用Dom的属性和方法
---code---
# 示例：
---code---
//子组件
class Child extends Component{
	constructor(props){
		this.state = { value: 'I am Child' }
	}
	fun = () =>{ console.log('I am Child') }
	render(){
		return( <div></div> )
	}
}
//父组件
class Parent extends Component{
	componentDidMount(){
		//通过ref调用子组件的state
		console.log(this.child.state.value) //输出'I am Child'
		//通过ref调用子组件的方法
		this.child.fun() //输出'I am Child'
		//通过ref调用dom节点方法或属性
		console.log(this.dom.innerText) //输出 '123'
	}
	render(){
		return(
			<div>
				//this.child 指向 Child组件示例
				<Child ref={el => this.child = el}></Child>
				//this.dom 指向该div节点
				<div ref={el => this.dom =el}>123</div>
			</div>
		)
	}
}
---code---
`
reactAttr.children = `
# children
`