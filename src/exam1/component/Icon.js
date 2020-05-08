import React, { Component } from 'react'; 
import PropTypes from 'prop-types';  

class Icon extends Component {

   constructor(props) {

    super(props);
    //console.log(this.props.customOnClick);

   }


render(

) {
	return ( 
           <img className='listIcon' onClick={() => {this.props.customOnClick();  } } alt='test' src={this.props.imgUrl}/>
          )
}


}

Icon.propTypes = {  
      
    customOnClick: PropTypes.func,  
       
}  
Icon.defaultProps = {  
    customOnClick: () => {return true;},  
      
}



export default Icon;