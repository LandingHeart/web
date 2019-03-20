import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import Footer from './Components/Footer';
import Home from './Components/Home'
class App extends Component {
  render() {
   
    return (
      <div className = "app">
      <Navbar />
      <Routes />
      
   
    
     
        <Home />
        <Footer />
      </div>
      
    )
  }
} 


export default App;
