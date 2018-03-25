import React, { Component } from 'react'
import './contentPanel.scss'

import {
	codeText,
	titleText,
	ctnText,
	tabelText
} from './subpages/ParseContents'

export default class ContentPanel extends Component {
	constructor(props){
		super(props);
		let allRead = this.props.allRead === 'all' ? null : '250px';
		this.state = {
			height: allRead
		}
	}
	componentWillMount(){
		let { title, children } = this.props;
		let dataId = title;
		let text = (children || 'Hello World').replace(/^\n*title (.*)\n/, (reg, $1) =>{
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
		text = titleText(text);
		text = codeText(text);
		text = tabelText(text);
		text = ctnText(text);
		// text = text.replace(/ /g, '&lt;');
		// text = text.replace(/	/g, '&lt;&lt;&lt;&lt;');
		this.contents.innerHTML = text;
	}
	render(){
		let { height, dataId, title } = this.state;
		return(
			<div className='content-panel box-sd width' data-id={dataId}>
				<div className='main-title tx-center'>
					{ title || 'title' }
				</div>
				<div className='meta tx-center'>作者: 木子 - 日期: 2018-02-28</div>
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
