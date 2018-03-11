import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { webpackAttr } from './webpackAttr'

function UpAside(props){
	const type = '/web/webpack/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='Webpack' logo='Wp' path={type + 'Webpack'}/>
			<Aside.Top name='插件' logo='CJ'/>
		</Aside>
	)
}
export function Webpack(){
	return(
		<Layout ctns={webpackAttr}>
			<UpAside />
		</Layout>
	)
}