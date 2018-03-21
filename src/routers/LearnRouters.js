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
 	ObjectAttr 
 } from 'pages/LearnPages/JsType'
import {
	HtmlTag
} from 'pages/LearnPages/HtmlPage'
import {
 	CssStyle 
} from 'pages/LearnPages/CssPage'
import {
 	Webpack 
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
	<Switch>
		<Route path='/web' render={() =>(
			<LearnPages>
				<Route path={webpath + '/html'} render={() =>(
					<Switch>
						<Route path={webpath + '/html/HtmlTag'} component={HtmlTag}/>
					</Switch>
				)}/>
				<Route path={webpath + '/css'} render={() =>(
					<Route path={webpath + '/css/CssStyle'} component={CssStyle}/>
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
					</Switch>
				)}/>
				<Route path={webpath + '/webpack'} render={() =>(
					<Switch>
						<Route path={webpath + '/webpack/Webpack'} component={Webpack}/>
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
	</Switch>
)