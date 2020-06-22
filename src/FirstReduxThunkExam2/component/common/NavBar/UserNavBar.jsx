import React, { Component } from 'react';

import NavBar from './NavBar.jsx'



	class UserNavBar extends Component {

		 mainDataLink = { "Home": "/", "My post": "/myPost", "Create Post":"/post/create"};
		 rightDataLink = { ['('+this.props.UserName+')'] : "/userDetail", "Logout": "/logout"};
		 sideNavBarDataLink = { "Home": "/", "My post": "/myPost", "Create Post":"/post/create"};



		render() {

			return <NavBar sideNavBarDataLink={this.sideNavBarDataLink} mainDataLink={this.mainDataLink} rightDataLink={this.rightDataLink} />

		}

	}










export default UserNavBar;
