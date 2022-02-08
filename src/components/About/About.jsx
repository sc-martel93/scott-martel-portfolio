import React, { useState } from "react";
import Skills from "./Skills/Skills";
import "./styles/styles.css";

import image from "../../assets/images/image.png";
import leftBracket from "../../assets/images/left_bracket.png";
import rightBracket from "../../assets/images/right_bracket.png";

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
        <a href="#skills" onClick={() => setViewSkills(!viewSkills)}>
          Skills
        </a>
        <a href="#">Resume</a>
      </section>

      {viewSkills ? <Skills /> : <img className="image" src={image} />}
    </article>
  );
};

export default About;
