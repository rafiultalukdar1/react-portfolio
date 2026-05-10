import React from 'react';
import ProjectsTop from './ProjectsComponents/ProjectsTop';
import { useLoaderData } from 'react-router';
import ProjectsItems from './ProjectsComponents/ProjectsItems';

const Projects = () => {

    const frontData = useLoaderData();

    return (
     <>
        <title>Rafiul Talukdar - Projects</title>
        <ProjectsTop></ProjectsTop>
        <ProjectsItems frontData={frontData}></ProjectsItems>
     </>
    );
};

export default Projects;