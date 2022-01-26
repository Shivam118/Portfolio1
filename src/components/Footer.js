import React from 'react';
import './css/Footer.css'
import Social from './SocialMedia';

export default function Footer(){
    return(
        <div className='Footer'>
            <div className='copyright'>&copy;&nbsp;2022&nbsp; SHIVAM SHARMA</div>
            <br />
            <Social />
        </div>
    );    
}