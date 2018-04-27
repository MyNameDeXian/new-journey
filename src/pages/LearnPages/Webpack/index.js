import React, { Component } from 'react'
import Aside from 'components/Aside'
import Layout from 'components/Layout'
import { webpackApi } from './content/webpackApi'

function UpAside(props){
	const type = '/web/webpack/'
	return(
		<Aside isScroll='no'>
			<Aside.Top name='安装' logo='AZ' path={type + 'install'}/>
			<Aside.Top name='webpack' logo='WB' path={type + 'Webpack'}/>
			<Aside.Top name='插件' logo='CJ' path={type + 'plugin'}/>
			<Aside.Top name='公共配置' logo='同' path={type + 'config'}/>
			<Aside.Top name='devConfig' logo='dev' path={type + 'dev'}/>
			<Aside.Top name='proConfig' logo='pro' path={type + 'pro'}/>
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