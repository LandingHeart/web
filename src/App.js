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
      
      {/* WANT TO MAKE THAT A SPECIFIC PAGE BE RENDERED ON */}
      <div className="footer-content">
      <Footer />
      </div>
      <div>
    <Home />
      </div>
      </div>
      
    )
  }
} 


export default App;
