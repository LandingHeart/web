import React from 'react';
import { Route, Switch} from 'react-router-dom';
import About from './About';
import SignIn from './SignIn';
import Blog from './Blog';
import Home from './Home';
const Routes = () =>{
        return(
 
            <div>
            <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path= '/SignIn' component ={SignIn}></Route>
            
            <Route path = '/About' component ={About}></Route>
            <Route path = '/Blog' component ={Blog}></Route>

            </Switch>
            </div>
     
        )
    }
export default Routes;