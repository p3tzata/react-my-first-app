
import React, { Component } from 'react';
import {connect} from 'react-redux'



 class Login extends Component {



   render() {
       return <div>

         <div className="container">
  <div className="row space-top">
    <div className="col-md-12">
      <h1>Login</h1>
    </div>
  </div>
  <form>
    <div className="row space-top">
      <div className="col-md-4">
        <div className="form-group">
          <label className="form-control-label" htmlFor="email">
            E-mail
          </label>
          <input className="form-control" id="email" type="text" />
        </div>
        <div className="form-group">
          <label className="form-control-label" htmlFor="password">
            Password
          </label>
          <input className="form-control" id="password" type="password" />
        </div>
        <input type="submit" className="btn btn-primary" defaultValue="Login" />
      </div>
    </div>
  </form>
</div>;




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





export default connect(mapStateToProps,mapDispatchToProps)(Login);
