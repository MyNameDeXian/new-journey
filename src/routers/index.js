import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import createHistory from 'history/createHashHistory'
const hashHistory = createHistory('hashHistory')

import Routes from './Routes'
import store from '../store/'

export default (props) => (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Routes />
		</Router>
	</Provider>
)


