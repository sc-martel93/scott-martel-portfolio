import React from "react";
import "./styles/styles.css";

import logo from "../../assets/images/Logo.PNG";

const NavBar = () => {
  return (
    <nav id="nav">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
