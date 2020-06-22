import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as AccountActionCreator from '../../store/actions/FrameWorkActionCreator/AccountActionCreator'







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
