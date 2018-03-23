import React, { Component } from 'react'
import { color } from './color'

export default class Code extends Component{
	constructor(props){
		super(props);
		this.state={
			content: '',
		}
	}
	componentDidMount(){
		let { children } = this.props;
		// Tab 替换成 空格
		let str  = children.replace(/	/g, '  ');
		str = str.replace(/^---\n/g, '');
		str = str.replace(/</g,'&lt;');
		str = color.code(str);
		this.code.innerHTML = str;
	}
	render(){
		return(
			<div className='code-comp'>
				<pre ref={el => this.code = el}>
					
				</pre>
			</div>
		)
	}
}

const codes = code =>{
	if(!code) {
		return '';
	}
	return(
		`<div className='code-comp'>
			<pre>${code}</pre>
		</div>`
	)
}
//匹配代码文本
export function codeText(str){
	str = str.replace(/---code---/g,'夶')
	str = str.replace(/夶\n([^夶]*)夶?/g, codes('$1'))
	return str
}