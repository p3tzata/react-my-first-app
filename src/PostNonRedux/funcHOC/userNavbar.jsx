import React, { Component } from 'react';
import {Route} from 'react-router-dom'


export default function (NavComonent,loggedUser) {



	class userNavbar extends React.Component {


		constructor(props) {
			super(props)
			console.log(props)

		}


		render() {

	var userNameLink = '('.concat(this.props.loggedUser.userName, ")");
	const mainDataLink = { "Home": "/", "My post": "/myPost", "Create Post":"/post/create"};
	const rightDataLink = { [userNameLink] : "/userDetail", "Logout": "/logout"};


			return <NavComonent mainDataLink={mainDataLink} rightDataLink={rightDataLink} />

		}

	}

	return userNavbar;






}
