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
    handelChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handelSummit = (e) =>{
         e.preventDefault();
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
    printState(){
        console.log(this.state.Password);
        console.log(this.state.email);
    }
    render() {
        return (
            <div className = "container">
                <form onSummit = {this.handelSummit}>
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
                <Button disabled={!this.validateForm()} type="submit" className = "btn2 btn btn-secondary btn-lg">
            Login
          </Button>
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