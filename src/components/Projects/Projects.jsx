import React from "react";
import "./styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import ChatBoxIMG from "../../assets/images/ChatBoxIMG.PNG";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <section className="cards">
        <article className="card">
          <img src={ChatBoxIMG} />
          <section className="description">
            <h4>Chat Box</h4>
            <p>
              An online chat room application that includes user authentication through
              google and allows the users to communicate through text.
            </p>
            <section className="tech">
              <ul>
                <li>
                 <FontAwesomeIcon className="icon" icon={faReact} />
                  React JS
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faCss3} />
                  CSS
                </li>
               </ul>
               <ul>
                <li>
                  <FontAwesomeIcon className="icon" icon={faGoogle} />
                  Google Firebase
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faGitAlt} />
                  Git
                </li>
              </ul>
            </section>
            <section className="project-buttons">
              <a
                href="https://chat-app-cd6c7.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/sc-martel93/chat-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
          </section>
          
          </section>
        </article>
      </section>
    </section>
  );
};

export default Projects;
