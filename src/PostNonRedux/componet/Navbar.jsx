import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'


export default class Navbar extends React.Component {
 

	render () {
  
let mainContent = Object.keys(this.props.mainDataLink).map(key => {
  return (
 
 	<li key={this.props.rightDataLink[key]} className="nav-item">
      <Link className="nav-link"  to={this.props.mainDataLink[key]}>{key}</Link>
    </li>


  );
});

let rightContent = Object.keys(this.props.rightDataLink).map(key => {
  return (
 
 	<li className="nav-item" key={this.props.rightDataLink[key]}>
      <Link  className="nav-link" to={this.props.rightDataLink[key]}>{key}</Link>
    </li>


  );
});

 
   return (
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <a className="navbar-brand" href="#">Logo</a>

  
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