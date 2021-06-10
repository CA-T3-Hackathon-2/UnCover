import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {

  const allowedLocations = ["Melbourne", "Sydney", "Brisbane", "Canberra", "Perth", "Adelaide", "Hobart"]

  return(
    <nav>
      <ul style={ {display: "flex", flexDirection: "row", listStyleType: "none",  } }>
        <li><NavLink style={ {margin: "5px"} } to="/">Home</NavLink></li>  
        <li><NavLink style={ {margin: "5px"} }  to="/about">About</NavLink></li>  
        <li><NavLink style={ {margin: "5px"} } to="/find">Browse</NavLink></li>  
        <li>
          <form style={{display: "flex", flexDirection: "column"} }>
            <label>Location</label>
            <select>
              {allowedLocations.map( (location) => {
                return <option key={location}>{location}</option>
              })}
            </select>
          </form>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;