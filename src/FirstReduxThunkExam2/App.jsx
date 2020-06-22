import React, { Component } from 'react';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import 'toastr/build/toastr.min.css'
import * as AccountActionCreator from './store/actions/FrameWorkActionCreator/AccountActionCreator'

import Header from './component/common/Header'
import MainView from './component/common/MainView'



 class App extends Component {


componentDidMount(){

  const account = JSON.parse(localStorage.getItem('account'));
  if (account!=null) {

    if (account.UserId!=null) {

    if (account.UserId!=='undefined' && this.props.appState.account.user.UserId!=='undefined' ) {
    const payload = account;
    this.props.appDispather.login_success(payload)
  }
 }
}



}

  render() {
      return (

      <div className="app">


          <div className="containerApp">
          <Header/>
          <MainView/>


          </div>

      </div>

      )
  }
}


function mapStateToProps(state) {
  return {
    appState: state
  }

}


function mapDispatchToProps(dispatch) {
  return {appDispather: {
    login_success: (payload) => {
      return  dispatch(AccountActionCreator.login_success(payload))
    }
  }


  }
}





export default connect(mapStateToProps,mapDispatchToProps)(App);
