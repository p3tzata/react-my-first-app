import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'


import Header from './component/common/Header'
import MainView from './component/common/MainView'



 class App extends Component {


componentDidMount(){


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
  return {appDispather: {}


  }
}





export default connect(mapStateToProps,mapDispatchToProps)(App);
