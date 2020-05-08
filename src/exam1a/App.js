
import React, { Component } from 'react';  

import './App.css';
import './component/MainSlider'
import MainSlider from './component/MainSlider';
import ListIcon from './component/ListIcon';
import IconDetail from './component/IconDetail'

class App extends Component{  
  
  constructor() {
    super();
    this.state={targetID:7}
    this.iconDetailElement = React.createRef();
    this.changeIconDetail = this.changeIconDetail.bind(this);



    
    this.funcSetTargetID = this.funcSetTargetID.bind(this);

  }

  funcSetTargetID(id) {
      this.setState({targetID: id});
    

  }


  changeIconDetail (id) {
    this.setState({
      targetID: id
    })
    console.log('OK ' +id)
  }

    

 
  

  render() {


  return (
  
         <div className='App'>  
           
    
           <button name="test" onClick={ () => {this.changeIconDetail(6)}  } >Test Button 2</button>

           <MainSlider />
           <ListIcon funSetTargetID= {  this.changeIconDetail}  />
           <IconDetail targetID={this.state.targetID } />



         </div>  
    
  );


}
}

export default App;