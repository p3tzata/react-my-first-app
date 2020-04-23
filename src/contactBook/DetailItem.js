import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ListItem extends React.Component{
	


render () {


	return (<div className="content">
                <div className="info">
                    <div className="col">
                        <span className="avatar">&#9787;</span>
                    </div>
                    <div className="col">
                        <span className="name">{this.props.firstName}</span>
                        <span className="name">{this.props.lastName}</span>
                    </div>
                </div>
                <div className="info">
                    <span className="info-line">&phone; {this.props.phone}</span>
                    <span className="info-line">&#9993; {this.props.email}</span>
                </div>
            </div>
            )
}

	


}


export default ListItem; 