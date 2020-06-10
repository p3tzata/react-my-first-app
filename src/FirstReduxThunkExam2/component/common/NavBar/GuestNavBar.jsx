import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import NavBar from './NavBar.jsx'



	class GuestNavBar extends React.Component {

		 mainDataLink = { "Home": "/"};
		 rightDataLink = { "Login": "/login", "Register": "/register"};
		 sideNavBarDataLink = { "Login": "/login", "Register": "/register"};


		constructor(props) {
			super(props)

		}




		render() {

			return <NavBar sideNavBarDataLink={this.sideNavBarDataLink} mainDataLink={this.mainDataLink} rightDataLink={this.rightDataLink} />

		}

	}










export default GuestNavBar;
