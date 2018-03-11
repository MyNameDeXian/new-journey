// 主页 home
import React, { Component } from 'react'
import  './home.scss'
import { connect } from 'react-redux'
import { api } from 'assets/common'
import ContentPanel from 'components/ContentPanel'
import Header from 'components/Header'

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
						<TopBtn type='/web' path='/css/CssStyle'>CSS</TopBtn>
						<TopBtn type='/web' path='/javaScript/GlobalsApi'>JavaScript</TopBtn>
						<TopBtn type='/web' path='/webpack/Webpack'>Webpack</TopBtn>
						<TopBtn type='/web' path='/react/React'>React</TopBtn>
						<TopBtn type='/web' path='/vue/Vue'>Vue</TopBtn>
					</div>
				</div>
				<Header>
					<Header.Item path='/' title='首页'/>
					<Header.Item path='/fitness' title='计划'/>
					<Header.Item path='/calendar' title='日历'/>
					<Header.Item path='/about' title='关于'/>
				</Header>
				<div className='flex-row f-jc-c'>
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