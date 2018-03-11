import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { arrayAttr } from './arrayAttr'

function UpAside(props){
	const type = '/web/jsType/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='Array' logo='Arr' path={type + 'array'}/>
			<Aside.Top name='Object' logo='Obj'/>
			<Aside.Top name='String' logo='Str'/>
		</Aside>
	)
}
export function ArrayAttr(){
	return(
		<Layout ctns={ arrayAttr }>
			<UpAside />
		</Layout>
	)
}