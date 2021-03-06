// 学习资料 路由 learns router
import React from 'react'
import { Switch, Route } from 'react-router'

import LearnPages from 'pages/LearnPages/'
import {
 	GlobalsApi,
 	EventApi,
 	DomFunction
} from 'pages/LearnPages/JavaScript'
import {
 	ArrayAttr,
 	StringAttr,
 	ObjectAttr,
 	NumberAttr,
	RegExpAttr,
	DateComp,
	MathComp
 } from 'pages/LearnPages/JsType'
import {
	HtmlTag,
	GlobalAttrComp
} from 'pages/LearnPages/HtmlPage'
import {
	StyleComp,
 	TextComp,
 	FontStyle,
 	Background,
 	Animations,
 	TransComp,
	BorderComp,
	FlexComp
} from 'pages/LearnPages/CssPage'
import {
 	Webpack,
 	DevConfig,
 	InstallWebpack
} from 'pages/LearnPages/Webpack'
import {
 	ReactAttr,
 	LifeCycleComp
} from 'pages/LearnPages/ReactPage'
import {
 	Vue 
} from 'pages/LearnPages/VuePage'

const webpath = '/web';
export default () => (
	<Route path='/web' render={() =>(
		<LearnPages>
			<Route path={webpath + '/html'} render={() =>(
				<Switch>
					<Route path={webpath + '/html/HtmlTag'} component={HtmlTag}/>
					<Route path={webpath + '/html/globalAttr'} component={GlobalAttrComp}/>
				</Switch>
			)}/>
			<Route path={webpath + '/css'} render={() =>( 
				<Switch>
					<Route path={webpath + '/css/text'} component={TextComp}/> 
					<Route path={webpath + '/css/style'} component={StyleComp}/> 
					<Route path={webpath + '/css/font'} component={FontStyle}/> 
					<Route path={webpath + '/css/background'} component={Background}/> 
					<Route path={webpath + '/css/animation'} component={Animations}/> 
					<Route path={webpath + '/css/trans'} component={TransComp}/> 
					<Route path={webpath + '/css/border'} component={BorderComp}/> 
					<Route path={webpath + '/css/flex'} component={FlexComp}/> 
				</Switch>
			)}/>
			<Route path={webpath + '/javaScript'} render={() =>(
				<Switch>
					<Route path={webpath + '/javaScript/GlobalsApi'} component={GlobalsApi}/> 
					<Route path={webpath + '/javaScript/EventApi'} component={EventApi}/>
					<Route path={webpath + '/javaScript/DomFunction'} component={DomFunction}/>
				</Switch>
			)}/>
			<Route path={webpath + '/jsType'} render={() =>(
				<Switch>
					<Route path={webpath + '/jsType/array'} component={ArrayAttr}/>
					<Route path={webpath + '/jsType/string'} component={StringAttr}/>
					<Route path={webpath + '/jsType/object'} component={ObjectAttr}/>
					<Route path={webpath + '/jsType/number'} component={NumberAttr}/>
					<Route path={webpath + '/jsType/RegExp'} component={RegExpAttr}/>
					<Route path={webpath + '/jsType/Date'} component={DateComp}/>
					<Route path={webpath + '/jsType/Math'} component={MathComp}/>
				</Switch>
			)}/>
			<Route path={webpath + '/webpack'} render={() =>(
				<Switch>
					<Route path={webpath + '/webpack/webpack'} component={Webpack}/>
					<Route path={webpath + '/webpack/dev'} component={DevConfig}/>
					<Route path={webpath + '/webpack/install'} component={InstallWebpack}/>
				</Switch>
			)}/>
			<Route path={webpath + '/react'} render={() =>( 
				<Switch>
					<Route path={webpath + '/react/React'} component={ReactAttr}/>
					<Route path={webpath + '/react/LifeCycle'} component={LifeCycleComp}/>
				</Switch>
			)}/>
			<Route path={webpath + '/vue'} render={() =>(
				<Switch>
					<Route path={webpath + '/vue/Vue'} component={Vue}/>
				</Switch>
			)}/>
		</LearnPages>
	)}/>
)