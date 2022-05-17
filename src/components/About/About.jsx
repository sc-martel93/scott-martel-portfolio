import React, { useState } from "react";
import Skills from "./Skills/Skills";
import "./styles/styles.css";

import image from "../../assets/images/image3.png";
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
        My name is Scott and I am a Boston based web developer. Ever since I was
        young I have been fascinated by computers and have had a passion for
        creating things from scratch. This has lead me into the wonderful world 
        of web development.
      </p>

      <section className="buttons">
        <a href="#about" onClick={() => setViewSkills(!viewSkills)}>
          Skills
        </a>
        <a href="/resume.pdf" target="_blank">
          Resume
        </a>
      </section>

      {viewSkills ? <Skills /> : <img className="image" src={image} />}
    </article>
  );
};

export default About;
