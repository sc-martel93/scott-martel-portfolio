import React from "react";
import "./styles/styles.css";

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
      <div className="buttons">
        <a href="#">Skills</a>
        <a href="#">Resume</a>
      </div>
      <section>
        <ul className="skills">
          <li>HTML / CSS</li>
          <li>SASS, Tailwind, Bootstrap, MaterialUI</li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </article>
  );
};

export default About;
