import React, { Component } from 'react'
import './contentPanel.scss'
import Title from './subpages/Title'
import Content from './subpages/Content'
import Code from './subpages/Codes'

export default class ContentPanel extends Component {
	constructor(props){
		super(props);
		let allRead = this.props.allRead === 'all' ? null : '250px';
		this.state = {
			height: allRead,
			titleNum: 1
		}
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		// <div className='ctn-title'>{ title }</div>
		let { children } = this.props;
		//去除空白和标题
		let str = (children || 'Hello World').replace(/^\n(title.*\n)?/, '');

	}
	render(){
		let { height } = this.state;
		let { children, title } = this.props;
		let dataId = title;
		let str = children.match(/\ntitle .+\n?/)
		if( str != null ){ //设置标题
			title = str[0].replace(/\ntitle (.+)\n?/, '$1');
		}
		children = (children || 'Hello World').replace(/^\n(title.*\n)?/, '');
		return(
			<div className='content-panel box-sd width' data-id={dataId}>
				<div className='main-title tx-center'>
					{ title || 'title' }
				</div>
				<div className='meta tx-center'>作者: 木子 - 日期: 2018-02-28</div>
				<div className='contents' ref={el =>this.ctn = el} style={{maxHeight: height}}>
					{ this.setStr(children) }
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
			titleNum: 1
		})
	}
	setStr = (children) =>{
		// 把传过来的字符串解析成 html
		let result = [];
		if( children == null ) return null;
		let arr = String(children).split('---code');
		for(let i=0; i< arr.length; i++){
			let str = arr[i];
			if( /^---/.test(str) ){
				arr[i+1] = (arr[i+1] || '').replace(/^---/, '');
				let item = <Code key={i}>{ str }</Code>
				result.push(item);
			} else {
				let ctns = this.setContent(str, i);
				result = result.concat(ctns);
			}
		}
		return result;
	}
	setContent = (str, key) =>{
		// 把传过来的字符串解析成 html
		let result = [];
		let arr = str.split('\n');
		let item = '';
		for(let i=0; i< arr.length; i++){
			let str = arr[i];
			if( /^#/.test(str) ){
				if( item && item != '\n'){
					item = <Content key={'ctn'+ key + i}>{ item }</Content>
					result.push(item);
				}
				item = <Title key={'t'+ key + i} num={this.state.titleNum++}>{str}</Title>
				result.push(item);
				item = '';
			}else if(str){
				item = item + '\n' + str
			}
		}
		if( item && item != '\n'){
			item = <Content key={'last'+ key}>{ item }</Content>
			result.push(item);
		}
		return result;
	}
}
