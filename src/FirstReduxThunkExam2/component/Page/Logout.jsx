import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../common/HtmlForm/Form'
import InputFormField from '../common/HtmlForm/InputFormField'
import InputFormSubmit from '../common/HtmlForm/InputFormSubmit'
import * as AccountActionCreator from '../../store/actions/FrameWorkActionCreator/AccountActionCreator'
import * as CustomError from '../../Error/CustomError'
import toastr from 'toastr';
import AccountHome from './AccountHome'
import GuestHome from './GuestHome'



 class Logout extends Component {

   componentDidMount(){
     this.props.appDispather.logout();
   }


   render() {
      return <div>You are logout...</div>



}


}

function mapStateToProps(state) {
  return {
    appState: state
  }

}


function mapDispatchToProps(dispatch) {
  return {appDispather: {
    logout: () => {
      return  dispatch(AccountActionCreator.logout())
    }

      }


  }
}





export default connect(mapStateToProps,mapDispatchToProps)(Logout);
