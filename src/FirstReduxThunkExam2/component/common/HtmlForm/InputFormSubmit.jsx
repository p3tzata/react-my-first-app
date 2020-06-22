import React, { Component } from 'react';



class InputFormSubmit extends Component {




  render() {

    return (
    <input type="submit" className="btn btn-primary" value={this.props.label}/>
)

  }


}

export default InputFormSubmit
