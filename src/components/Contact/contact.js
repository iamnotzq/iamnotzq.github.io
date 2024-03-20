import React, {useRef} from 'react'
import './contact.css';
import Github from '../../assets/github.png';
import Gmail from '../../assets/gmail.png';
import LinkedIn from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2yd43bq', 'service_2yd43bq', form.current, 'YHxe58KmbBW7NNpsdG_Kq')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>You can contact me through the methods below, otherwise you can fill up this form.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' rows='5' name='message' placeholder='Your Message'/>
                <button className='submitBtn' type='submit' value='Send'>Submit</button>
                <div className='links'>
                    <a href="https://github.com/iamnotzq" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt='Github' className='link'/>
                    </a>
                    <a href="mailto:lamzhiqiang98@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={Gmail} alt='Gmail' className='link'/>
                    </a>
                    <a href="https://www.linkedin.com/in/lam-zhi-qiang-314308106/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt='LinkedIn' className='link'/>
                    </a>
                </div>

            </form>
    </section>
  )
}

export default Contact;