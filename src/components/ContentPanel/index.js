import React, { Component } from 'react'
import './contentPanel.scss'
import { color } from './subpages/color'
import {
	codeText,
	titleText,
	ctnText,
	tableText
} from './subpages/ParseContents'
import { random } from 'assets/saying'

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
		let { title, children, date } = this.props;
		let dataId = title;
		let say = random();
		let text = (children || say).replace(/^\n*date (.*)\n/, (reg, $1) =>{
			date = $1;
			return '';
		});
		text = (children || say).replace(/^\n*title (.*)\n/, (reg, $1) =>{
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
		let { height, dataId, title, date } = this.state;
		if( !date ) date = this.getDate(); 
		return(
			<div className='content-panel box-sd width' data-id={dataId}>
				<div className='main-title tx-center'>
					{ title || 'title' }
				</div>
				{this.props.children && <div className='meta tx-center'>作者: 李德贤 - 日期: {date}</div>}
				<div className='contents' ref={el =>this.contents = el} style={{maxHeight: height}}>
					
				</div>
				<div style={{display: height ? '' : 'none' }} className='read-all-btn tx-center flex-row f-jc-c'>
					<div className='btn' onClick={ this.allRead }> 全文阅读 </div>
				</div>
			</div>
		)
	}
	getDate(){
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth();
		let day = date.getDate();
		return `${year}-${month+1}-${day}`
	}
	allRead = () =>{
		this.setState({
			height: null,
		})
	}
}
