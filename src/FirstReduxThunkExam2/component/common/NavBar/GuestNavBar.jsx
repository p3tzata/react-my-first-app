import React, { Component } from 'react';

import NavBar from './NavBar.jsx'



	class GuestNavBar extends Component {

		 mainDataLink = { "Home": "/"};
		 rightDataLink = { "Login": "/login", "Register": "/register"};
		 sideNavBarDataLink = { "Login": "/login", "Register": "/register"};


		render() {

			return <NavBar sideNavBarDataLink={this.sideNavBarDataLink} mainDataLink={this.mainDataLink} rightDataLink={this.rightDataLink} />

		}

	}










export default GuestNavBar;
