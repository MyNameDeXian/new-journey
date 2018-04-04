import React, { Component } from 'react'
import { ctnHeight } from 'assets/common'
import Aside from 'components/Aside'
import ContentPanel from 'components/ContentPanel'

// 整体布局
export default (props) =>{
	let { ctns, allRead, img } = props;
	if( !Array.isArray(ctns) ){
		ctns = [ctns];
	}
	return(
		<div className='flex-row f-jc-c'>
			<div className='ctn-scroll' style={{height: ctnHeight}}>
				<div></div>
				{/* 主内容区域 */}
				<Contents ctns={ctns} allRead={allRead}/>
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
	let { ctns, allRead } = props;
	if(ctns == null) return null;
	return( 
		<div>
		{ 
			ctns.map((item, i) =>(
				makeContents(item, allRead) 
			))
		}
		</div>
	)
}
function makeContents(obj, allRead){
	let result = [];
	for(let key in obj){
		let item = contentItem(key, obj[key], allRead);
		result.push(item);
	}
	return result;
}
function contentItem(name, content, allRead){
	return(
		<ContentPanel key={name} title={name} allRead={allRead}>
			{ String(content) }
		</ContentPanel>
	)
}
// 侧边栏下半部分区域
let index = 1;
function DownAside(props){
	index = 1;
	return(
		<Aside>
			{ 
				props.ctns.map((item) =>(
					makeAside(item) 
				)) 
			}
		</Aside>
	)
}
function makeAside(obj){
	let result = [];
	for(let key in obj){
		let str = obj[key].replace(/^\n+/,'');
		let name = key;
		if(/^title/.test(str)){
			name = str.split('\n')[0].replace(/^title */,'');
		}
		let item = asideItem(key, name, index++);
		result.push(item);
	}
	return result;
}
function asideItem(key, name, index){
	return(
		<Aside.Item key={key} name={name} index={index} dataAside={key}/>
	)
}
