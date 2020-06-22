import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Login from '../Page/Login'
import Register from '../Page/Register'
import Home from '../Page/Home'
import Logout from '../Page/Logout'
import Preloader from '../Preloader'

class MainView extends Component {

constructor(props) {
  super(props)

}

componentDidUpdate() {

  if (Number(this.props.appState.account.isRedirectToHome)===1) {
  this.props.history.push("/")
  console.log('redirect to home')
  }

}


render() {



    return <div>
      <Preloader/>

      {(Number(this.props.appState.account.isExpiredAuth)===1) ?
        <Login/>

      :
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
       }




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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainView));
