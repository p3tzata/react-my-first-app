import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'


export default class Logout extends React.Component {

	constructor(props) {
		super(props)
		this.props.doLogout()
	}


	render() {


		return <div>You are logouted</div>
	}

	

	




}