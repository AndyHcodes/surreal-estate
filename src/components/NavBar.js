import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import Logo from "../logo.png";

function NavBar() {
  return (
    <nav className="Nav-bar">
      <img className="logo" src={Logo} alt="website logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
