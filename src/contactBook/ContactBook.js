import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import DetailItem from './DetailItem'
import dataContact from './contacts.json';
import { tsConstructorType } from '@babel/types';

class ContactBook extends React.Component{
	
	constructor() {
		super();
		this.state={
			firstName: "n/a",
			lastName: "n/a",
			phone: "n/a",
			email: "n/a",
		}
		this.changePerson = this.changePerson.bind(this);  
	}


	changePerson(id){
/*
	for (const [index, value] of dataContact.entries()) {
		if (id==index) {
		 this.setState({
			firstName: value.firstName,
			lastName: value.lastName,
			phone: value.phone,
			email: value.email,
		})
		}
		*/

		const curentItem = dataContact[id];
			this.setState({
			firstName: curentItem.firstName,
			lastName: curentItem.lastName,
			phone: curentItem.phone,
			email: curentItem.email,
			})

			
		//console.log("clicked: " +this.state.firstName);
	

	
}


render () {

	

	
	const items = [];
	
	
	for (const [index, value] of dataContact.entries()) {
	
		 items.push(<ListItem customClickEvent={() => this.changePerson(index)} firstName={value.firstName}  />)
			
		
	}

	 return (<div>
		 <div>
		 {items}
		</div>
		<br/>
		<div>
			
		<DetailItem firstName={this.state.firstName} lastName={this.state.lastName} 
		phone={this.state.phone} email={this.state.email} />
		</div>

	 </div>
	 
	 
	 )


	//	items.push(<li key={index}>{value}</li>)
  }

	
}

	




export default ContactBook; 