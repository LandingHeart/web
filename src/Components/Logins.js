import React, { Component } from 'react';
import '../logins.css';
import Icons from './Icons';
class Logins extends Component {
    render() {
        return (
            <div className = "container">
                <form>
                <label className = "label-al">
                Username:
                <input type = "text" name = "name" />
            
                </label>
                <label>
                Password:
                    <input type="text" name = "name" />
                </label>
                <button type="button" className="btn2 btn btn-secondary btn-lg">Large button</button>
              
                <Icons />
                </form>
            
            </div>
           
        )
      }
    } 

export default Logins;