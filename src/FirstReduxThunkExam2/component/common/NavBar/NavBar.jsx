import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import SideNavBar from './SideNavBar'



export default class NavBar extends React.Component {

	constructor(props) {
		super(props)


	}



	render () {

let mainContent = Object.keys(this.props.mainDataLink).map(key => {
  return (

 	<li key={this.props.mainDataLink[key]} className="nav-item">
      <Link key={key} className="nav-link"  to={this.props.mainDataLink[key]}>{key}</Link>
    </li>


  );
});

let rightContent = Object.keys(this.props.rightDataLink).map(key => {
  return (

 	<li className="nav-item" key={this.props.rightDataLink[key]}>
      <Link key={key} className="nav-link" to={this.props.rightDataLink[key]}>{key}</Link>
    </li>


  );
});


   return (
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
<SideNavBar sideNavBarDataLink={this.props.sideNavBarDataLink}/>
  <ul className="navbar-nav">

	{mainContent}

</ul>



<ul className="navbar-nav ml-auto">

	{rightContent}


</ul>

</nav>


   )

  }
}
