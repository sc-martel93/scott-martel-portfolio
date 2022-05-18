import React from "react";
import "./styles/styles.css";

import logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <nav id="nav">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
