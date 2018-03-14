import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { reactAttr } from './subpages/reactAttr'
import { lifeCycle } from './subpages/lifeCycle'

function UpAside(props){
	const type = '/web/react/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='React' logo='Rt' path={type + 'React'}/>
			<Aside.Top name='生命周期' logo='周' path={type + 'LifeCycle'}/>
		</Aside>
	)
}
// react 相关属性
export function ReactAttr(){
	return(
		<Layout ctns={reactAttr}>
			<UpAside />
		</Layout>
	)
}
//react生命周期
export function LifeCycleComp(){
	return(
		<Layout ctns={lifeCycle} img='life' allRead='all'>
			<UpAside />
		</Layout>
	)
}