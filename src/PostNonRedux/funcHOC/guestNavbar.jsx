import React, { Component } from 'react';
import {Route} from 'react-router-dom'


export default function (NavComonent) {
	
	const mainDataLink = { "Home": "/"};
	const rightDataLink = { "Login": "/login", "Register": "/register"};
	
	class guestNavbar extends React.Component {
		


		render() {
		
			return <NavComonent mainDataLink={mainDataLink} rightDataLink={rightDataLink} />
		
		}

	}

	return guestNavbar;






}