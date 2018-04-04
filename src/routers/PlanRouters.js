import React from 'react'
import { Switch, Route } from 'react-router'

import PlanPages from 'pages/PlanPages/'

export default () =>(
	<Route path='/plan' render={() =>(
		<PlanPages>

		</PlanPages>
	)}/>
)