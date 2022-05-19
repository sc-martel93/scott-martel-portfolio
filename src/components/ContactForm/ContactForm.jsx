import React from 'react'
import "./styles/styles.css";

const ContactForm = () => {
  return (
      <section id="contact" className="contact">
      <h3>Contact Me</h3>
       <form className="contact_form">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name..." />
            <label>Email</label>
            <input type="email" name="email" placeholder="example@email.com"  />
            <label>Message</label>
            <textarea name="message" placeholder="Message..." />
        </form>
      </section>
   
  )
}

export default ContactForm