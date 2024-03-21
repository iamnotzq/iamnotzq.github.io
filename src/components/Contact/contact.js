// Import necessary React hooks and components
import React, { useRef } from 'react';
import './contact.css'; // Custom CSS for styling the contact component
import Github from '../../assets/github.png'; // GitHub icon
import Gmail from '../../assets/gmail.png'; // Gmail icon
import LinkedIn from '../../assets/linkedin.png'; // LinkedIn icon
import emailjs from '@emailjs/browser'; // Importing emailjs for handling email sending

const Contact = () => {
    const form = useRef(); // Using useRef to reference the form element for email submission

    // Function to handle email submission
    const sendEmail = (e) => {
        e.preventDefault(); // Preventing default form submission behavior

        // Sending the form data using emailjs service
        emailjs.sendForm('service_2yd43bq', 'template_xxx', form.current, 'user_xxx')
          .then((result) => {
              console.log(result.text); // Logging success message
              e.target.reset(); // Resetting the form fields after successful submission
              alert('Email Sent!'); // Alerting the user that the email was sent
          }, (error) => {
              console.log(error.text); // Logging any errors
          });
      };

  return (
    <section id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1> 
            <span className='contactDesc'>You can contact me through the methods below, or fill up this form.</span> 
            <form className='contactForm' ref={form} onSubmit={sendEmail}> 
                <input type='text' className='name' placeholder='Your Name' name='your_name'/> 
                <input type='email' className='email' placeholder='Your Email' name='your_email'/> 
                <textarea className='msg' rows='5' name='message' placeholder='Your Message'/> 
                <button className='submitBtn' type='submit'>Submit</button> 
                <div className='links'> 
                    <a href="https://github.com/iamnotzq" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt='Github' className='link'/> 
                    </a>
                    <a href="mailto:lamzhiqiang98@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={Gmail} alt='Gmail' className='link'/> 
                    </a>
                    <a href="https://linkedin.com/in/lam-zhi-qiang" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt='LinkedIn' className='link'/> 
                    </a>
                </div>
            </form>
    </section>
  );
}

export default Contact; // Exporting the Contact component
