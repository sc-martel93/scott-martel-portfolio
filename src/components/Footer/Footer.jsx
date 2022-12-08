import React from "react";
import "./styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="mailto:scmartel2022@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
            Email
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sc-martel93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="footer-icon" icon={faGithubSquare} />
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/scott-martel-542b86210/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="footer-icon" icon={faLinkedin} />
            LinkedIn
          </a>
        </li>
        <li>
          <FontAwesomeIcon className="footer-icon" icon={faLocationDot} />
          Boston
        </li>
        <li>
          <a href="#nav">
            <FontAwesomeIcon className="footer-icon" icon={faArrowUp} />
            Top
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
