import React from 'react';
import AboutTop from './AboutComponents/AboutTop';
import Experience from '../Home/HomeComponents/Experience';
import Education from '../Home/HomeComponents/Education';
import Skills from '../Home/HomeComponents/Skills';

const About = () => {
    return (
        <>
            <AboutTop></AboutTop>
            <Education></Education>
            <Experience></Experience>
            <Skills></Skills>
        </>
    );
};

export default About;