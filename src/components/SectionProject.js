import React from 'react';
import './css/SectionProject.css';
import ProjectPane from './ProjectPane'
import Piano from './piano.jpg';

export default function Project(){
    return(
        <div className='project'>
            <ProjectPane name="Virtual Piano" link="https://github.com/Shivam118/Piano-using-Javascipt.git" source={Piano} />
            <ProjectPane name="Virtual Piano" link="https://github.com/Shivam118/Piano-using-Javascipt.git" source={Piano} />
            <ProjectPane name="Virtual Piano" link="https://github.com/Shivam118/Piano-using-Javascipt.git" source={Piano} />
        </div>
    );
}