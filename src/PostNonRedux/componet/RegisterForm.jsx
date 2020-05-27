import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'


export default class RegisterForm extends React.Component {

	constructor(props) {
		super(props)
		this.state={userName : '', password : '', confirmPassword:'', msg:'',Authorization:'',isRegisteredOk:false}


	}

	onChange(e) {
		
		this.setState( { [e.target.name] : e.target.value });

	}


	onSubmit(e) {

		e.preventDefault();
		this.doLogin();

	}



	   processResponse(response) {

	const contentType = response.headers.get("content-type");
if (contentType && contentType.indexOf("application/json") !== -1) {
	return new Promise((resolve, reject) => {
	// will resolve or reject depending on status, will pass both "status" and "data" in either case

	let func;
 
    	response.status < 400 ? func = resolve : func = reject;
		response.json().then(data => func({'status': response.status, 'data': data}));
  
})
} else {
	return response;
}



}


	doLogin(){

		const url ='http://127.0.0.1:8080/register';

		const requestOptionsPost = {
        method: 'post',
        headers: { 'Content-Type': 'application/json','Accept':'application/json' },
		body: JSON.stringify({ username: this.state.userName,
							password: this.state.password,
					  	    confirmPassword: this.state.confirmPassword })
		}
		
		
		const requestOptionsGet = {
        method: 'get',
       // headers: { 'Content-Type': 'application/json' },
	   //	body: JSON.stringify({ title: 'React POST Request Example' })

	};
	
	fetch(url, requestOptionsPost).then(this.processResponse)
	.then(response => {
		this.setState({msg: 'Register OK', isRegisteredOk:true});
		
		//console.log(this.props.data)
		this.props.data.doSuccessRegister()
	})
	.catch( 
		
		response => {
			
		
		//if (response.data!=null) {
		//console.log("Fail " + response.data.errorMsg )
			this.setState({msg: "Can not register"})

		 // }
	    }
		
		);
		

	}




	render() {


		return (

<div className="container">
<form onSubmit={this.onSubmit.bind(this)}>
<div className="form-group">
    <label htmlFor="userName">Username</label>
    <input  className="form-control" onChange={this.onChange.bind(this) }   name="userName" value={this.state.userName} aria-describedby="nameHelp" placeholder="Enter User Name"/>
</div>


<div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" password="password" name="password" onChange={this.onChange.bind(this) }  className="form-control" value={this.state.password} aria-describedby="nameHelp" placeholder="Enter Password" />
</div>

<div className="form-group">
    <label htmlFor="password">Confirm Password</label>
    <input type="password" password="password" name="confirmPassword" onChange={this.onChange.bind(this) }  className="form-control" value={this.state.confirmPassword} aria-describedby="nameHelp" placeholder="Enter Password Again" />
</div>


<button type="submit" className="btn btn-primary">Register</button>

<p>
{this.state.msg}
{ this.state.isRegisteredOk ? <div><Link to='/login' >Click here</Link> to login</div>  : null }
</p>


</form>
</div>




)


	}





}