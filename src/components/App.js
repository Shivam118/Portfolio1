import React from "react";
import Navbar from "./NavBar";
import Home from "./SectionHome";
import BottomStrip from "./BottomStrip";
import './css/App.css';

export default function App() {
    return(
        <div>
            <Navbar />
            <Home />
            <BottomStrip />
        </div>
    )
}