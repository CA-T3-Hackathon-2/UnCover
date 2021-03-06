import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

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
  textDecoration: "none",
};

const linkActiveStyle = {
  color: "#3b9bd1",
};

const Nav = ({ selectedlocation, setLocation }) => {
  const allowedLocations = [
    "Melbourne",
    "Sydney",
    "Brisbane",
    "Darwin",
    "Perth",
    "Adelaide",
    "Newcastle",
  ].sort((a, b) => (a[0] > b[0] ? 1 : -1));

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
    sessionStorage.setItem("location", e.target.value);
    setLocation(e.target.value);
  };

  return (
    <nav style={navStyle}>
      <NavLink exact to="/"><img src={Logo} alt="logo" width="200px" /></NavLink>
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
          style={{ color: "#3b9bd1", border: "none", background: "#fff" }}
          value={selectedlocation}
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
