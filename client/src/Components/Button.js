import React from 'react'
import '../CSS/button.css';
const Button = () =>{
    function onClick(e) {
        e.preventDefault();

        console.log('The link was clicked.');
      }
    return(
        <div>
            <button type = "submit" onClick ={onClick} className = "btn btn-primary">
            Resume
                <a href="path_to_file" download="proposed_file_name">  </a>
                </button>
            </div>
    )
}
export default Button;