import React, { Component } from 'react'; 

import Icon from './Icon'


class IconDetail extends Component {

	constructor(props) {
		super(props);
		this.state={
			//currentID: this.props.targetID,
			imgUrl:'',
			descr:''
		}

		this.changeCurrentID=this.changeCurrentID.bind(this);


	}


	changeCurrentID (id) {

		
		this.getFromDataFromRest(id);
		console.log('Child Cliked.' + id)

	}


	componentDidMount () {

		this.getFromDataFromRest(this.props.targetID);
		console.log('IconDetail didMount, ');


	}

	



	getFromDataFromRest(id) {
		fetch('http://127.0.0.1:8080/tasks/' + id).then(data => { return data.json(); })
		.then(parsedData => { this.setState({
			//currentID: parsedData.id,
			imgUrl: parsedData.imgUrl,
			descr: parsedData.description 
		})});
	}



	


render(

) {
	return ( 
			<fieldset>
           <Icon imgUrl={this.state.imgUrl} >  </Icon>
			<p>{this.state.descr} </p>
			<button name="test" onClick={ () => {this.changeCurrentID(7)}  } >Test Child</button>
		   </fieldset>
          )
}


}

export default IconDetail;