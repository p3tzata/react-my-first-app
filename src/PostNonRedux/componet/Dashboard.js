import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'

export default class Dashboard extends React.Component {

	constructor(props) {
		super(props)
		this.state={userName : '', password : '', msg:'',Authorization:''}


	}


	render() {
		return <div>Dashboard</div>
	}




}