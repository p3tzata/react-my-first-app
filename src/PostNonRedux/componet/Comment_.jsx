import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'


export default class Comment_ extends React.Component {


 constructor(props) {
	 super(props);
 }



	render () {

		return <div>
			<h1>
				{this.props.data.content}
			</h1>

			<p>
			Comment	Submit by {this.props.data.author.username}
			</p>
			<p>

			<Link to={'/comment/' +  this.props.data.commentId + '/edit'}>edit</Link>|
			<Link onClick={() => this.props.doDeleteFun( this.props.data.commentId )  } >delete</Link>|
			</p>
			</div>


	}

}
