import React from "react";
import { NavLink } from "react-router-dom";
// assets
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logo.png";
import '../index.css'
// styled components
import {NavStyle, NavSelectStyle, NavLabelStyle, NavImg} from "./styled/nav/NavStyle";

const linkStyle = {
  margin: " 0 2rem",
  color: "inherit",
  fontSize: "2rem",
  textDecoration: "none",
};

const Nav = ({ selectedlocation, hamburgerOpen, dispatch }) => {
  const allowedLocations = [
    "Melbourne",
    "Sydney",
    "Brisbane",
    "Darwin",
    "Perth",
    "Adelaide",
    "Newcastle",
  ].sort((a, b) => (a[0] > b[0] ? 1 : -1));

  const linkActiveStyle = {
    color: [hamburgerOpen ? "#000000" : "#3b9bd1"],
  };

  const handleLocationSelect = (e) => {
    // Need a way to make sure location is being set correctly
    if (window.location.href.match(/results/)) {
      if (
        window.confirm(
          "Are you sure you wish to update location? This will remove current events."
        )
      ) {
        window.location.href = "http://localhost:3000/find";
      }
    }
    dispatch( {type: "setLocation", data: e.target.value} );
  };
  
  const toggleData = (data) => !data

  const handleToggle = () => {
    dispatch( {type: "setHamburgerOpen", data: 
    toggleData(hamburgerOpen) } );
    
  }

  return (
    <NavStyle>
      <NavLink exact to="/"><NavImg src={Logo} alt="logo" width="200px" /></NavLink>
      <ul
        style={{ display: "flex", flexDirection: "row", listStyleType: "none" }}
        className={`menuNav ${hamburgerOpen? " showMenu":" "  }`}
      >
        <li>
          <NavLink style={linkStyle} activeStyle={linkActiveStyle} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={linkStyle}
            activeStyle={linkActiveStyle}
            exact
            to="/find"
          >
            Find Events
          </NavLink>
        </li>
        <li>
          <NavLink
            style={linkStyle}
            activeStyle={linkActiveStyle}
            exact
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <NavLabelStyle>Location</NavLabelStyle>
        <NavSelectStyle
          onChange={handleLocationSelect}
          value={selectedlocation}
        >
          {allowedLocations.map((location) => {
            return <option key={location}>{location}</option>;
          })}
        </NavSelectStyle>
      </form>
      {/* hamburger menu */}
      <button style={{border: "none", background: "transparent", fontSize: "2.5rem"} } onClick={handleToggle}>
        {hamburgerOpen ? (<MdClose />) : <FiMenu />}</button>
    </NavStyle>
  );
};

export default Nav;
