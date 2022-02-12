import React from "react";
import "./styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
          <a>
            <FontAwesomeIcon className="icon" icon={faGithubSquare} />
            GitHub
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            LinkedIn
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faLocationDot} /> Boston
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
