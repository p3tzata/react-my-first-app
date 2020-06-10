import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'
import * as ActionCreator from './store/actions/ActionCreator'
import * as ActionType  from './store/actions/ActionType'

import PublicTaskList from './component/PublicTaskListComponent'
import PublicTaskEditForm from './component/PublicTaskEditFormComponent'
import PublicTaskDetailForm from './component/PublicTaskDetailFormComponent'
import Preloader from './component/Preloader'
 class App extends Component {


componentDidMount(){
   this.props.appDispather.fetchPublicTask();

}

  render() {
      return (

      <div className="app">
          <Preloader/>
          <div className="containerApp">



            <div className="ColumnApp">
            <PublicTaskList payload={this.props.appState.publicTask.resultSet}/>

            </div>
            <div className="ColumnApp">
              <Switch>
            <Route path="/detail/:id" component={PublicTaskDetailForm}/>
            <Route path="/edit/:id" component={PublicTaskEditForm}/>
              </Switch>
            </div>
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
      fetchPublicTask: () => {
        dispatch(ActionCreator.fetchDataAll())
      }}


  }
}





export default connect(mapStateToProps,mapDispatchToProps)(App);
