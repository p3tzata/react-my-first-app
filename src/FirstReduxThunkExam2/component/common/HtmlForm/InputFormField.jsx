import React, { Component } from 'react';

class InputFormField extends Component {


  constructor(props) {
    super(props)
    this.onChange=this.onChange.bind(this)

    this.state={validationDivCssClassState: "form-group",
      validationInputCssClassState: "form-control",
      feedback: ""}
    //form-contorl, form-control is-valid,  form-control is-invalid,
  }

  onChange(e) {

    if(typeof this.props.onChangeSetState !== "undefined") {
        this.props.onChangeSetState(e)
    }

    this.validate()


  }

  componentDidUpdate(prevProps) {

   if (this.props.value!==prevProps.value) {
     this.validate();
   }

  if (Number(this.props.isForceToValidate) !== Number(prevProps.isForceToValidate)) {

      if (this.props.isForceToValidate===1) {
      this.validate();

    }

   }
  }



  validate(){

    if(typeof this.props.onValidate !== "undefined") {
    const onValidate =  this.props.onValidate()

    if (onValidate===-1) {
      this.setState({validationInputCssClassState: "form-control is-invalid"
      ,feedback:this.props.onValidateNegativeFeedBackText})


    } else if(onValidate===1) {
      this.setState({validationInputCssClassState: "form-control is-valid"
      ,feedback:this.props.onValidatePositiveFeedBackText})




    } else {
        this.setState({validationInputCssClassState: "form-control"})

    }

    }

  }

  render() {

    return (
    <div className={this.state.validationCssClassState}>
      <label className="form-control-label" htmlFor={this.props.id}>
        {this.props.label}
      </label>
      <input onChange={this.onChange} value={this.props.value} className={this.state.validationInputCssClassState} id={this.props.id} name={this.props.name} type={this.props.type} />
      <div className="form-control-feedback">{this.state.feedback}</div>
    </div>
)

  }


}

export default InputFormField
