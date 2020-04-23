import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ListItem extends React.Component{
	


render () {


	return (<div className="contact" onClick={this.props.customClickEvent} data-id="id">
                    <span className="avatar small">&#9787;</span>
<span className="title">{this.props.firstName}</span>
            </div>)
}

	


}


export default ListItem; 