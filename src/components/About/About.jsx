import React from "react";
import "./styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <article id="about">
      <h3>
        <span className="blue">&#123;</span> Hello World{" "}
        <span className="blue">&#125;</span>
      </h3>
      <p>
        my name is Scott and I am a Boston based web developer. ever since I was
        young I have been fascinated by computers and have had a passion for
        creating things from scratch. Both have lead me into the wonderful world
        of web development.
      </p>
      <section className="buttons">
        <a href="#">Skills</a>
        <a href="#">Resume</a>
      </section>
      <section className="skills">
        <ul>
          <li>
            <FontAwesomeIcon className="icon" icon={faHtml5} /> HTML / CSS
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faCss3} />
            SASS, Tailwind, Bootstrap, MaterialUI
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faJsSquare} />
            Javascript
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faReact} />
            React / Redux
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
            Heroku / Firebase
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faGitAlt} />
            Git / GitHub
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
