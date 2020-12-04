import React from "react";
import "../styles/NavBar.css";
import Logo from "../logo.png";

function NavBar() {
  return (
    <div className="Nav-bar">
      <img className="logo" src={Logo} alt="website logo" />
      <ul className="navbar-links" />
      <li className="navbar-links-item">
        <a href="default.asp">View Properties</a>
      </li>
      <li className="navbar-links-item">
        <a href="news.asp">Add a Property</a>
      </li>
    </div>
  );
}

export default NavBar;
