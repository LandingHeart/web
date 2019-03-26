import React from 'react';
import '../CSS/design.css'
import placeholder from '../Images/imgHolder.jpg'
const Games = () =>{
    return(
        <div className ="container">
        
            <p className = "div-divider center">
            placeholder content for games
                    </p>
                    
            <div className = "content-container">
               
                <div className="img-holder">
                    <img src = {placeholder} alt = "placeholder" height = "200" width = "340"/>
                    <div className = "imgholder2">
                    <img src = {placeholder} alt = "placeholder" height = "200" width = "340"/>   
                    </div> 
                    <div className = "imgholder3">
                    <img src = {placeholder} alt = "placeholder" height = "200" width = "340"/>   
                    </div>                 
                    </div>
                </div>
               
            
        </div>
    )
}
export default Games;