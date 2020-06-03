import React, { Component } from 'react';
import InputComponent from './InputComponent'


 export default class InputComponentList extends Component {

  componentDidMount() {



  }



   render () {

     return (<div>
    {
       this.props.payload.arrayInput.map( (i,index) => <InputComponent key={index} index={index} payload={i}/ >
      )
    }

   </div>)


   }


 }
