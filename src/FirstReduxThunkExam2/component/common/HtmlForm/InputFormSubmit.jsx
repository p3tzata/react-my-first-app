import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';


class InputFormSubmit extends Component {


  constructor(props) {
    super(props)
  }


  render() {

    return (
    <input type="submit" className="btn btn-primary" value={this.props.label}/>
)

  }


}

export default InputFormSubmit
