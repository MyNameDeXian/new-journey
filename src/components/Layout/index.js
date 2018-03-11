import React, { Component } from 'react'
import { ctnHeight } from 'assets/common'
import Aside from 'components/Aside'
import ContentPanel from 'components/ContentPanel'

// 整体布局
export default (props) =>{
	let { ctns } = props;
	if( !Array.isArray(ctns) ){
		ctns = [ctns];
	}
	return(
		<div className='flex-row f-jc-c'>
			<div className='ctn-scroll' style={{height: ctnHeight}}>
				<div></div>
		{/* 主内容区域 */}
				<Contents ctns={ctns}/>
			</div>
		{/* 侧边栏区域 */}
			<div className='flex-col' style={{height: ctnHeight}}>
				{ props.children }
				<DownAside ctns={ctns}/>
			</div>
		</div>
	)
}
// 内容区域
function Contents(props){
	return( 
		<div>
			{ 
				props.ctns.map((item, i) =>(
					makeContents(item) 
				))
			}
		</div>
	)
}
function makeContents(obj){
	let result = [];
	for(let key in obj){
		let item = contentItem(key, obj[key]);
		result.push(item);
	}
	return result;
}
function contentItem(name, content){
	return(
		<ContentPanel key={name} title={name}>
			{ String(content) }
		</ContentPanel>
	)
}
// 侧边栏下半部分区域
function DownAside(props){
	return(
		<Aside>
			{ 
				props.ctns.map((item, i) =>(
					makeAside(item) 
				)) 
			}
		</Aside>
	)
}
function makeAside(obj){
	let result = [];
	for(let key in obj){
		let str = obj[key].replace(/^\n/,'');
		let name = '';
		if(/^title/.test(str)){
			name = str.split('\n')[0].replace(/^title/,'');
		}
		let item = asideItem(key, name);
		result.push(item);
	}
	return result;
}
function asideItem(key, name){
	return(
		<Aside.Item key={key} name={name || key}/>
	)
}
