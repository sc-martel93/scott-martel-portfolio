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
       I'm Scott, a software developer with expertise in Java/Spring, Javascript, React, Node.js, and AWS cloud services. I deliver high-quality, scalable web solutions by combining technical expertise with a passion for excellence. Let's create something amazing together.
      </p>

      <section className="buttons">
        <button onClick={() => setViewSkills(!viewSkills)}>
          Skills
        </button>
        <a href="/Scott_Martel_Resume.pdf" target="_blank">
          Resume
        </a>
      </section>

      {viewSkills ? <Skills /> : <img className="image" src={decoIMG} alt=""/>}
    </article>
  );
};

export default About;
