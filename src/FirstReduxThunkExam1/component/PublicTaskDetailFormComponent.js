import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as ActionCreator from '../store/actions/ActionCreator'

 class PublicTaskDetailForm extends Component {

   componentDidUpdate(prevProps, prevState) {
     if(prevProps.match.params.id!==this.props.match.params.id){
       //Perform some operation here
    this.triggerAction()

     }
   }

   componentDidMount() {

  this.triggerAction()

   }



   triggerAction() {
     this.props.appDispather.set_selected_publicTask(this.props.match.params.id);
     this.props.appDispather.get_entity(this.props.match.params.id);
   }



    render () {
      const {currentSelectedEnity} = this.props.appState.publicTask;
       let linkTo = "/edit/".concat(this.props.match.params.id);
      return <div>
        <span>Title: </span>
        <span>{currentSelectedEnity.title}</span><br/>
        <span>Desc: </span>
        <span>{currentSelectedEnity.description} </span><br/>
        <Link to={linkTo}>Edit</Link>
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

    set_selected_publicTask: (id) => {
      dispatch(ActionCreator.set_selected_publicTask(id))
    },

    get_entity: (id) => {
      dispatch(ActionCreator.fetchDataById(id))
    }


  }

    }


  }




export default connect(mapStateToProps,mapDispatchToProps)(PublicTaskDetailForm);
