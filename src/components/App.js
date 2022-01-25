import React from "react";
import Navbar from "./NavBar";
import Home from "./SectionHome";
import Contact from "./SectionContact";
import BottomStrip from "./BottomStrip";
import './css/App.css';

export default function App() {
    return(
        <div>
            <Navbar />
            <Home />
            <Contact />
            <BottomStrip />
        </div>
    )
}