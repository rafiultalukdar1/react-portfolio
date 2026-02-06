import React from 'react';
import ServicesTop from './ServicesComponents/ServicesTop';
import Pricing from './ServicesComponents/Pricing';
import Client from './ServicesComponents/Client';

const Services = () => {
    return (
        <>
            <title>Rafiul Talukdar - Services</title>
            <ServicesTop></ServicesTop>
            <Pricing></Pricing>
            <Client></Client>
        </>
    );
};

export default Services;