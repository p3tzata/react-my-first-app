import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as calculatorAction from './store/actions/calculatorAction'
import  CalculatorDispley from './component/CalculatorDispley'
 class App extends Component {


  constructor(props){
    super(props);

}

componentDidMount() {

this.props.calculatorActionAdd(10);

}


  render() {
      return (

      <div className="app">

    This is app.
      <CalculatorDispley value={this.props.appState.calculatorReducer}/>
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
  return {
    calculatorActionAdd: (value) => {
      dispatch(calculatorAction.add(value));
    }
  }
}





export default connect(mapStateToProps,mapDispatchToProps)(App);
