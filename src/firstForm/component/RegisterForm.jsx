
import React, { Component } from 'react';  


export default class RegiserForm extends Component {

	constructor(props) {
		super(props)
		this.state={username: '', password:'', passwordConfirm:'',msg:''}
		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.doRegistraton=this.doRegistraton.bind(this);
	}



	onChange(e) {

		this.setState( {[e.target.name] : e.target.value }  );

	} 

	onSubmit(e) {
		e.preventDefault();
		
		this.doRegistraton();

	}


/*
   processResponse(response) {
  return new Promise((resolve, reject) => {
    // will resolve or reject depending on status, will pass both "status" and "data" in either case
    let func;
    response.status < 400 ? func = resolve : func = reject;
    response.json().then(data => func({'status': response.status, 'data': data}));
  });
}
*/

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




	doRegistraton(){

		const url ='http://127.0.0.1:8080/register';

		const requestOptionsPost = {
        method: 'post',
        headers: { 'Content-Type': 'application/json','Accept':'application/json' },
		body: JSON.stringify({ username: this.state.username,
							password: this.state.password,
							confirmPassword: this.state.passwordConfirm })
		}
		
		
		const requestOptionsGet = {
        method: 'get',
       // headers: { 'Content-Type': 'application/json' },
	   //	body: JSON.stringify({ title: 'React POST Request Example' })

	};
	
	fetch(url, requestOptionsPost).then(this.processResponse)
	.then(response => {
		//console.log("OK "+response.data.message))
		this.setState({msg: response.data.message});
	})
	.catch( 
		
		response => {
		if (response.data!=null) {
		//console.log("Fail " + response.data.errorMsg )
			this.setState({msg: response.data.errorMsg})

		  }
	    }
		
		);
		

	}





	render() {

		return (<div>	
			<form onSubmit={this.onSubmit}>
			Username:	
			<input type='text' onChange={this.onChange} name='username' value={this.state.username} />
			<br/>
			Password:
			<input type='password' onChange={this.onChange} name='password' value={this.state.password} />
			<br/>
			Confirm Password
			<input type='password' onChange={this.onChange} name='passwordConfirm' value={this.state.passwordConfirm} />
			<br/>
			<input type='submit' value='Register' />
			<br/>
			<p name='msg' >{this.state.msg}</p>
			</form>
			</div>
		)

	}

}