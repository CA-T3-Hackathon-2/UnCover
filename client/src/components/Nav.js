import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 10rem",
  paddingTop: "5rem",
};

const linkStyle = {
  margin: " 0 2rem",
  color: "inherit",
  fontSize: "2rem",
};

const linkActiveStyle = {
  color: "#007bff",
};

const Nav = ({ location, setLocation }) => {
  const allowedLocations = [
    "Melbourne",
    "Sydney",
    "Brisbane",
    "Canberra",
    "Perth",
    "Adelaide",
    "Hobart",
  ];

  const handleLocationSelect = (e) => {
    setLocation(e.target.value);
  };

  return (
    <nav style={navStyle}>
      <h1>UnCover</h1>
      <ul
        style={{ display: "flex", flexDirection: "row", listStyleType: "none" }}
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
        <label style={{ fontSize: "2rem" }}>Location</label>
        <select
          onChange={handleLocationSelect}
          style={{ color: "#007bff", border: "none", background: "#fff" }}
        >
          {allowedLocations.map((location) => {
            return <option key={location}>{location}</option>;
          })}
        </select>
      </form>
    </nav>
  );
};

export default Nav;
