import React 	from 'react'
import Header 	from 'components/Header'
import Fitness from './FitnessPlan/'
import Work from './WorkPlan/'

const type = 'plan'
const PlanHeader = () =>(
	<Header>
		<Header.Item type={type + '/js'} path='/fitness' title='健身计划'/>
		<Header.Item type={type + '/qt'} path='/workPlan' title='工作计划'/>
	</Header>
)

export default (props) =>(
	<div>
		<PlanHeader />
		{ props.children }
	</div>
)