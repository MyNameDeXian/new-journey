// 主页 home
import React, { Component } from 'react'
import  './home.scss'
import { connect } from 'react-redux'
import { api } from 'assets/common'
import ContentPanel from 'components/ContentPanel'
import { random } from 'assets/saying'
import Header from 'components/Header'
let Item = Header.Item;

class Home extends Component {
	componentWillMount(){
		
	}
	componentDidMount(){

	}
	render(){
		return(
			<div className='home-comp'>
				<div className='header-panel'>
					<div className='title'>木子书屋</div>
					<div className='header-btns width flex-row'>
						<TopBtn type='/web' path='/html/HtmlTag'>HTML</TopBtn>
						<TopBtn type='/web' path='/css/style'>CSS</TopBtn>
						<TopBtn type='/web' path='/javaScript/GlobalsApi'>JavaScript</TopBtn>
						<TopBtn type='/web' path='/webpack/webpack'>Webpack</TopBtn>
						<TopBtn type='/web' path='/react/React'>React</TopBtn>
						<TopBtn type='/web' path='/vue/Vue'>Vue</TopBtn>
					</div>
				</div>
				<Header>
					<Item headPath='/' 			type='' 		 title='首页'/>
					<Item headPath='/wark-plan' type='/plan' 	 title='计划'/>
					<Item headPath='/web' 		type='/address'  title='网址大全'/>
					<Item headPath='/calendar' 	type='/calendar' title='日历'/>
					<Item headPath='/about' 	type='' 		 title='关于'/>
				</Header>
				<div className='flex-row f-jc-c f-w'>
					<div>
						<ContentPanel />
						<ContentPanel />
						<ContentPanel />
						<ContentPanel />
					</div>
					<div>
						<ContentPanel />
						<ContentPanel />
						<ContentPanel />
						<ContentPanel />
					</div>
				</div>
			</div>
		)
	}
}
function TopBtn(props){
	let { path, type } = props;
	return(
		<div onClick={() =>api.push(type + path)} className='btn'>
			{ props.children }
		</div>
	)
}
export default connect( state => ({
	...state
}))( Home )