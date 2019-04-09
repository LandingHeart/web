import React from 'react';
import {Link} from 'react-router-dom';

import '../CSS/Navbar.css'
const Navbar = () =>{
    return (
        <nav className = "nav">
            <div className="container">
           <Link to='/' className = "navbar-brand" > 
           <a class="navbar-brand" href="#">
          <img src="./Images/logo.jpg" alt="" />
                </a>

            </Link>
            <ul className = "right">
                <li className = "nav-item"><Link to='/signin' className = "nav-link">Log in</Link></li>

                <li className = "nav-item"><Link to='/games' className = "nav-link">Game</Link></li> 

                <li className = "nav-item"><Link to='/about' className = "nav-link">About</Link></li>

                <li className = "nav-item"><Link to='/blog' className = "nav-link">Blog</Link></li>
            </ul>
            </div>
      
        </nav>
    )
}
export default Navbar;