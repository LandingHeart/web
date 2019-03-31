import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
   return(
     <div>
        <Navbar />
       <Routes />
      
      <Footer />
      </div>
   )
   
  }
}

export default App;
