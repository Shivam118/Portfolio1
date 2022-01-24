import React, { useState } from 'react';
import './css/NavBar.css';
import Square from '../logo/square.png';
import Close from '../logo/close.png';

export default function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(false);

    function Menu(){
    }
    return(
        <div>
            <div className="navbar">
                <div className='navBrand'>
                    <span className=''>SHIVAM</span>
                </div>
                <div className='navItems'>
                    <ul>
                        <li><a href="#Home" className='active'>Home</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
                <div className='navItemsMobile'>
                    <img src={Square} Alt="Menu" id="MenuClose" className='MenuOpen active' onClick={Menu()}/>
                    <img src={Close} Alt="Menu Close" id="MenuOpen" className='MenuClose' onClick={Menu()}/>
                    <div >
                    </div>

                </div>
            </div>
        </div>
    );
}