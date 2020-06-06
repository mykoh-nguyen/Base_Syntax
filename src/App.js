import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput'
import UserOutput from './UserOutput'

class App extends Component {
  state={
    text:"",
    userName:"Michael"
  }

  InputChanged=(event)=>{
    this.setState({
      text:event.target.value
    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header"/>
      <>
        <UserInput changed={this.InputChanged}/>
        <UserOutput username={this.state.userName}  text={this.state.text}/>
      </>
    </div>
    );
  }
}

export default App;
