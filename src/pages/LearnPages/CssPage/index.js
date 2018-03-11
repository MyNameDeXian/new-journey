import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { styles } from './styleStr'

function UpAside(props){
	const type = '/web/css/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='Style' logo='Sty' path={type + 'CssStyle'}/>
			<Aside.Top name='动画' logo='动'/>
		</Aside>
	)
}
export function CssStyle(){
	return(
		<Layout ctns={styles}>
			<UpAside />
		</Layout>
	)
}