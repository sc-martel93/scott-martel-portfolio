import React from "react";
import "./styles/styles.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
