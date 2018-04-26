
import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { inputTag } from './HtmlTag/inputTag'
import { commonTags } from './HtmlTag/commonTags'
import { globalAttr } from './HtmlTag/globalAttr'

function UpAside(props){
	const type = '/web/html/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='标签' logo='Tag' path={type + 'HtmlTag'}/>
			<Aside.Top name='全局属性' logo='属' path={type + 'globalAttr'}/>
			<Aside.Top name='Meta' logo='M' path={type + 'meta'}/>
			<Aside.Top name='Input' logo='I' path={type + 'input'}/>
			<Aside.Top name='canvas' logo='Tag' path={type + 'canvas'}/>
			<Aside.Top name='音视频' logo='D' path={type + 'DomFunction'}/>
			<Aside.Top name='Dom函数' logo='函' path={type + 'DomFunction'}/>
		</Aside>
	)
}
export function HtmlTag(){
	return(
		<Layout ctns={commonTags}>
			<UpAside />
		</Layout>
	)
}
export function GlobalAttrComp(){
	return(
		<Layout ctns={globalAttr}>
			<UpAside />
		</Layout>
	)
}