import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'


export default class Post extends React.Component {


 constructor(props) {
	 super(props);
 }



	render () {

		return <div>
			<h1>
				{this.props.data.title}
			</h1>

			<p>
				Submit by {this.props.data.author.username} on {this.props.data.createdDate.date.year}
			</p>
			<p>

			<Link to={'/post/' +  this.props.data.postId + '/comment'} >comments</Link>|
			<Link to={'/post/' +  this.props.data.postId + '/edit'}>edit</Link>|
			<Link to={'/post/' +  this.props.data.postId +  '/delete'}>delete</Link>|
			</p>
			</div>


	}

}
