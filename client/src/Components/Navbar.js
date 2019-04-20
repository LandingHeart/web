import React from 'react';
import {Link} from 'react-router-dom';

import '../CSS/Navbar.css'
const Navbar = () =>{
    return (
        <nav className = "nav navbar navbar-dark">
            <div className="container">
           <Link to='/' className = "navbar-brand logo-item" > 
            <img src="../Images/image.jpg" alt="image"/>
            </Link>
            <ul className = "right">
                <li className = "nav-item"><Link to='/signin' className = "nav-link">Log in</Link></li>

                <li className = "nav-item"><Link to='/blog' className = "nav-link">Blog</Link></li>
            </ul>
            </div>
      
        </nav>
    )
}
export default Navbar;