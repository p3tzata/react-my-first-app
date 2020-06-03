import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ActionCreator from './store/actions/ActionCreator'
import * as ActionType  from './store/actions/ActionType'
import OperationButton from './component/OperationButton'
import InputComponentList from './component/InputComponentList'

 class App extends Component {


componentDidUpdate(prevProps) {
//  console.log("testting")
  if (prevProps.appState !== this.props.appState) {
    this.calculate();
  }
}

calculate(){

}

  render() {
      return (

      <div className="app">
          This is app.<br/>
        <OperationButton onClickAddHandler={this.props.addOperation}
                          onClickRemoveHandler={this.props.removeOperation}   />
        <InputComponentList payload={this.props.appState.inputReducer} />

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
      addOperation: () => {
        dispatch(ActionCreator.add() )
      },
      removeOperation: () => {
        dispatch(ActionCreator.remove() )
      }


  }
}





export default connect(mapStateToProps,mapDispatchToProps)(App);
