import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import Comment_ from './Comment_'


export default class CommentForm extends React.Component {

	constructor(props) {
		super(props)
		this.state={content : '',commentList:[], msg:'',errorMsg:[]}


	}

	onChange(e) {

		this.setState( { [e.target.name] : e.target.value });

	}


	onSubmit(e) {

		e.preventDefault();
		this.doLogin();

	}


componentDidMount() {

this.getCommentByPost()

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


doDeleteComment(id) {

console.log(id);
const url ='http://127.0.0.1:8080/comments/' + id;

const requestOptions = {
		method: 'DELETE',
		headers: {
		'Content-Type': 'application/json',
			'Accept':'application/json',
			'Authorization': this.props.data.authentication
		 }
}



fetch(url, requestOptions).then(this.processResponse)
.then(response => {
	this.setState({msg: 'Delete OK', errorMsg:[] });
	this.getCommentByPost()
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

		const url ='http://127.0.0.1:8080/comments/';

		const requestOptionsPost = {
        method: 'post',
        headers: {
				'Content-Type': 'application/json',
					'Accept':'application/json',
					'Authorization': this.props.data.authentication
				 },
		body: JSON.stringify({ content: this.state.content,
						  post: {	postId: this.props.match.match.params.postId }
						 })
		}


	fetch(url, requestOptionsPost).then(this.processResponse)
	.then(response => {
		this.setState({msg: 'Inserted OK', errorMsg:[] });
		this.getCommentByPost()
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

	getCommentByPost () {


		const url ='http://127.0.0.1:8080/comments/?postId=' + this.props.match.match.params.postId ;

		const requestOptions = {
				method: 'get',
		headers: { 'Content-Type': 'application/json',
		'Accept':'application/json',
		'Authorization': this.props.data.authentication },

		}

		fetch(url, requestOptions).then(this.processResponse)
	.then(response => {

		this.setState({commentList: response.data })

		//console.log(response.data)

	})
	.catch(

		response => {


		//if (response.data!=null) {
		//console.log("Fail " + response.data.errorMsg )
			this.setState({msg: "Can not find comments"})

		 // }
			}

		);



	}


	render() {


		return (

<div className="container">
<form onSubmit={this.onSubmit.bind(this)}>
<div className="form-group">
    <label htmlFor="description">content</label>
    <input  className="form-control" onChange={this.onChange.bind(this) }   name="content" value={this.state.content} aria-describedby="nameHelp" placeholder="Enter content"/>
</div>






<button type="submit" className="btn btn-primary">Create</button>

<p>
{this.state.msg}
{
	this.state.errorMsg.map((x) => { return <p> {x.errorMsg}</p>  })
}
</p>


</form>


<div>{
		this.state.commentList.map((x)=> {return <Comment_ key={x.commentId}  data={x} doDeleteFun={this.doDeleteComment.bind(this)} />
//	this.state.postList.map((x)=> {console.log(x)

		}) }</div>



</div>




)


	}





}
