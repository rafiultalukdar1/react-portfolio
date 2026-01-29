import React from 'react';
import Banner from './HomeComponents/Banner';
import AboutMe from './HomeComponents/AboutMe';
import Experience from './HomeComponents/Experience';
import Education from './HomeComponents/Education';
import Skills from './HomeComponents/Skills';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Education></Education>
            <Experience></Experience>
            <Skills></Skills>
        </>
    );
};

export default Home;