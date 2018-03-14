// 侧边栏 Aside 组件
import React, { Component } from 'react'
import './aside.scss'
import { api } from 'assets/common'

export default class Aside extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	componentWillMount(){
		
	}
	render(){
		let { isScroll } = this.props;
		let str = ''
		if(isScroll !== 'no'){
			str = 'f-1 scroll'
		}
		return(
			<div className={'aside-comp box-sd ' + str}>
				<div></div>
				{ this.props.children }
			</div>
		)
	}
}
Aside.Top = (props) =>{
	let param = location.hash.replace('#', '');
	let active = '';
	if(param == props.path){
		active = 'hover'
	}
	let line = props.line === '3' ? '33%' : '25%';
	return(
		<div className={'top-item flex-col f-ai-c ' + active} 
			style={{ width: line }}
			onClick={e => {
				if(param == props.path || !props.path) return;
				api.push(props.path)
			}}>
			<div className='logo'>{props.logo}</div>
			<div>{props.name}</div>
		</div>
	)
}
	
Aside.Item = (props) =>{
	return(
		<div className='btm-item flex-row' data-aside={props.name} onClick={(e,b) =>{
			let dom = document.querySelector(`[data-id=${props.name}]`);
			dom.scrollIntoView();
			let el = document.querySelector(`[data-aside=${props.name}]`);
			el.classList.add('hover')
		}}>
			<p className='item-name'>
				{ props.name }
			</p>
			<p className='btm-bd f-1'></p>
		</div>
	)
}