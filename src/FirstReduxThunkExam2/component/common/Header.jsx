import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import './NavBar/sideNavBar.css'
import GuestNavBar from './NavBar/GuestNavBar'

class Header extends Component {

constructor(props) {
  super(props)
}


render() {
    return <div>
      <GuestNavBar/>

    </div>


}


}


function mapStateToProps(state) {
  return {
    appState: state
  }

}


function mapDispatchToProps(dispatch) {
  return {appDispather: {

    }


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
