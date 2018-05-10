import React 	from 'react'
import Header 	from 'components/Header'
import Fitness from './FitnessPlan/'
import Work from './WorkPlan/'

let Item = Header.Item;
const type = 'plan'
const PlanHeader = () =>(
	<Header>
		<Item type={type} headPath='/js'        asidePath='/fitness' title='健身计划'/>
		<Item type={type} headPath='/wark-plan' asidePath='/workPlan' title='工作计划'/>
	</Header>
)

export default (props) =>(
	<div>
		<PlanHeader />
		{ props.children }
	</div>
)