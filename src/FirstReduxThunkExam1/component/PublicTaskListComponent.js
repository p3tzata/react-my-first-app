import React, { Component } from 'react';
import PublicTaskComponent from './PublicTaskComponent'
import {connect} from 'react-redux'
import * as ActionCreator from '../store/actions/ActionCreator'


 class PublicTaskList extends Component {


    render () {


      return (
      <div>

        {this.props.payload.map((e,index) => {
          
            return <PublicTaskComponent key={Number(e.postId)} payload={e} selected={Number(this.props.appState.publicTask.selectedId) === Number(e.postId) ? "true" : "false"}  />} )
        }

      </div>
    )
    }


}


function mapStateToProps(state) {
  return {
    appState: state
  }

}







export default connect(mapStateToProps)(PublicTaskList);
