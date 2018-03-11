import React 	from 'react'
import Header 	from 'components/Header'
import Fitness from './FitnessPlan/'
import Work from './WorkPlan/'

const PlanHeader = () =>(
	<Header>
		<Header.Item title='健身计划' path='/fitness'/>
		<Header.Item title='工作计划' path='/workPlan'/>
	</Header>
)

export function FitnessPlan(){
	return(
		<Fitness>
			<PlanHeader />
		</Fitness>
	)
}
export function WorkPlan(){
	return(
		<Work>
			<PlanHeader />
		</Work>
	)
}