import React, { Component } from 'react'
import './contentPanel.scss'
import { color } from './subpages/color'
import {
	codeText,
	titleText,
	ctnText,
	tableText
} from './subpages/ParseContents'
const love = `
title 愿
----
	和你
	若梦，便一梦不醒。
	若真，守护你一生。
----
`
export default class ContentPanel extends Component {
	constructor(props){
		super(props);
		let allRead = this.props.allRead === 'all' ? null : '250px';
		this.state = {
			// height: allRead
			height: ''
		}
	}
	componentWillMount(){

		let { title, children } = this.props;
		let dataId = title;
		let text = (children || love).replace(/^\n*title (.*)\n/, (reg, $1) =>{
			title = $1;
			return '';
		});
		this.setState({
			title, dataId, text
		})
	}
	componentDidMount(){
		let { text } = this.state;
		text = text.replace(/</g, '&lt;');
		text = text.replace(/>/g, '&gt;');
		text = color.code(text)
		text = titleText(text);
		text = codeText(text);
		text = tableText(text);
		text = ctnText(text);
		this.contents.innerHTML = text;
	}
	render(){
		let { height, dataId, title } = this.state;
		return(
			<div className='content-panel box-sd width' data-id={dataId}>
				<div className='main-title tx-center'>
					{ title || 'title' }
				</div>
				{this.props.children && <div className='meta tx-center'>作者: 李德贤 - 日期: 2018-02-28</div>}
				<div className='contents' ref={el =>this.contents = el} style={{maxHeight: height}}>
					
				</div>
				<div style={{display: height ? '' : 'none' }} className='read-all-btn tx-center flex-row f-jc-c'>
					<div className='btn' onClick={ this.allRead }> 全文阅读 </div>
				</div>
			</div>
		)
	}
	allRead = () =>{
		this.setState({
			height: null,
		})
	}
}
