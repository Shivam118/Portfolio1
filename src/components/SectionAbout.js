import React from "react";
import "./css/SectionAbout.css";
import AlbumPhoto from "../AlbumPhoto.JPG";
import Social from "./SocialMedia";

export default function About() {
  return (
    <div className="About">
      <div className="AboutPane">
        <div className="SecLeft"></div>
        <div className="SecRight">
          <p>
            <span>
              Hey, I am Shivam Sharma. I am a 3<sup>rd</sup> year undergraduate
              Student of BTech CSE at ABESIT Ghaziabad. I have been programming
              for 4+ years and I love to design web Applications.
            </span>
            <br />
            <br />
            <span>
              I have been working on Full Stack Applications from last year.
            </span>
            <br />
            <br />
            <span>Currently I'm working on Blockchain Development.</span>
            <br />
            <br />
            <span>
              I am active across various communities on <a href="https://www.twitter.com/shushant121212">Twitter</a> and <a href="https://stackoverflow.com/users/14368652/shivam-sharma">
              StackOverflow</a>.
            </span>
          </p>
          <span className="social">
            <Social />
          </span>
          <p className="Sign">Shivam</p>
        </div>
      </div>
    </div>
  );
}
