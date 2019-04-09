import React from 'react'
import '../CSS/button.css';
const Button = () =>{
    function onClick(e) {
        e.preventDefault();

        console.log('The link was clicked.');
      }
    return(
        <div>
            <button onClick ={onclick} className = "btn btn-primary">
                click me

                </button>
            </div>
    )
}
export default Button;