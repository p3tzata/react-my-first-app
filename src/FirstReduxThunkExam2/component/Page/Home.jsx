import React, { Component } from 'react';
import {connect} from 'react-redux'
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
