import React from "react";
import "./styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faJava
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section className="skills">
      <ul>
        <li>
          <FontAwesomeIcon className="icon" icon={faJava} /> Java / Spring 
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faJsSquare} />
          Javascript / Typescript
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faReact} />
          React / Redux
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faCss3} />
          SASS / Tailwind / Bootstrap 
        </li>
      </ul>
      <ul>
        <li>
          <FontAwesomeIcon className="icon" icon={faNodeJs} />
          NodeJS / ExpressJS
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faDatabase} />
          SQL / MySQL / MongoDB
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faServer} />
          AWS / Firebase
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faGitAlt} />
          Git / GitHub
        </li>
      </ul>
    </section>
  );
};

export default Skills;
