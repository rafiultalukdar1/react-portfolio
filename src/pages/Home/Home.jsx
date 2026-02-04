import React from 'react';
import Banner from './HomeComponents/Banner';
import AboutMe from './HomeComponents/AboutMe';
import Experience from './HomeComponents/Experience';
import Education from './HomeComponents/Education';
import Skills from './HomeComponents/Skills';
import Gallery from './HomeComponents/Gallery';
import Testimonials from './HomeComponents/Testimonials';

const Home = () => {
    return (
        <>
            <title>Rafiul Talukdar - Web Developer</title>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Education></Education>
            <Experience></Experience>
            <Skills></Skills>
            <Gallery></Gallery>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;