// Header 组件
import React, { Component } from 'react'
import './header.scss'
import { api } from 'assets/common'

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<div className='header-comp min-w flex-row f-ai-c box-sd'>
				<div onClick={ this.clickLogo } className='logo'>贤</div>
				<div className='navbar flex-row f-ai-c' ref={el =>this.navbar =el}>
					{ this.props.children }
				</div>
			</div>
		)
	}
	clickLogo = () =>{
		// 点击logo返回首页
		let path = api.getPathname();
		if(path !== '/') api.push('/');
	}
}
Header.Item = (props) =>{
	// path路由，type当前网页类型：比如学习网页，计划网页等等等
	let { title, type, headPath, asidePath } = props;
	// 获取当前路由
	let param = location.hash.replace('#', '');
	// 如果当前路由 == 组件传过来的路由，就激活当前路由
	let active = '';
	if( param.indexOf(headPath) != -1 ){
		active = 'active-nav-item';
	}
	type = type || '';
	return(
		<div className={'navbar-item ' + active} onClick={() =>{
			let path = type + headPath + (asidePath || '');
			if(param == path) return;
			api.push( path );
		}}>
			{title}
		</div>
	)
}