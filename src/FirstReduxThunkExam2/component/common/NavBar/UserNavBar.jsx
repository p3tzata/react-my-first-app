import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import NavBar from './NavBar.jsx'



	class UserNavBar extends React.Component {

		 mainDataLink = { "Home": "/", "My post": "/myPost", "Create Post":"/post/create"};
		 rightDataLink = { ['('+this.props.UserName+')'] : "/userDetail", "Logout": "/logout"};
		 sideNavBarDataLink = { "Home": "/", "My post": "/myPost", "Create Post":"/post/create"};


		constructor(props) {
			super(props)

		}




		render() {

			return <NavBar sideNavBarDataLink={this.sideNavBarDataLink} mainDataLink={this.mainDataLink} rightDataLink={this.rightDataLink} />

		}

	}










export default UserNavBar;
