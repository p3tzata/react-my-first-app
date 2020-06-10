import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import InputFormField from './InputFormField'


class Form extends Component {


  render() {

    return (
      <form onSubmit={this.props.onSubmit}>
      {this.props.children}
     </form>

)

  }


}

export default Form
