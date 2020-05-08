
import React, { Component } from 'react';  

import './App.css';
import './component/MainSlider'
import MainSlider from './component/MainSlider';
import ListIcon from './component/ListIcon';
import IconDetail from './component/IconDetail'

class App extends Component{  
  
  constructor() {
    super();
    this.state={targetID:6}
    this.iconDetailElement = React.createRef();
    this.changeIconDetail = this.changeIconDetail.bind(this);



    
    this.funcSetTargetID = this.funcSetTargetID.bind(this);

  }

  funcSetTargetID(id) {
      this.setState({targetID: id});
    

  }


  changeIconDetail (id) {
    this.iconDetailElement.current.changeCurrentID(id);
    //console.log('OK ' +id)
  }

    

  componentDidUpdate() {
    console.log('Main change targetID:' + this.state.targetID);
  }
  

  render() {


  return (
  
         <div className='App'>  
           
    
           <button name="test" onClick={ () => {this.changeIconDetail(7)}  } >Test Button 2</button>

           <MainSlider />
           <ListIcon funSetTargetID= {  this.changeIconDetail}  />
           <IconDetail ref={this.iconDetailElement} targetID={this.state.targetID } />



         </div>  
    
  );


}
}

export default App;