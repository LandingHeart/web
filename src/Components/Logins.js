import React, { Component } from 'react';
import { Button, FormGroup, FormControl} from "react-bootstrap";

import '../logins.css';
import Icons from './Icons';
class Logins extends Component {
    constructor(props){
        super(props);
        this.state = {
            Email: '',
            Password: ''
        }
    }

    handelEChange = (e) =>{
        this.setState({Email:e.target.value})
    }
    handelPChange = (e) =>{
        this.setState({Password:e.target.value})
    }
    validateForm(){

        return this.state.Email.length > 0 && this.state.Password.length > 0;
    }
    handelClick = (e) =>{
        if(this.state.Email === "admin@mail" || this.state.Email === "@guest"){
            //sumit form and go to admin page ma
        }else if(this.state.Password === "pass" || this.state.password === "guest"){
            //proceed to guest page
        }
    
    }
    render() {
      
      
        return (
            <div className = "container">
                <form onSubmit = {this.handelSumit}>
                <FormGroup controlId="email">
            <label>Email</label>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handelEChange}
            />
          </FormGroup>
          <FormGroup controlId="password" >
            <label>Password</label>
            <FormControl
              value={this.state.password}
              onChange={this.handelPChange}
              type="password"
            />
          </FormGroup>
          <div>
          
            <Button to = "/MainPage" className = "btn2 btn-lg btn lighten-2"  disabled={!this.validateForm()} type="submit" >
         
            Login
        
            </Button>   
     
          </div>

                <div className = "label2">
                <label>Sign in with</label>
                <Icons />
                </div>
                </form>
            
            </div>
           
        )
      }
    } 

export default Logins;