import React from 'react';
import '../CSS/design.css'
import placeholder from '../Images/imgHolder.jpg'
import Routes from './Routes'
const Home = () =>{
    return(
        <div className ="container">
            <p className = "div-divider center">
                    To raise to the next level,<br/> you have to start imagining
                    </p>
                    
            <div className = "quote content-container">
               
                    <div className="imgholder">
                    <img src = {placeholder} alt = "placeholder" height = "200" width = "340"/>
                    <div className = "imgholder2">
                    <img src = {placeholder} alt = "placeholder" height = "200" width = "340"/>   
                    </div>                 
                    </div>
                </div>
               
            
        </div>
    )
}
export default Home;