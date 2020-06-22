import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../common/HtmlForm/Form'
import InputFormField from '../common/HtmlForm/InputFormField'
import InputFormSubmit from '../common/HtmlForm/InputFormSubmit'
import * as AccountActionCreator from '../../store/actions/FrameWorkActionCreator/AccountActionCreator'
import toastr from 'toastr';
import { withRouter} from 'react-router-dom'


 class Login extends Component {

   constructor(props) {
     super(props)
     this.state={forceValidate:0,username:'',password:''}
     this.onChangeSetState=this.onChangeSetState.bind(this)
     this.onSubmit=this.onSubmit.bind(this)

   }

   onChangeSetState(e) {
     this.setState({[e.target.name]: e.target.value})
   }


   onSubmit(e) {
     e.preventDefault();
     this.setState({forceValidate: 1})
     if (this.validateForm()===-1) {
       console.log('validation fail')
     } else {
        //console.log('validation ok')
    const promise = this.props.appDispather.login({username: this.state.username, password: this.state.password,confirmPassword:this.state.passwordConfirm });
    promise
    .then(response => {

        const statusCodeIsOk = response.statusCodeIsOk;
       response.data.then( data => { if(statusCodeIsOk) {

                                      //let message =''
                                      //if (data.message!=null) {
                                      //    message=data.message
                                    //  }
                                      //console.log(data)
                                      this.props.appDispather.login_success(data)
                                      //this.props.history.push('/')
                                      toastr.success('Successfull login ')
                                  } else {
                                    let message =''
                                    if (data.errorMsg!=null) {
                                        message=data.errorMsg
                                    }
                                      toastr.error('Wrong username or password ' + message)
                                  }
                                  } )
     })
    .catch ((error) => {toastr.error(error.message)} )

     }

   }




   validateForm(){

     if (this.onValidate_password(this.state.password)===-1 ||
         this.onValidate_username(this.state.username)===-1 ) {

            return -1;
         }
         return 1;

   }



   onValidate_username(text){

     if(Number(text.length)<1) {
       return -1;
     } else {
       return 1
     }

   }

   onValidate_password(text){

     if(Number(text.length)<1) {
       return -1;
     } else {
       return 1
     }

   }

   render() {
       return <div>

         <div className="container">
           <div className="row space-top">
             <div className="col-md-12">
               <h1>Login</h1>
               <p>Please fill all fields.</p>
             </div>
           </div>

          <Form onSubmit={this.onSubmit}>
            <div className="row space-top">
              <div className="col-md-4">

                <InputFormField
                  label='UserName'  id='username'  name='username'   type='text'
                  value={this.state.username}
                  onChangeSetState={this.onChangeSetState}
                  isForceToValidate={this.state.forceValidate}
                  onValidate={() => this.onValidate_username(this.state.username)}
                  onValidateState={this.onValidateState}
                  onValidatePositiveFeedBackText="This input value is valid"
                  onValidateNegativeFeedBackText="Please fill this input"
                  />
                  <InputFormField
                    label='Password'  id='password'  name='password'   type='password'
                    value={this.state.password}
                    onChangeSetState={this.onChangeSetState}
                    isForceToValidate={this.state.forceValidate}
                    onValidate={() => this.onValidate_password(this.state.password)}
                    onValidateState={this.onValidateState}
                    onValidatePositiveFeedBackText="This input value is valid"
                    onValidateNegativeFeedBackText="Please fill this input"
                    />

                <br/>
                <InputFormSubmit
                    label='Login'

                    />




              </div>
            </div>
          </Form>



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
    login: (payload) => {
      return  dispatch(AccountActionCreator.login(payload))
    },
    login_success: (payload) => {
      return  dispatch(AccountActionCreator.login_success(payload))
    }

      }


  }
}





export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
