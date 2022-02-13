import React from "react";
import "./styles/styles.css";

import ChatBoxIMG from "../../assets/images/ChatBoxIMG.PNG";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <section className="cards">
        <article className="card">
          <img src={ChatBoxIMG} />
          <h4>Chat Box</h4>
          <p>
            A real time chat application created using Google firebase and
            firestore database with google login authentication
          </p>
          <section className="project-buttons">
            <a href="">Live</a>
            <a href="">Code</a>
          </section>
        </article>
      </section>
    </section>
  );
};

export default Projects;
