
import React, { Component } from 'react';  

import './App.css';


class App extends Component{  
  

    constructor(props){
      super(props);
      this.state={inputUsernameValue:''}
    }

    showHi_byRef(msg){
      alert('Hello by ref '+msg)
    }

    showHi_byRef1(){
      alert('Hello by ref')
    }

   showHi_execute(){
      alert('Hello execute ')
   }


/*
        <button onClick={this.showHi_byRef}>click Me </button>
        <button onClick={() => {this.showHi_byRef('ttttest')}}>click Me Ref 2 </button>
*/

   onSubmit(e) {
     e.preventDefault();
     alert(this.state.inputUsernameValue);
   }

  onChange(e) {

      this.setState({inputUsernameValue: e.target.value});

  }

  render() {




  return ( 
  
         <div className='App'>  

        <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" onChange={ (e) => {this.onChange.bind(this)(e); }} value={this.state.inputUsernameValue} />
        <input type="submit" text="click me"/>
        </form>



        <ToggleButton/>
        <DivChangeColor number={1}/>
        <DivChangeColor number={2}/>
        <DivChangeColor number={3}/>                

         </div>  
    
  )

  
}
}



class DivChangeColor extends Component {

  constructor(props){
  super(props);
  this.state={isActive: false};
  }


  onMouseOver(){
    this.setState({isActive:true})
  }

  onMouseLeave(){
    this.setState({isActive:false})
  }



  render() {

    return <div className={this.state.isActive ? 'ActiveDiv' : 'NonActiveDiv' } 
    onMouseOver={this.onMouseOver.bind(this)}
    onMouseLeave={this.onMouseLeave.bind(this)}
    >This is container nomer: {this.props.number} </div>
  
  }


}





class ToggleButton extends Component {


  constructor(props) {
    super(props)
    this.state={isToggled: false};
    this.changeToggleState=this.changeToggleState.bind(this)
  
  }


  changeToggleState(){
    this.setState( prev => ({isToggled: !prev.isToggled})  );
  }


  render() {
    return(<div>
        
    <button onClick={this.changeToggleState} > {this.state.isToggled ? 'On' : 'Off' } </button>

       </div> )
  }



}



export default App;