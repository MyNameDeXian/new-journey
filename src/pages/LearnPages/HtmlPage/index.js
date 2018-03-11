
import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { tags } from './HtmlTag/'

function UpAside(props){
	const type = '/web/html/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='Html标签' logo='Tag' path={type + 'HtmlTag'} line='3'/>
			<Aside.Top name='Dom函数' logo='D' path={type + 'DomFunction'} line='3'/>
		</Aside>
	)
}
export function HtmlTag(){
	return(
		<Layout ctns={tags}>
			<UpAside />
		</Layout>
	)
	
}