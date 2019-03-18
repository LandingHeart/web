import React from 'react';
import { Route, Switch} from 'react-router-dom';
import About from './About';
import SignIn from './SignIn';
import games from './Games';
import Blog from './Blog';
import home from './Home';
const Routes = () =>{
        return(
 
            <div>
            <Switch>
            <Route exact path = '/home' component = {home}></Route>
            <Route path = '/SignIn' component ={SignIn}></Route>
            
            <Route path = '/Games' component ={games}></Route>
            <Route path = '/About' component ={About}></Route>
            <Route path = '/Blog' component ={Blog}></Route>

            </Switch>
            </div>
     
        )
    }
export default Routes;