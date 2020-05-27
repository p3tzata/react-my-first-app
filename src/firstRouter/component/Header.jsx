import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'



export default class Header extends React.Component {


	render() {


		return (
		
		<header>
			<nav>
				<NavLink className='navLink' activeClassName='activeLink' to="/about">About</NavLink><div>&nbsp;</div>
				<NavLink className='navLink' activeClassName='activeLink' to="/contact">Contact</NavLink>
			</nav>

		</header>);

	}


}
