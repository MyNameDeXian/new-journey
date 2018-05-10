// 学习 公共页 learns index
import React 	from 'react'
import Header 	from 'components/Header'

let Item = Header.Item;
let web = '/web';
const LearnHeader = () =>(
	// path 为跳转到对应学习类型
	<Header>   
		<Item type={web} headPath='/html'	  	asidePath='/HtmlTag'    	title='HTML'/>
		<Item type={web} headPath='/css'	    asidePath='/style'  	   	title='CSS'/>
		<Item type={web} headPath='/javaScript'	asidePath='/GlobalsApi' 	title='JavaScript'/>
		<Item type={web} headPath='/jsType'	   	asidePath='/array' 	   	title='JS数据类型'/>
		<Item type={web} headPath='/webpack'	asidePath='/webpack' 	title='Webpack'/>
		<Item type={web} headPath='/react'	  	asidePath='/React' 		title='React'/>
		<Item type={web} headPath='/vue'	    asidePath='/Vue' 		title='Vue'/>
	</Header>
)
export default (props) =>(
	<div className='flex-col' style={{'height': '100%'}}>
		<LearnHeader />
		{ props.children }
	</div>
)