import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinks = () =>{
    return (
        <ul className = 'right'>
        <li><NavLink to = '/'> Project </NavLink></li>
        <li><NavLink to = '/'> log in</NavLink></li>
        <li><NavLink to = '/' className = 'btn btn-floating blue lighten-1'> BLOG </NavLink></li>
        </ul>
   
    )
}
export default NavLinks;