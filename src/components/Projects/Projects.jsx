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
import CryptoTracker from '../../assets/images/CryptoTracker.png';
import PortfolioImg from '../../assets/images/Portfolio.png';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <section className="cards">
        <article className="card">
          <img src={ChatBoxIMG} alt="chat box" />
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

        <article className="card">
          <img src={CryptoTracker} alt="Crypto tracker" />
          <section className="description">
            <h4>Crypto Tracker</h4>
            <p>
            Crypto tracker is an app created using React js, axios and the 
            coin gecko API used to track the current price of popular crypto 
            currencies.
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
                href="https://sc-martel93.github.io/Crypto-Tracker/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/sc-martel93/Crypto-Tracker/tree/master"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
          </section>
          </section>
        </article>

        <article className="card">
          <img src={PortfolioImg} alt="Crypto tracker" />
          <section className="description">
            <h4>My Portfolio Page</h4>
            <p>
              I designed my portfolio web page using Figma and implemented the page
              using React JS and CSS. For the contact form I used EmailJS to handle
              sending the message to me via email.
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
                href="https://sc-martel93.github.io/Crypto-Tracker/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/sc-martel93/Crypto-Tracker/tree/master"
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
