import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/SectionContact.css'
import Footer from './Footer';

export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d0z7xb8', 'portfolio_template', form.current, 'user_irJPKlhwCBu3OBNquKV4I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
    };
    return(
        <div className='contact'>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <h1>CONTACT ME</h1>
                <br />
                <br />
                <input type="text" name="user_name" id="user_name" className="user_name" placeholder="Full Name" required />
                <br />
                <input type="email" name="user_email" id="user_email" className="user_email" placeholder="Email" required />
                <br />
                <textarea style={{resize:'none'}} name="message" id="message" className="message" placeholder="Message" required maxLength={200} wrap='hard' />
                <br />
                <input type="submit" value="Send" />
            </form>
            <Footer />
        </div>
    );
}