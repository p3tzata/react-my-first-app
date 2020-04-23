import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Test_ extends React.Component{  
constructor(props) {  
      super(props);        
	  this.state=({ displayBio: false,
					 var:10 });  
      console.log('Component this', this);  
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
      }  
      toggleDisplayBio(){  
          this.setState({displayBio: !this.state.displayBio});  
		  this.setState({var: this.state.var+1})
		}    



 render() {  
          
			  
			  
               return (  
              <div>  
                  <TestChild childVar={this.state.var}/>
                  {  
                      this.state.displayBio ? (   
                          <div>  
                              <p><h4>{this.props.dataName} {this.props.dataInt} Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
                              <button onClick={this.toggleDisplayBio}> Show Less  </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.toggleDisplayBio}> Read More  </button>  
                              </div>  
                          )  
                  } 
                  <div>
                  {this.props.dataName ? (<p>Valid</p>) : (<p>not Valid</p>) }
                  {this.props.dataInt ? (<p>Valid</p>) : (<p>not Valid</p>) }
                  </div>    

             </div>  
        ) 
     }  


}

Test_.propTypes = {
dataName: PropTypes.string.isRequired,
dataInt: PropTypes.number.isRequired,
}

Test_.defaultProps = {  
   count: 123,
  
}

class TestChild extends React.Component {

    render() {

        return (<h1>Welcome to JavaTpoint: {this.props.childVar}!!</h1>)
    }

}






export default Test_;