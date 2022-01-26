import React from 'react';
import './css/ProjectPane.css';
import HCJ from '../logo/hcj.png';

export default function ProjectPane(props){
    return(
        <div className='ProjectPane'>
            <div className='ProjectCard'>
                <img src={props.source} />
                <div className='ProjectContent'>
                    <h1>{props.name}</h1>
                    <br />
                    <img src={HCJ} alt="logo" />
                    <br />
                    <a href={props.link} target="_blank"><input type="submit" value="visit"></input></a>
                </div>
            </div>
        </div>
    );
}