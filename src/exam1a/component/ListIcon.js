import React, { Component } from 'react'; 
import Icon from './Icon';

class ListIcon extends Component {

	constructor(props){
		super(props);
		this.state={
			arrayList : []
		}
	

	}


	componentDidMount() {
		fetch('http://127.0.0.1:8080/tasks').then(data=>{return data.json()})
		.then(parsedData => {this.setState({arrayList : parsedData._embedded.tasks })})

	}

render(

)  {



	return (
		
	<div>{this.state.arrayList.map((x,index)=> {return <Icon key={index} customOnClick= { () => this.props.funSetTargetID(x.id) }    imgUrl={x.imgUrl}  />  }) }</div>
	
	) 
}


}

export default ListIcon;