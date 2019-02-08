import React, { Component } from 'react';
import Ninja from './Components/Ninjas';

class App extends Component {
  state = {
    ninjas : [
      {name: 'mike', age: '20', race: 'asian', id: 1},
      {name: 'alex', age: '30', race: 'caucasian', id: 2},
      {name: 'thomas', age: '10', race: 'Indian', id: 3}
    ]
  }

  render() {
    return (
      
        <div className="ninja-list"> 
        <Ninja ninjas = {this.state.ninjas} />
        
        </div>
        

   
    )
  }
} 


export default App;
