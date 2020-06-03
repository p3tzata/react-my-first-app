import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as calculatorAction from './store/actions/calculatorAction'
import  CalculatorDispley from './component/CalculatorDispley'
import CalculatorButtonList from './component/CalculatorButtonList'
import CalculatorInput from './component/CalculatorInput'
import * as ActionType  from './store/actions/ActionType'
 class App extends Component {


  constructor(props){
    super(props);

}

componentDidUpdate(prevProps) {
//  console.log("testting")
  if (prevProps.appState !== this.props.appState) {
    this.calculate();
  }
}


calculate(){


    if (this.props.appState.calculatorChangeOperationReducer===ActionType.ADD) {

        this.props.calculatorActionAdd(this.props.appState.calculatorSetValueAReducer.valueA, this.props.appState.calculatorSetValueAReducer.valueB);
    }

    if (this.props.appState.calculatorChangeOperationReducer===ActionType.SUBTRACK) {

        this.props.calculatorActionSubtrack(this.props.appState.calculatorSetValueAReducer.valueA, this.props.appState.calculatorSetValueAReducer.valueB);
    }



}


  render() {





      return (

      <div className="app">

    This is app.<br/>
      <CalculatorInput onChangeHandlerA={this.props.calculatorActionSetValueA} onChangeHandlerB={this.props.calculatorActionSetValueB}  /><br/>
      <CalculatorButtonList/><br/>
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
    calculatorActionAdd: (valueA,valueB) => {
      dispatch(calculatorAction.add(valueA,valueB));
    },

    calculatorActionSubtrack: (valueA,valueB) => {
      dispatch(calculatorAction.subtrack(valueA,valueB));
    },

    calculatorActionSetValueA: (value) => {
      dispatch(calculatorAction.set_value_input_a(value));
    },

    calculatorActionSetValueB: (value) => {
      dispatch(calculatorAction.set_value_input_b(value));
    }

  }
}





export default connect(mapStateToProps,mapDispatchToProps)(App);
