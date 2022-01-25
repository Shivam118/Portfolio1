import React from 'react';
import './css/SectionContact.css'
import Footer from './Footer';

export default function Contact(){
    return(
        <div className='contact'>
            <form className='contactForm'>
                <h1>CONTACT ME</h1>
                <br />
                <br />
                <input type="text" name="FullName" id="fName" className="fName" placeholder="Full Name" required></input>
                <br />
                <input type="text" name="Email" id="email" className="email" placeholder="Email" required></input>
                <br />
                <textarea style={{resize:'none'}} name="Message" id="message" className="message" placeholder="Message" required maxLength={200} wrap='hard'></textarea>
                <br />
                <input type="submit" value="Send"></input>
            </form>
            <Footer />
        </div>
    );
}