import React, { Component } from 'react';



 export default class CalculatorInput extends Component {

  componentDidMount() {



  }



   render () {

     return (<div><input type="text" onChange={ (e) => this.props.onChangeHandlerA(e.target.value) } name="firstInput" ></input>
     -
     <input type="text" onChange={ (e) => this.props.onChangeHandlerB(e.target.value) } name="secondInput" ></input></div>)


   }


 }
