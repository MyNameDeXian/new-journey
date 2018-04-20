import React, { Component } from 'react'
import './container.scss'

export default class Container extends Component{
	constructor(props){
		super(props);
		this.state = {
			height: window.innerHeight,
		}
	}
	componentDidMount(){
		window.onresize = () =>{
			if( window.innerHeight !== this.state.height ) {
				location.reload(false);
			}
		}
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
		if( el.className.indexOf('aside-comp') !== -1 ){
			return false;
		}
		let top = el.scrollTop;
		let topEl = this.toTopBtn;
		let header = document.querySelector('.header-comp')
		if(top >= 160) {
			topEl.style.bottom = '20px';
			header.style.height = '0'
		} else if(top < 100){
			topEl.style.bottom = '-60px';
			header.style.height = '56px'
		}
		this.scrollTarget = el
	}
	toTopClick = () =>{
		this.toTop.scrollIntoView();
		let el = this.scrollTarget.children[0];
		el.scrollIntoView();
		this.scrollTarget = null;
	}
}