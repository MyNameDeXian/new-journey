import React, { Component } from 'react'
import { color } from './color'

export default class Content extends Component{
	constructor(props){
		super(props);
		this.state={
			content: '',
		}
	}
	componentDidMount(){
		let { children } = this.props;
		let content = children.replace(/	/g, '   ');
		content = content.replace(/^\n/g, '') 
		content = color.strColor(content);
		this.content.innerHTML = content;
	}
	render(){
		let { content } = this.state;
		return(
			<div className='content-comp'>
				<pre ref={el =>this.content = el} > 
					
				</pre>
			</div>
		)
	}
}