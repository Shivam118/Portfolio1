import React from "react";
import {Route} from 'react-router-dom';
import Navbar from "./NavBar";
import Home from "./SectionHome";
import Contact from "./SectionContact";
import About from "./SectionAbout";
// import Project from "./SectionProject";
import BottomStrip from "./BottomStrip";
import Social from "./SocialMedia";
import './css/App.css';

export default function App() {
    return(
        <div>
            <Navbar />
            <Home />
            <About />
            <Contact />
        </div>
    )
}