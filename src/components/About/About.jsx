import React, { useState } from "react";
import Skills from "./Skills/Skills";
import "./styles/styles.css";

import decoIMG from "../../assets/decoImage.PNG";
import leftBracket from "../../assets/leftBracket.PNG";
import rightBracket from "../../assets/rightBracket.PNG";

const About = () => {
  const [viewSkills, setViewSkills] = useState(false);
  
  return (
    <article id="about">
      <section className="title">
        <img className="bracket" src={leftBracket} alt="" />
        <h3>Hello World</h3>
        <img className="bracket" src={rightBracket} alt="" />
      </section>
      <p>
        My name is Scott and I am a Boston based web developer. Ever since I was
        young I have been fascinated by computers and have had a passion for
        creating things from scratch. This has lead me into the wonderful world 
        of web development.
      </p>

      <section className="buttons">
        <button onClick={() => setViewSkills(!viewSkills)}>
          Skills
        </button>
        <a href="/resume.pdf" target="_blank">
          Resume
        </a>
      </section>

      {viewSkills ? <Skills /> : <img className="image" src={decoIMG} alt=""/>}
    </article>
  );
};

export default About;
