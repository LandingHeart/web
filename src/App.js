import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';

class App extends Component {
  render() {
   
    return (
      <div className = "app">
      <Navbar />
      <Routes />
     
      </div>
    )
  }
} 


export default App;
