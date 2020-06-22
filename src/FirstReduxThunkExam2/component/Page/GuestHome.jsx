import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../common/HtmlForm/Form'
import InputFormField from '../common/HtmlForm/InputFormField'
import InputFormSubmit from '../common/HtmlForm/InputFormSubmit'
import * as CustomError from '../../Error/CustomError'
import toastr from 'toastr';



 class GuestHome extends Component {



   render() {
       return <div>

         This is guest home page


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





export default connect(mapStateToProps,mapDispatchToProps)(GuestHome);
