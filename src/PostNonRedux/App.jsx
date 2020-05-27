import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componet/Navbar';
import guestNavbar from './funcHOC/guestNavbar'
import userNavbar from './funcHOC/userNavbar'
import LoginForm from './componet/LoginForm';
import Dashbord from './componet/Dashboard'
import PublicHomePage from './componet/PublicHomePage'
import {
  withRouter
} from 'react-router-dom'
import Logout from './componet/Logout';
import RegisterForm from './componet/RegisterForm';
import PostList from './componet/PostList';
import PostCreateForm from './componet/PostCreateForm';
import PostEditForm from './componet/PostEditForm';
import CommentForm from './componet/CommentForm'

const GuestNavbarComponent = guestNavbar(Navbar);
const UserNavbarComponent = userNavbar(Navbar,({userName: "pepo"}));


 class App extends Component {


  constructor(props){
    super(props);

    this.state={isLogged: false,
                authentication: '',
                loggedUser: {}}

    this.doSuccessLogin=this.doSuccessLogin.bind(this);
    this.doLogout=this.doLogout.bind(this);

}


  doSuccessLogin(authentication,loggedUser) {

    this.setState({authentication : authentication, isLogged:true, loggedUser: loggedUser })
    //console.log('main login')

    this.props.history.push('/dashboard')


  }


  doLogout() {

    this.setState({authentication : '', isLogged:false, loggedUser: {} })
    //this.props.history.push('/')
  }

  doSuccessRegister() {
    console.log('Successfull register')
  }




  render() {




    return (

      <div className="app">

      {this.state.isLogged ?  <UserNavbarComponent loggedUser={ this.state.loggedUser } /> : <GuestNavbarComponent /> }

      <Route path="/dashboard" component={Dashbord} />

      <Route path='/login' render={(props) => <LoginForm data={{ 'doSuccessLogin' : this.doSuccessLogin } }  />}/>
      <Route path='/register' render={(props) => <RegisterForm data={{ 'doSuccessRegister' : this.doSuccessRegister } }  />}/>
      <Route path='/logout' render={(props) => <Logout doLogout={ this.doLogout }  />}/>
      <Route path='/myPost' render={(props) => <PostList data={{authentication: this.state.authentication, userName: this.state.loggedUser.userName }} />}/>
      <Route path='/post/create' render={(props) => <PostCreateForm data={{authentication: this.state.authentication, userName: this.state.loggedUser.userName }} />}/>
      <Route path='/post/:postId/edit' render={(match) => <PostEditForm data={{authentication: this.state.authentication, userName: this.state.loggedUser.userName }} match={match} />}/>
      <Route path='/post/:postId/comment' render={(match) => <CommentForm data={{authentication: this.state.authentication, userName: this.state.loggedUser.userName }} match={match} />}/>



      </div>




      )
  }


}

export default withRouter(App);
