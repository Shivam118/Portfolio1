import React from 'react';
import './css/SectionHome.css';
import Profile from '../ProfilePhoto.png';

export default function Home(){
    return(
        <div className="SectionHome">
            <div className='homeLeft'>
                <div className='intro'>
                    <h1>Hi, <span>I'm </span>Shivam Sharma</h1>
                    <h2>
                        <span>Full Stack Developer</span>
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <span>Python Developer</span>
                    </h2>
                    <br />
                    <input type="button" value="Contact Me"></input>
                </div>
            </div>
            <div className='homeRight'>
                <img src={Profile} Alt="ProfilePhoto"/>
            </div>
        </div>
    )
}
