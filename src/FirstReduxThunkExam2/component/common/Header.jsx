import React, { Component } from 'react';
import {connect} from 'react-redux';
import './NavBar/sideNavBar.css'
import GuestNavBar from './NavBar/GuestNavBar'
import UserNavBar from './NavBar/UserNavBar'

class Header extends Component {

render() {
  if (this.props.appState.account.user.UserId) {
    return <UserNavBar UserName={this.props.appState.account.user.Username}/>

  } else {
    return <GuestNavBar/>
  }


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
