import React from "react";
import "./styles/styles.css";

const About = () => {
  return (
    <section id="about">
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
    </section>
  );
};

export default About;
