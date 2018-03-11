import React from 'react'
import { Switch, Route } from 'react-router'

import Container from '../Container/'
import Footer from 'components/Footer/'
import Home from 'pages/Home'
import Calendar from 'pages/Calendar'
import LearnRouters from './LearnRouters'
import {
	FitnessPlan,
	WorkPlan
} from 'pages/PlanPages/'

export default () => (
	<Container>
		<Route exact path='/' component={Home}/>
		<Route exact path='/calendar' component={Calendar}/>
		<Route exact path='/fitness' component={FitnessPlan}/>
		<Route exact path='/workPlan' component={WorkPlan}/>
		<LearnRouters />
	</Container>
)