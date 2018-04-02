import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { style } from './style/style'
import { text } from './style/textStyle'
import { fonts } from './style/fontStyle'
import { bg } from './style/background'

function UpAside(props){
	const type = '/web/css/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='Style' logo='S' path={type + 'style'}/>
			<Aside.Top name='字体' logo='字' path={type + 'font'}/>
			<Aside.Top name='文本' logo='文' path={type + 'text'}/>
			<Aside.Top name='背景' logo='景' path={type + 'background'}/>
			<Aside.Top name='动画' logo='动'/>
			<Aside.Top name='过度' logo='度'/>
			<Aside.Top name='变换' logo='变'/>
			<Aside.Top name='过度' logo='度'/>
		</Aside>
	)
}
export function StyleComp(){
	return(
		<Layout ctns={style} allRead='all'>
			<UpAside />
		</Layout>
	)
}
export function TextComp(){
	return(
		<Layout ctns={text} allRead='all'>
			<UpAside />
		</Layout>
	)
}
export function FontStyle(){
	return(
		<Layout ctns={fonts} allRead='all'>
			<UpAside/>
		</Layout>
	)
}
export function Background(){
	return(
		<Layout ctns={bg} allRead='all'>
			<UpAside/>
		</Layout>
	)
}