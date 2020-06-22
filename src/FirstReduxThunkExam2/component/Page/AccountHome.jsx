import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../common/HtmlForm/Form'
import InputFormField from '../common/HtmlForm/InputFormField'
import InputFormSubmit from '../common/HtmlForm/InputFormSubmit'
import * as PostActionCreator from '../../store/actions/EntityAcctionCreator/PostActionCreator'
import * as AccountActionCreator from '../../store/actions/FrameWorkActionCreator/AccountActionCreator'
import * as CustomError from '../../Error/CustomError'
import toastr from 'toastr';
import { withRouter} from 'react-router-dom'



 class AccountHome extends Component {


componentDidMount(){

  this.props.appDispather.clear_redirect_to_home();

}



getItems(){
const promise =  this.props.appDispather.getItems(this.props.appState.account.user,{})
promise
.then(response => {

    const statusCodeIsOk = response.statusCodeIsOk;
   response.data.then( data => {
     console.log(data)

   }) })
.catch ((error) => {

if (error instanceof CustomError.TokenExpired) {
    toastr.error(error)
    this.props.history.push('/login')
} else {
  toastr.error('Error in action: ' + error)
}
} )


}

   render() {
       return <div>

         This is account home page<button onClick={this.getItems.bind(this)}>getItem</button>


      </div>



}


}

function mapStateToProps(state) {
  return {
    appState: state
  }

}


function mapDispatchToProps(dispatch,ownProps) {
  return {appDispather: {
   getItems: (auth,paylaod) => {

  return  dispatch(PostActionCreator.getItems(auth,paylaod))
},
clear_redirect_to_home: () => {
  return dispatch(AccountActionCreator.clear_redirect_to_home())
}

      }


  }
}





export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AccountHome));
