import React, { Component } from 'react'

export default class Fitness extends Component{

	render(){
		return(
			<div>
				{ this.props.children }
			</div>
		)
	}
}