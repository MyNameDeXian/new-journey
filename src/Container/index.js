import React, { Component } from 'react'
import './container.scss'

export default class Container extends Component{
	constructor(props){
		super(props);
		this.state = {
			height: window.innerHeight,
		}
	}
	componentWillMount(){
		
	}
	render(){
		let { height, isShowToTop } = this.state;
		return(
			<div onScroll={this.onScroll} className='container-comp' style={{height: height}}>
				<div ref={el =>this.toTop = el} className='to-top-comp' />
				<div ref={el =>this.toTopBtn = el} onClick={this.toTopClick} className='to-top-btn'>
					Top 
				</div>
				{ this.props.children }
			</div>
		)
	}
	onScroll = (e) =>{
		let el = e.target;
		let top = el.scrollTop;
		let topEl = this.toTopBtn;
		if(top >= 100) {
			topEl.style.bottom = '20px';
		} else{
			topEl.style.bottom = '-60px';
		}
		this.scrollTarget = e.target;
	}
	toTopClick = () =>{
		this.toTop.scrollIntoView();
		let el = this.scrollTarget.children[0];
		el.scrollIntoView();
	}
}