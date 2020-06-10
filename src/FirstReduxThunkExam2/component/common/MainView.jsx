import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import Login from '../Page/Login'
import Register from '../Page/Register'
import Preloader from '../Preloader'

class MainView extends Component {

constructor(props) {
  super(props)

}

render() {
    return <div>
      <Preloader/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>



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

export default connect(mapStateToProps,mapDispatchToProps)(MainView);
