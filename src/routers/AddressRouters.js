import React from 'react'
import { Switch, Route } from 'react-router'

import Address from 'pages/Address'

let path = '/address'
export default () =>(
	<Route path={path} render={() =>(
		<Address>
		</Address>
	)}/>
)