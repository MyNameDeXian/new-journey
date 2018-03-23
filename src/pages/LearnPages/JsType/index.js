import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { arrayObj } from './attrs/arrayAttr'
import { stringObj } from './attrs/stringAttr'
import { objAttr } from './attrs/objAttr'
import { numAttr } from './attrs/numAttr'
import { dateAttr } from './attrs/dateAttr'
import { regAttr } from './attrs/regAttr'
import { mathAttr } from './attrs/MathAttr'

function UpAside(props){
	const type = '/web/jsType/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='Array' logo='Arr' path={type + 'array'}/>
			<Aside.Top name='Object' logo='Obj' path={type + 'object'}/>
			<Aside.Top name='String' logo='Str' path={type + 'string'}/>
			<Aside.Top name='Number' logo='Num' path={type + 'number'}/>
			<Aside.Top name='RegExp' logo='Reg' path={type + 'RegExp'}/>
			<Aside.Top name='Date' logo='D' path={type + 'Date'}/>
			<Aside.Top name='Math' logo='M' path={type + 'Math'}/>
		</Aside>
	)
}
export function RegExpAttr(){
	return(
		<Layout ctns={ regAttr } allRead='all'>
			<UpAside />
		</Layout>
	)
}
export function DateComp(){
	return(
		<Layout ctns={ dateAttr } allRead='all'>
			<UpAside />
		</Layout>
	)
}
export function MathComp(){
	return(
		<Layout ctns={ mathAttr } allRead='all'>
			<UpAside />
		</Layout>
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
export function NumberAttr(){
	return(
		<Layout ctns={ numAttr } allRead='all'>
			<UpAside />
		</Layout>
	)
}