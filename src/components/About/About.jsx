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
        My name is Scott and I am a recent computer science graduate with a passion for developing innovative and user-friendly web applications. With experience in both front-end and back-end technologies, I am a skilled full stack web developer specializing in Java/Spring Boot, React, AWS, Node.js, Javascript, CSS, and HTML. My expertise in these technologies, combined with my strong problem-solving skills and attention to detail, has allowed me to deliver high-quality software solutions to clients. I am eager to bring my skills and knowledge to a dynamic and fast-paced work environment where I can continuously learn and grow as a developer.
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
