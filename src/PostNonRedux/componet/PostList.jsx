import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import Post from './Post'


export default class PostList extends React.Component {

	constructor(props) {
		super(props)
		console.log(props)
		this.state ={postList : []}
	}



	componentDidMount() {

		this.getPostByUserName();
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

	getPostByUserName () {


		const url ='http://127.0.0.1:8080/posts/getMyPost';

		const requestOptions = {
        method: 'get',
		headers: { 'Content-Type': 'application/json',
		'Accept':'application/json',
		'Authorization': this.props.data.authentication },

		}

		fetch(url, requestOptions).then(this.processResponse)
	.then(response => {

		this.setState({postList: response.data })

		//console.log(response.data)

	})
	.catch(

		response => {


		//if (response.data!=null) {
		//console.log("Fail " + response.data.errorMsg )
			this.setState({msg: "Can not find posts"})

		 // }
	    }

		);



	}

	render () {

		return <div>
			<div>{
					this.state.postList.map((x)=> {return <Post key={x.postId}  data={x} />
//	this.state.postList.map((x)=> {console.log(x)

					}) }</div>
			</div>


	}

}
