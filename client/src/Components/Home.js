import React from 'react';
import '../CSS/design.css'
import placeholder from '../Images/imgHolder.jpg'
const Home = () =>{
    return(
        <div className ="container">
        
         {/* <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link> */}

            <p className = "div-divider center">
                    To raise to the next level,<br/> you have to start imagining
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
export default Home;