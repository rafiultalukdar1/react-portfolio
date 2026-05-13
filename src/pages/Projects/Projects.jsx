import React from 'react';
import ProjectsTop from './ProjectsComponents/ProjectsTop';
import { useLoaderData } from 'react-router';
import ProjectsItems from './ProjectsComponents/ProjectsItems';

const Projects = () => {

    const { frontendData, fullstackData } = useLoaderData();

    return (
     <>
        <title>Rafiul Talukdar - Projects</title>
        <ProjectsTop></ProjectsTop>
        <ProjectsItems frontData={frontendData} fullstackData={fullstackData}></ProjectsItems>
     </>
    );
};

export default Projects;