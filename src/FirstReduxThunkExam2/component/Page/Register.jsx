
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../common/HtmlForm/Form'
import InputFormField from '../common/HtmlForm/InputFormField'
import InputFormSubmit from '../common/HtmlForm/InputFormSubmit'
import * as ActionCreator from '../../store/actions/ActionCreator'
import toastr from 'toastr';



 class Register extends Component {

   constructor(props) {
     super(props)
     this.state={forceValidate:0,email:'',username:''}
     this.onChangeSetState=this.onChangeSetState.bind(this)
     this.onSubmit=this.onSubmit.bind(this)

   }






   onSubmit(e) {
     e.preventDefault();
     this.setState({forceValidate: 1})
     if (this.validateForm()===-1) {
       console.log('validation fail')
     } else {
        //console.log('validation ok')
    const promise = this.props.appDispather.register({username: this.state.username, password: '1111',confirmPassword:'1111' });
    promise.then( (response) => {
        if (response.ok) {
            toastr.success('Success full registration')
        } else {
          const data =  response.json();
          data.then( (data) => {

          let message =''
          if (data.errorMsg9999ss!=null) {
              message=data.errorMsg
          }

          toastr.error('Erro in registration: ' + message)
        })
        }


    }  )

     }

   }

   validateForm(){

     if (this.onValidate_email(this.state.email)===-1 ||
         this.onValidate_username(this.state.username)===-1) {

            return -1;
         }
         return 1;

   }

   onChangeSetState(e) {
     this.setState({[e.target.name]: e.target.value})
   }

   onValidate_email(text){

     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(text))
       {
         return 1
       }

         return -1

   }

   onValidate_username(text){

     if(Number(text.length)<5) {
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
               <h1>Register</h1>
               <p>Please fill all fields.</p>
             </div>
           </div>

          <Form onSubmit={this.onSubmit}>
            <div className="row space-top">
              <div className="col-md-4">
              <InputFormField
                label='E-mail'  id='email'  name='email'   type='text'
                value={this.state.email}
                onChangeSetState={this.onChangeSetState}
                isForceToValidate={this.state.forceValidate}
                onValidate={() => this.onValidate_email(this.state.email)}
                onValidateState={this.onValidateState}
                onValidatePositiveFeedBackText="This input value is valid"
                onValidateNegativeFeedBackText="Not valid email"
                 />
                <InputFormField
                  label='UserName'  id='username'  name='username'   type='text'
                  value={this.state.username}
                  onChangeSetState={this.onChangeSetState}
                  isForceToValidate={this.state.forceValidate}
                  onValidate={() => this.onValidate_username(this.state.username)}
                  onValidateState={this.onValidateState}
                  onValidatePositiveFeedBackText="This input value is valid"
                  onValidateNegativeFeedBackText="String must be more then 5 symbols"
                  />
                <br/>
                <InputFormSubmit
                    label='Register'

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
    register: (payload) => {
      return  dispatch(ActionCreator.register(payload))
    }

      }


  }
}





export default connect(mapStateToProps,mapDispatchToProps)(Register);
