import React from 'react'
import '../CSS/button.css';
const Button = () =>{
    function onClick(e) {
        e.preventDefault();

        console.log('The link was clicked.');
      }
    return(
        <div className="columns download">
       
       <div className = "icon-container">
                <ul>
                    
                    <li className = "center icons"><a href="https://www.linkedin.com/in/shinan-liu-162172153/"><i className="fa fa-linkedin"></i></a></li>
                    <li className = "center icons"><a href="https://github.com/LandingHeart"><i className="fa fa-github"></i></a></li>
                    <li className = "center icons"><a href="https://www.slideshare.net/slideshow/embed_code/key/ufrX23ocQ9JX3O"  title="Resume" download = "resume"><i className="fa fa-file"></i>
                    </a></li>           

                </ul>
        </div>
     </div>
    )
}
export default Button;