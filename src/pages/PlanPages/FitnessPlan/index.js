import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { porridge } from './eats/makePorridge'

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
		<Layout ctns={porridge}>
			<UpAside />
		</Layout>
	)
}