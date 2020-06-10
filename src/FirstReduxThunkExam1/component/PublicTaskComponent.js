import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class PublicTask extends Component {


    render () {

      let style = this.props.selected==="true" ? "PublicTask Active" : "PublicTask "
      let linkTo = "/detail/".concat(this.props.payload.postId);
      return <Link  to={linkTo}>
      <div  className={style}>{this.props.payload.title}</div>
      </Link>
    }

}
