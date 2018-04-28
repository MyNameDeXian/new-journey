import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { webpackApi } from './content/webpackApi'
import { dev } from './content/devConfig'

function UpAside(props){
	const type = '/web/webpack/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='安装' logo='AZ' path={type + 'install'}/>
			<Aside.Top name='webpack' logo='WB' path={type + 'webpack'}/>
			<Aside.Top name='插件' logo='CJ' path={type + 'plugin'}/>
			<Aside.Top name='Config' logo='C' path={type + 'config'}/>
			<Aside.Top name='Dev' logo='dev' path={type + 'dev'}/>
			<Aside.Top name='Pro' logo='pro' path={type + 'pro'}/>
		</Aside>
	)
}
export function InstallWebpack(){
	return(
		<Layout ctns={webpackApi}>
			<UpAside />
		</Layout>
	)
}
export function Webpack(){
	return(
		<Layout ctns={webpackApi}>
			<UpAside />
		</Layout>
	)
}
export function PluginComp(){
	return(
		<Layout ctns={webpackApi}>
			<UpAside />
		</Layout>
	)
}
export function DevConfig(){
	return(
		<Layout ctns={dev}>
			<UpAside />
		</Layout>
	)
}
export function ProConfig(){
	return(
		<Layout ctns={webpackApi}>
			<UpAside />
		</Layout>
	)
}