import React, { useRef, useState } from 'react';
import "./styles/styles.css";
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const ContactForm = () => {
    const SERVICE_ID = 'service_knqapsk';
    const TEMPLATE_ID = 'template_v74hh4j';
    const PUBLIC_KEY = 'IwLeLCHtSYUWnVatZ';

    const form = useRef(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
       
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            setIsSuccess(true);
            clearForm();
        }, error => {
            window.alert("Sorry, there has been an error please retry or get email from below.")
            console.error(error.text);
        })
        
    }

    const clearForm = () => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <section id="contact" className="contact">
        <h3>Contact Me</h3>
        {isSuccess ? 
            <p>
                Your message has been sent, I will get back to you as soon as possible, thanks!
            </p> : 
            <form ref={form} onSubmit={sendEmail} className="contact_form">
            <label>Your Name:</label>
            <input 
                required 
                type="text" 
                name="name" 
                placeholder="Name..."
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <label>Your Email: </label>
            <input 
                required 
                type="email" 
                name="email"
                placeholder="example@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}  
             />
            <label>Subject:</label>
            <input 
                required 
                type="text" 
                name="subject" 
                placeholder="Subject..."
                value={subject}
                onChange={e => setSubject(e.target.value)}
            />
            <label>Your Message:</label>
            <textarea 
                required 
                name="message" 
                placeholder="Message..." 
                wrap="hard" 
                maxLength="1500"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">
                Send
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
        }
        </section>
   
  )
}

export default ContactForm