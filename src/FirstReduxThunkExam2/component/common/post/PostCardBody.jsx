import React, { Component } from 'react';

export default class PostCardBody extends Component {

   render() {

     return (<div className="card-body">
  <blockquote className="card-blockquote">
    <img alt="t" src="img/sofa.jpg" />
    <p>
      {this.props.payload.description}
    </p>
    <footer>
      {this.props.payload.title}
    </footer>
    <div className="pull-right">
      <a href="/#" onClick={() => {this.props.onDetailClick(this.props.payload.postId)}} className="btn btn-info">
        Edit
      </a>

      { this.props.isDeleteable==="true" ?
      <a href="/#" onClick={() => {this.props.onDeleteClick(this.props.payload.postId)}} className="btn btn-danger">
        Delete Item
      </a> : ''
      }


    </div>
  </blockquote>
</div>
      )

   }
}
