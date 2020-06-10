import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import './sideNavBar.css'



export default class SideNavBar extends React.Component {

	constructor(props) {
		super(props)
		this.state={
			sideNavStyle:{}
		}
		this.openNav=this.openNav.bind(this)
		this.closeNav=this.closeNav.bind(this)

	}


	openNav() {
	    this.setState({sideNavStyle: {width : "250px"} })
	}

	closeNav() {
	    this.setState({sideNavStyle: {width : "0"} })
	}



	render () {

		let sideNavBarDataLink = Object.keys(this.props.sideNavBarDataLink).map( (key,i) => {
		  return (
		      <Link key={key} to={this.props.sideNavBarDataLink[key]}  onClick={this.closeNav} >{key}</Link>

		  );
		});


   return (
<div>
<span className="openButtonSideBarNav navbar-brand" onClick={this.openNav}>&#9776; Menu</span>
<div style={this.state.sideNavStyle} id="mySidenav" className="sidenav">
	<a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
	{sideNavBarDataLink}
</div>
</div>



   )

  }
}
