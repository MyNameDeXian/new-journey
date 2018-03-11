import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { reactAttr } from './reactAttr'

function UpAside(props){
	const type = '/web/react/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='React' logo='Rt' path={type + 'React'}/>
			<Aside.Top name='生命周期' logo='生'/>
		</Aside>
	)
}
export function ReactAttr(){
	return(
		<Layout ctns={reactAttr}>
			<UpAside />
		</Layout>
	)
}