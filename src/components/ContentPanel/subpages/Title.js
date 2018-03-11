import React from 'react'

export default (props) =>{
	let { children, num } = props;
	let title = children.replace(/^(#|' ')/g, '');
	if(typeof(num) === 'number'){
		title = num + '. ' + title;
	}
	return(
		<div className='ctn-title'>{ title }</div>
	)
} 