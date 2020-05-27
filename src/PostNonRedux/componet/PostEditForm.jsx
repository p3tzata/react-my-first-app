import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'


export default class PostEditForm extends React.Component {

	constructor(props) {
		super(props)
		this.state={postId:"", description : '', title : '', url:'', msg:'',errorMsg:[]}


	}

	onChange(e) {

		this.setState( { [e.target.name] : e.target.value });

	}


	onSubmit(e) {

		e.preventDefault();
		this.doLogin();

	}


	componentDidMount(){
	this.getPostFromDB(this.props.match.match.params.postId);

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

getPostFromDB(id) {

	const url ='http://127.0.0.1:8080/posts/'+ id;

	const requestOptionsPost = {
			method: 'get',
			headers: {
			'Content-Type': 'application/json',
				'Accept':'application/json',
				'Authorization': this.props.data.authentication
			 }
	}


fetch(url, requestOptionsPost).then(this.processResponse)
.then(response => {
	this.setState({description: response.data.description, title:response.data.title, url:response.data.url, postId: id,errorMsg:[] });

	//console.log(this.props.data)
//	this.props.data.doSuccessRegister()
})
.catch(

	response => {


	//if (response.data!=null) {
	console.log("Fail " + response.data )
	//response.data.map((x)=> {console.log(x)});

this.setState({errorMsg: response.data})
		this.setState({msg: "Can not Create"})

	 // }
		}

	);



}

	doLogin(){

		const url ='http://127.0.0.1:8080/posts/'+ this.state.postId;

		const requestOptionsPost = {
        method: 'post',
        headers: {
				'Content-Type': 'application/json',
					'Accept':'application/json',
					'Authorization': this.props.data.authentication
				 },
		body: JSON.stringify({
							postId: this.state.postId,
							description: this.state.description,
							title: this.state.title,
					  	url: this.state.url })
		}


	fetch(url, requestOptionsPost).then(this.processResponse)
	.then(response => {
		this.setState({msg: 'Inserted OK', errorMsg:[] });

		//console.log(this.props.data)
	//	this.props.data.doSuccessRegister()
	})
	.catch(

		response => {


		//if (response.data!=null) {
		console.log("Fail " + response.data )
    //response.data.map((x)=> {console.log(x)});

this.setState({errorMsg: response.data})
			this.setState({msg: "Can not Create"})

		 // }
	    }

		);


	}




	render() {


		return (

<div className="container">
<form onSubmit={this.onSubmit.bind(this)}>
<div className="form-group">
    <label htmlFor="description">description</label>
    <input  className="form-control" onChange={this.onChange.bind(this) }   name="description" value={this.state.description} aria-describedby="nameHelp" placeholder="Enter description"/>
</div>


<div className="form-group">
    <label htmlFor="title">title</label>
    <input type="text"  name="title" onChange={this.onChange.bind(this) }  className="form-control" value={this.state.title} aria-describedby="nameHelp" placeholder="Enter title" />
</div>

<div className="form-group">
    <label htmlFor="password">url</label>
    <input type="text"  name="url" onChange={this.onChange.bind(this) }  className="form-control" value={this.state.url} aria-describedby="nameHelp" placeholder="Enter url" />
</div>


<button type="submit" className="btn btn-primary">Update Post</button>

<p>
{this.state.msg}
{
	this.state.errorMsg.map((x) => { return <p> {x.errorMsg}</p>  })
}
</p>


</form>
</div>




)


	}





}
