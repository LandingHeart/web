import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import Footer from './Components/Footer';


class App extends Component {
  render() {
   return(
     
      <div className="App Site">
                      <div className="Site-content">
                    <div className="App-header">
                    <Navbar />
                    <Routes />
                    </div>
                    <div className="main">
                        {/* <Main /> */}
                    </div>
                </div>
                <Footer />
            </div>
    
   )
   
  }
}

export default App;
