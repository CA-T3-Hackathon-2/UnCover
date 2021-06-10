import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = ({ location, setLocation }) => {

  const allowedLocations = ["Melbourne", "Sydney", "Brisbane", "Canberra", "Perth", "Adelaide", "Hobart"]

  const handleLocationSelect = e => {
    setLocation(e.target.value)
  }

  return(
    <nav>
      <ul style={ {display: "flex", flexDirection: "row", listStyleType: "none",  } }>
        <li><NavLink style={ {margin: "5px"} } to="/">Home</NavLink></li>  
        <li><NavLink style={ {margin: "5px"} }  to="/about">About</NavLink></li>  
        <li><NavLink style={ {margin: "5px"} } to="/find">Browse</NavLink></li>  
        <li>
          <form style={{display: "flex", flexDirection: "column"} }>
            <label>Location</label>
            <select onChange={handleLocationSelect}>
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