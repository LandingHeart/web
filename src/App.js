import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import Design from './Components/Design';
class App extends Component {
  render() {
   
    return (
      <div className = "app">
      <Navbar />
      <Routes />
      <Design />
      </div>
      
    )
  }
} 


export default App;
