import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import Logins from './Components/Logins';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <div className = "app">
      <Navbar />
      
      </div>
      
      </BrowserRouter>
      <Logins />
      </div>
    )
  }
} 


export default App;
