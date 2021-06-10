import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {
  return(
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>  
        <li><NavLink to="/about">About</NavLink></li>  
        <li><NavLink to="/find">Browse</NavLink></li>  
        <li>Location</li>
      </ul>
    </nav>
  )
}

export default Nav;