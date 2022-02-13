import React from "react";
import "./styles/styles.css";

const NavBar = () => {
  return (
    <nav id="nav">
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
