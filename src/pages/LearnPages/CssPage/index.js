import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { style } from './style/style'
import { text } from './style/textStyle'
import { fonts } from './style/fontStyle'
import { bg } from './style/background'
import { animation } from './style/animation'
import { transition } from './style/transition'
import { transform } from './style/transForm'
import { border } from './style/border'
import { flex } from './style/flex'

function UpAside(props){
	const type = '/web/css/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='Style' logo='样' path={type + 'style'}/>
			<Aside.Top name='字体' logo='字' path={type + 'font'}/>
			<Aside.Top name='文本' logo='文' path={type + 'text'}/>
			<Aside.Top name='背景' logo='景' path={type + 'background'}/>
			<Aside.Top name='动画' logo='动' path={type + 'animation'}/>
			<Aside.Top name='过渡与转换' logo='渡' path={type + 'trans'}/>
			<Aside.Top name='边框' logo='边' path={type + 'border'}/>
			<Aside.Top name='Flex 布局' logo='F' path={type + 'flex'}/>
		</Aside>
	)
}
export function TransComp(){
	return(
		<Layout ctns={[ transition, transform ]} allRead='all'>
			<UpAside />
		</Layout>
	)
}
export function BorderComp(){
	return(
		<Layout ctns={ border } allRead='all'>
			<UpAside />
		</Layout>
	)
}
export function FlexComp(){
	return(
		<Layout ctns={ flex } allRead='all'>
			<UpAside />
		</Layout>
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
export function Animations(){
	return(
		<Layout ctns={animation} allRead='all'>
			<UpAside/>
		</Layout>
	)
} 