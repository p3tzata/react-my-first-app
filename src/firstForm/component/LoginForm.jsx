
import React, { Component } from 'react';  


export default class LoginForm extends Component {

	constructor(props) {
		super(props)
		this.state={username: '', password:'', msg:'', Authorization:'',nameTask:'',descrTask:''}
		this.onChange=this.onChange.bind(this);
		this.onSubmitLogin=this.onSubmitLogin.bind(this);
		this.onSubmitTask=this.onSubmitTask.bind(this);
		this.doRegistraton=this.doRegistraton.bind(this);
	}



	onChange(e) {

		this.setState( {[e.target.name] : e.target.value }  );

	} 

	onSubmitLogin(e) {
		e.preventDefault();
		
		this.doRegistraton();

	}

	onSubmitTask(e) {
		e.preventDefault();
		
		this.doCreateTaks();

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




	doRegistraton(){

		const url ='http://127.0.0.1:8080/login';

		const requestOptionsPost = {
        method: 'post',
        headers: { 'Content-Type': 'application/json','Accept':'application/json' },
		body: JSON.stringify({ username: this.state.username,
							password: this.state.password })
		}
		
		
		const requestOptionsGet = {
        method: 'get',
       // headers: { 'Content-Type': 'application/json' },
	   //	body: JSON.stringify({ title: 'React POST Request Example' })

	};
	
	fetch(url, requestOptionsPost).then(this.processResponse)
	.then(response => {
		console.log("OK "+response.data.Authorization)
		this.setState({Authorization: response.data.Authorization })
		
		//this.setState({msg: response.data.message});
	})
	.catch( 
		
		response => {
			
		
		//if (response.data!=null) {
		//console.log("Fail " + response.data.errorMsg )
			this.setState({msg: "Can not login"})

		 // }
	    }
		
		);
		

	}



doCreateTaks(){

		const url ='http://127.0.0.1:8080/tasks';

		const requestOptionsPost = {
        method: 'post',
		headers: { 'Content-Type': 'application/json','Accept':'application/json',
	'Authorization' : this.state.Authorization + '999' },
		body: JSON.stringify({ name: this.state.nameTask,
							description: this.state.descrTask,
							imgUrl: 'test.png' })
		}
		
		
		const requestOptionsGet = {
        method: 'get',
       // headers: { 'Content-Type': 'application/json' },
	   //	body: JSON.stringify({ title: 'React POST Request Example' })

	};
	
	fetch(url, requestOptionsPost).then(this.processResponse)
	.then(response => {
		
		this.setState({msg: 'Task with id' + response.data.id + 'created' })
		
		//this.setState({msg: response.data.message});
	})
	.catch( 
		
		response => {
			
		
		//if (response.data!=null) {
		//console.log("Fail " + response.data.errorMsg )
			this.setState({msg: "Can not create"})

		 // }
	    }
		
		);
		

	}





	render() {


		if (this.state.Authorization==='') {
		return ( <div>	
			
			
			
			<form onSubmit={this.onSubmitLogin}>
			Username:	
			<input type='text' onChange={this.onChange} name='username' value={this.state.username} />
			<br/>
			Password:
			<input type='password' onChange={this.onChange} name='password' value={this.state.password} />
			<br/>
			<input type='submit' value='Login' />
			<br/>
			<p name='msg' >{this.state.msg}</p>
			</form>
			
		   
		


			</div>
			)

		} else {
			return (
				<div>
			<form onSubmit={this.onSubmitTask}>
			Name:	
			<input type='text' onChange={this.onChange} name='nameTask' value={this.state.nameTask} />
			<br/>
			Description:
			<input type='password' onChange={this.onChange} name='descrTask' value={this.state.descrTask} />
			<br/>
			<input type='submit' value='Create' />
			<br/>
			<p name='msg' >{this.state.msg}</p>
			</form>
			</div>
			)
		} 



	}

}