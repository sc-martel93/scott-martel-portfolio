import React from 'react'
import "./styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const ContactForm = () => {
  return (
      <section id="contact" className="contact">
      <h3>Contact Me</h3>
       <form className="contact_form">
            <label>Your Name:</label>
            <input required type="text" name="name" placeholder="Name..." />
            <label>Your Email: </label>
            <input required type="email" name="email" placeholder="example@email.com"  />
            <label>Your Message:</label>
            <textarea required name="message" placeholder="Message..." maxlength="1500" />
            <button type="submit">
                Send
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
      </section>
   
  )
}

export default ContactForm