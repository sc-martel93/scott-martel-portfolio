import React from "react";
import "./styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            Email
          </a>
        </li>
        <li>
          <a>GitHub</a>
        </li>
        <li>
          <a>LinkedIn</a>
        </li>
        <li>
          <a>Boston</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
