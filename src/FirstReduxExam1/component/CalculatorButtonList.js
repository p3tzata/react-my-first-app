import React, { Component } from 'react';
import CalculatorButton from './CalculatorButton'
import {connect} from 'react-redux'
import * as calculatorAction from './../store/actions/calculatorAction'

  class CalculatorButtonList extends Component {

   render () {
     return (
     <div >
     <CalculatorButton name='ADD' selected={this.props.appState.calculatorChangeOperationReducer==='ADD' ? true : false} buttonName="ADDING" onClickHandler={this.props.calculatorActionChangeOperation} />
     <CalculatorButton name='SUBTRACK' selected={this.props.appState.calculatorChangeOperationReducer==='SUBTRACK' ? true : false} buttonName="SUBTRACKING" onClickHandler={this.props.calculatorActionChangeOperation} />
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
    calculatorActionChangeOperation: (value) => {
      dispatch(calculatorAction.changeOperation(value));
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(CalculatorButtonList)
