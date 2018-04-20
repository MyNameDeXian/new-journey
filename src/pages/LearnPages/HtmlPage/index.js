
import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { inputTag } from './HtmlTag/inputTag'
import { commonTags } from './HtmlTag/commonTags'

function UpAside(props){
	const type = '/web/html/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='标签' logo='Tag' path={type + 'HtmlTag'}/>
			<Aside.Top name='Dom函数' logo='D' path={type + 'DomFunction'}/>
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