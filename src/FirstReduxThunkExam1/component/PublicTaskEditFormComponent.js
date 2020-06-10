import React, { Component } from 'react';
import {connect} from 'react-redux'
import {  withRouter } from 'react-router-dom'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

import * as ActionCreator from '../store/actions/ActionCreator'



 class PublicTaskEditForm extends Component {



   constructor(props) {
     super(props)
const {currentSelectedEnity} = this.props.appState.publicTask;

     this.state={postId:currentSelectedEnity.postId, description : currentSelectedEnity.description, title : currentSelectedEnity.title,
       url:"Test url", msg:'',errorMsg:[]}


   }

   onSubmit(e) {

 		e.preventDefault();
    const p = this.props.appDispather.updateEntity(this.state);
    p.then(
      response => {
        try{
        if (Number(response.data.postId)>0 ) {
          toastr.success("Successful updated ")
          this.props.history.push('/')
        }} catch {
          toastr.error("Some error ")

        }
      }
    )
 	}



   onChange(e) {

     this.setState( { [e.target.name] : e.target.value });

   }



    render () {

      return <form onSubmit={this.onSubmit.bind(this)}>
        <span>Title: </span><input type="text" name="title" onChange={this.onChange.bind(this) }  value={this.state.title} /><br/>
        <span>Desc: </span><input type="text" onChange={this.onChange.bind(this) }   name="description" value={this.state.description}  /><br/>
        <input type="submit" value="Edit"/>
      </form>

    }

}

function mapStateToProps(state) {
  return {
    appState: state
  }

}


function mapDispatchToProps(dispatch) {
  return {appDispather: {

    updateEntity: (payload) => {
    return  dispatch(ActionCreator.updateEntity(payload))
    }


  }

    }


  }




export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PublicTaskEditForm));
