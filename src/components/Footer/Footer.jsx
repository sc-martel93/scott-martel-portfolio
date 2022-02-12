import React from "react";
import "./styles/styles.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-info">
        <ul>
          <li>Email</li>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Boston</li>
        </ul>
      </section>
      <hr />
      <section className="footer-title">
        <h3 className="yellow">Scott</h3>
        <h3>Martel</h3>
        <h4>Web Developer</h4>
      </section>
    </footer>
  );
};

export default Footer;
