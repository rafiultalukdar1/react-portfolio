import React from 'react';
import AboutTop from './AboutComponents/AboutTop';
import Experience from '../Home/HomeComponents/Experience';
import Education from '../Home/HomeComponents/Education';

const About = () => {
    return (
        <>
            <AboutTop></AboutTop>
            <Education></Education>
            <Experience></Experience>
        </>
    );
};

export default About;