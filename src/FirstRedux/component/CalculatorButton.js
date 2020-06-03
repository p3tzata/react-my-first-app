import React, { Component } from 'react';



 export default class CalculatorButton extends Component {

  componentDidMount() {



  }



   render () {
     let className1='btn btn-secondary';
     if (this.props.selected) {
       className1='btn btn-primary'
     }

     return <button type="button" name={this.props.name} className={className1} onClick={() => this.props.onClickHandler(this.props.name)}> {this.props.buttonName} </button>


   }


 }
