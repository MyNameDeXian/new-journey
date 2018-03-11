import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'

function UpAside(props){
	const type = '/web/javaScript/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='window' logo='W' path={type + 'GlobalsApi'}/>
			<Aside.Top name='Event' logo='Et' path={type + 'EventApi'}/>
			<Aside.Top name='Dom函数' logo='D' path={type + 'DomFunction'}/>
			<Aside.Top name='ES6语法' logo='E6' path={type + 'ES6'}/>
			<Aside.Top name='正则' logo='Reg' path={type + 'RegExp'}/>
			<Aside.Top name='Ajax' logo='Aj' path={type + 'Ajax'}/>
		</Aside>
	)
}
// window 
import { globalsApi } from './GlobalApi/'
export function GlobalsApi(){
	return(
		<Layout ctns={globalsApi}>
			<UpAside />
		</Layout>
	)
}
// event
import { events } from './Events/'
export function EventApi(){
	return(
		<Layout ctns={events}>
			<UpAside />
		</Layout>
	)
}
// dom
import { domAttr } from './DomFunction/'
export function DomFunction(){
	return(
		<Layout ctns={domAttr}>
			<UpAside />
		</Layout>
	)
}
