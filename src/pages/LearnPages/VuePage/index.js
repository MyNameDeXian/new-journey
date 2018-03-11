import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { vueAttr } from './vueAttr'

function UpAside(props){
	const type = '/web/vue/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='Vue' logo='V' path={type + 'Vue'}/>
			<Aside.Top name='生命周期' logo='生'/>
		</Aside>
	)
}
export function Vue(){
	return(
		<Layout ctns={vueAttr}>
			<UpAside />
		</Layout>
	)
}