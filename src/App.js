import React, { Component } from 'react';
import Ninja from './Components/Ninjas';
import Navbar from './Components/Navbar';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className = "app">
      <Navbar />
      
      </div>
      </BrowserRouter>
       
    )
  }
} 


export default App;
