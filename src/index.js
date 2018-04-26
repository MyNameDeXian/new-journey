import React from 'react'
import { render } from 'react-dom'
import Router from './routers/'
import './assets/common.scss'
import './assets/flex-style.scss'
import './assets/common.js'

render(
	<Router/>,
	document.getElementById('root')
)