import React, { Component } from 'react';
import {Route} from 'react-router-dom'  

import About from './component/About'
import Contact from './component/Contact'
import Header from './component/Header'

export default class App extends Component {




	render() {


		return (
		<div>
			<Header/>
			<Route path="/about" component={About}/>
			<Route path="/contact" component={Contact}/>
			



		</div>);

	}


}

