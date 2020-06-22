import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../common/HtmlForm/Form'
import InputFormField from '../common/HtmlForm/InputFormField'
import InputFormSubmit from '../common/HtmlForm/InputFormSubmit'
import * as CustomError from '../../Error/CustomError'
import toastr from 'toastr';
import AccountHome from './AccountHome'
import GuestHome from './GuestHome'



 class Home extends Component {



   render() {
       if (this.props.appState.account.user.UserId) {
         return <AccountHome/>

       } else {
         return <GuestHome/>
       }



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





export default connect(mapStateToProps,mapDispatchToProps)(Home);
