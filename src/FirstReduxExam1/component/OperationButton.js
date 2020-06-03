import React, { Component } from 'react';



 export default class OperationButton extends Component {

  componentDidMount() {



  }



   render () {


     return  <div>
      <button type="button" name="ADD" onClick={() => this.props.onClickAddHandler(this.props.name)}> Add </button> -
      <button type="button" name="REMOVE" onClick={() => this.props.onClickRemoveHandler(this.props.name)}> Remove </button>
      </div>

   }


 }
