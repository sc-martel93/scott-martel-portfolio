import React from "react";
import "./styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faAws,
  faNpm,
  faGitAlt,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import ChatBoxIMG from "../../assets/ChatBoxIMG.PNG";
import eCommerceIMG from "../../assets/Ecommerce.PNG"
import CryptoTrackerIMG from '../../assets/CryptoTrackerIMG.PNG';
import PortfolioIMG from '../../assets/Portfolio.PNG';
import DrumScriptIMG from '../../assets/DrumScript.PNG';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <section className="cards">
        <article id="chatbox" className="card">
          <img src={ChatBoxIMG} alt="chat box web app" />
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
                <li>
                  <FontAwesomeIcon className="icon" icon={faNpm} />
                  npm
                </li>
               </ul>
               <ul>
                <li>
                  <FontAwesomeIcon className="icon" icon={faGoogle} />
                  Firebase
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

        <article id="ecommerce" className="card">
          <img src={eCommerceIMG} alt="Ecommerce web app" />
          <section className="description">
            <h4>Vintage eCommerce</h4>
            <p>
              Fully functional eCommerce web app using Material UI, commerce js API 
              and stripe api for payment processing
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
                <li>
                  <FontAwesomeIcon className="icon" icon={faNpm} />
                  npm
                </li>
               </ul>
               <ul>
                <li>
                  <FontAwesomeIcon className="icon" icon={faGoogle} />
                  Firebase
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faGitAlt} />
                  Git
                </li>
              </ul>
            </section>
            <section className="project-buttons">
              <a
                href="https://vintage-ecom.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/sc-martel93/ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
          </section>
          </section>
        </article>

        <article id="crypto" className="card">
          <img src={CryptoTrackerIMG} alt="Crypto tracker web app" />
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
                  <FontAwesomeIcon className="icon" icon={faNpm} />
                  npm
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

        <article id="drum" className="card">
          <img src={DrumScriptIMG} alt="Drum Script web app" />
          <section className="description">
            <h4>Drum Script</h4>
            <p>
            Drum Script is a simple drum pad web application created using
            HTML, CSS and Javascript.
            </p>
            <section className="tech">
              <ul>
              <li>
                 <FontAwesomeIcon className="icon" icon={faHtml5} />
                  HTML
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faCss3} />
                  CSS
                </li>
               </ul>
               <ul>
               <li>
                 <FontAwesomeIcon className="icon" icon={faJsSquare} />
                  Javascript
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faGitAlt} />
                  Git
                </li>
              </ul>
            </section>
            <section className="project-buttons">
              <a
                href="https://drum-script.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/sc-martel93/js-drumk-kit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
          </section>
          </section>
        </article>

        <article id="portfolio" className="card">
          <img src={PortfolioIMG} alt="Scott's Portfolio Page" />
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
                <li>
                  <FontAwesomeIcon className="icon" icon={faNpm} />
                  npm
                </li>
               </ul>
               <ul>
                <li>
                  <FontAwesomeIcon className="icon" icon={faAws} />
                  AWS
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faGitAlt} />
                  Git
                </li>
              </ul>
            </section>
            <section className="project-buttons">
              <a
                href="#nav"
              >
                Live
              </a>
              <a
                href="https://github.com/sc-martel93/scott-martel-portfolio"
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
