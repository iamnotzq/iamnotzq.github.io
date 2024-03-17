import React, {useRef} from 'react'
import './contact.css';
import Walmart from '../../assets/facebook.png';
import Adobe from '../../assets/facebook.png';
import Microsoft from '../../assets/facebook.png';
import Facebook from '../../assets/facebook.png';
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
            <span className='contactDesc'>Please fill out the form</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' rows='5' name='message' placeholder='Your Message'/>
                <button className='submitBtn' type='submit' value='Send'>Submit</button>
                <div className='links'>
                    <img src={Facebook} alt='Facebook' className='link'/>
                    <img src={Facebook} alt='Facebook' className='link'/>
                    <img src={Facebook} alt='Facebook' className='link'/>
                    <img src={Facebook} alt='Facebook' className='link'/>
                </div>
            </form>
    </section>
  )
}

export default Contact;