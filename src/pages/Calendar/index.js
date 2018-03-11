import React, { Component } from 'react'
import './calendar.scss'
import Header 	from 'components/Header'

export default class Calendar extends Component{

	render(){
		return(
			<div>
				<Header>
					<Header.Item path='/calendar' 			title='日历'/>
				</Header>
			</div>
		)
	}
}