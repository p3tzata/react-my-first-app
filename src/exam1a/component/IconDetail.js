import React, { Component } from 'react'; 

import Icon from './Icon'


class IconDetail extends Component {

	constructor(props) {
		super(props);
		this.state={

			fetchedID: 0,
			targetID: this.props.targetID,
			imgUrl:'',
			descr:''
		}

	


	}




/**/
	componentDidMount () {

		this.getFromDataFromRest(this.state.targetID);
		console.log('IconDetail didMount, '+ this.state.targetID );


	}

	componentDidUpdate (prevProps,prevState) {
		this.getFromDataFromRest(this.state.targetID);
		console.log('IconDetail didUpdated, ' +this.state.targetID);
	}



/* */


	static getDerivedStateFromProps(props, state) {
console.log('getDerivedStateFromProps'+ props.targetID)
console.log('getDerivedStateFromProps'+ state.fetchedID)

    if (props.targetID !== state.fetchedID) {
      return {
        targetID: props.targetID,
      };
    }

    // Return null to indicate no change to state.
    return null;
  }

shouldComponentUpdate(nextProps,nextState) {


 if(nextState.targetID!==this.state.fetchedID) {
console.log('should update.');
		return true;
	}
	else {
		return false;
	}

	
}

	



	getFromDataFromRest(id) {
		fetch('http://127.0.0.1:8080/tasks/' + id).then(data => { return data.json(); })
		.then(parsedData => { this.setState({
			fetchedID: parsedData.id,
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