import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { arrayObj } from './arrayAttr'
import { stringObj } from './stringAttr'
import { objAttr } from './objAttr'

function UpAside(props){
	const type = '/web/jsType/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='Array' logo='Arr' path={type + 'array'}/>
			<Aside.Top name='Object' logo='Obj' path={type + 'object'}/>
			<Aside.Top name='String' logo='Str' path={type + 'string'}/>
		</Aside>
	)
}
export function ArrayAttr(){
	return(
		<Layout ctns={ arrayObj } allRead='all'>
			<UpAside />
		</Layout>
	)
}
export function StringAttr(){
	return(
		<Layout ctns={ stringObj } allRead='all'>
			<UpAside />
		</Layout>
	)
}
export function ObjectAttr(){
	return(
		<Layout ctns={ objAttr } allRead='all'>
			<UpAside />
		</Layout>
	)
}