import React from "react";
import './css/SocialMedia.css';
import facebook from '../logo/facebook.png';
import instagram from '../logo/instagram.png';
import linkedIn from '../logo/linkedin.png';
import github from '../logo/github.png';
import twitter from '../logo/twitter.png';

export default function SocialMedia() {
    return(
        <div>
            <div className="socialSideBar">
                <div className="socialSideCards">
                    <a className="socialLink" href="https://www.facebook.com/shushant.sharma.7/"> <img src={facebook} className="icon fb-icon" alt="Facebook"/> </a>
                </div>
                <div className="socialSideCards">
                    <a className="socialLink" href="https://www.linkedin.com/in/shivam-s-652877ba/"> <img src={linkedIn} className="icon in-icon" alt="LinkedIn"/> </a>
                </div>
                <div className="socialSideCards">
                    <a className="socialLink" href="https://www.instagram.com/shivu_118.5/"> <img src={instagram} className="icon insta-icon" alt="Instagram"/> </a>
                </div>
                <div className="socialSideCards">
                    <a className="socialLink" href="https://github.com/Shivam118"> <img src={github} className="icon git-icon" alt="Github"/> </a>
                </div>
                <div className="socialSideCards">
                    <a className="socialLink" href="https://twitter.com/shushant121212"> <img src={twitter} className="icon twi-icon" alt="Twitter"/> </a>
                </div>
            </div>
        </div>
    )
}