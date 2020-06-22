import React, { Component } from 'react';
import {connect} from 'react-redux'



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
