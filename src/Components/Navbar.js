import React from 'react';
import {Link} from 'react-router-dom';

import '../Navbar.css'
const Navbar = () =>{
    return (
        <nav className = "nav-wrapper grey darken-2 nav">
            <div className="container">
            <a href = '/'><Link to='/home' className = "brand-logo btn-floating btn logo">LS</Link></a>
            <ul className = "right">
             
                <li><Link to='/signin'>Log in</Link></li>
                <li><Link to='/games'>Game</Link></li> 
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
            </ul>
            </div>
      
        </nav>
    )
}
export default Navbar;