import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as ActionCreator from '../store/actions/ActionCreator'


 class InputComponent extends Component {

   constructor(props) {
     super(props)
     this.state ={currentText: this.props.payload.inputName}
     this.OnChange=this.onChange.bind(this)
   }

   onChange(e) {
     this.setState({currentText: e.target.value})
   }



   render () {

     return (<div>
       <input type="text" onChange={(e) => {this.onChange(e) } }  name={this.props.payload.inputName} defaultValue={this.props.payload.inputName} />
       {Number(this.props.appState.inputReducer.editModeIndex)==Number(this.props.index) ?
         <span><button type="button" name="Save" onClick={(e) => this.props.save({index: this.props.index , stringName:this.state.currentText})}> Save </button>
         -
         <button type="button" name="Cancel" onClick={() => this.props.cancel()}> Cancel </button>
         </span>
         :
          <button type="button" name="Edit" onClick={() => this.props.setEditMode(this.props.index)}> Edit </button>



       }


   </div>)


   }


 }

 function mapStateToProps(state) {
   return {
     appState: state
   }

 }


 function mapDispatchToProps(dispatch) {
   return {
       setEditMode: (index) => {
         dispatch(ActionCreator.setEditMode(index))
       }, cancel: () => {
          dispatch(ActionCreator.cancelEditMode())
        },
          save: (payload) => {
            dispatch(ActionCreator.save(payload))
          }



   }
 }


 export default connect(mapStateToProps,mapDispatchToProps)(InputComponent);
