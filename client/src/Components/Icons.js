import React from 'react';
import '../CSS/icons.css';

const Icons = () =>{
    return(
        <div className = "icon-container">
                <ul>
                    <li className = "center"><a href="http://facebook.com/"><i className="fa fa-facebook"></i></a></li>
                    <li className = "center"><a href="http://linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                    <li className = "center"><a href="http://twitter.com/"><i className="fa fa-twitter center"></i></a></li>
                    <li className = "center"><a href="http://plus.google.com/"><i className="fa fa-google-plus"></i> </a></li>
                </ul>
        </div>
                
        )

}

export default Icons;