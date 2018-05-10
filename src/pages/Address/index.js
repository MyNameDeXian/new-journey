import React, { Component } from 'react'
import Header from 'components/Header'

let Item = Header.Item;
let type = '/address'
function AddressHeader(){
	return(
		<Header>
			<Item title='前端网址' type={type} headPath='/web'/>
			<Item title='大神主页' type={type} headPath='/manito'/>
		</Header>
	)
}

export default (props) =>(
	<div>
		<AddressHeader />
		{ props.children }
	</div>
)
