import React, { useState } from "react";
import "./styles/styles.css";

import image from "../../assets/images/image.png";
import leftBracket from "../../assets/images/left_bracket.png";
import rightBracket from "../../assets/images/right_bracket.png";

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

// <span className="blue">&#123;</span>
// <span className="blue">&#125;</span>

const About = () => {
  const [viewSkills, setViewSkills] = useState(false);
  return (
    <article id="about">
      <section className="title">
        <img className="bracket" src={leftBracket} />
        <h3>Hello World</h3>
        <img className="bracket" src={rightBracket} />
      </section>
      <p>
        my name is Scott and I am a Boston based web developer. ever since I was
        young I have been fascinated by computers and have had a passion for
        creating things from scratch. Both have lead me into the wonderful world
        of web development.
      </p>
      <section className="buttons">
        <a onClick={() => setViewSkills(!viewSkills)}>Skills</a>
        <a href="#">Resume</a>
      </section>
      {viewSkills ? (
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
      ) : (
        <img className="image" src={image} />
      )}
    </article>
  );
};

export default About;
