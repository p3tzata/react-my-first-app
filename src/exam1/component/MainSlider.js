import React, { Component } from 'react'; 
import leftArrow from '../../resource/leftArrow.png';
import rightArrow from '../../resource/rightArrow.png';
 

class MainSlider extends Component {

	constructor() {
		super();
		this.state = {
			currentID : 6,
			currentImgUrl: ''
		}
	}



	componentDidMount() {

		this.getTaskByID(this.state.currentID);

	}


	getTaskByID (id) {
	fetch('http://127.0.0.1:8080/tasks/' + id )
		.then( data => {
			//console.log(data); 
			return data.json()} )
		.then(parsedData => {
			//console.log(parsedData);
			this.setState({currentImgUrl: parsedData.imgUrl,currentID:id })
			});

	}



	render() {
		return (
			<div>
			<img className='mainSlider-leftArrow' alt='left' src={leftArrow} onClick={()=>{this.getTaskByID(this.state.currentID-1);} } />
			<img className='mainSlider' alt='left' src={this.state.currentImgUrl}  />	
		    <img className='mainSlider-leftArrow' alt='right' src={rightArrow} onClick={()=>{this.getTaskByID(this.state.currentID+1);} }  />
			</div> 
		);
	}

}

export default MainSlider;