import React from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const ServicesTop = () => {

    const services = [
        {
            id: "01",
            title: "End-to-End MERN Product Development",
            description:
                "Complete MERN-based product development covering planning, architecture, coding, deployment, and long-term scalability.",
            scope: [
                "Requirement analysis & system planning",
                "MongoDB schema & data modeling",
                "React frontend & Node.js backend development",
                "API integration & deployment",
                "Post-launch support & optimization"
            ]
        },
        {
            id: "02",
            title: "Frontend Engineering with React",
            description:
                "High-quality React interfaces focused on performance, usability, responsiveness, and clean component-driven architecture.",
            scope: [
                "React & modern UI frameworks",
                "Responsive & accessible layouts",
                "Component-based architecture",
                "State management & API integration",
                "Performance optimization"
            ]
        },
        {
            id: "03",
            title: "Backend & API Development",
            description:
                "Robust backend systems built with Node.js and MongoDB for security, scalability, and smooth data handling.",
            scope: [
                "REST API development",
                "Authentication & authorization",
                "Database design & optimization",
                "Server-side performance tuning",
                "Third-party API integration"
            ]
        },
        {
            id: "04",
            title: "MVP Development for Startups",
            description:
                "Fast and efficient MVP development using MERN to validate startup ideas and launch usable products quickly.",
            scope: [
                "MVP planning & feature scoping",
                "Fast development cycles",
                "Cost-efficient MERN architecture",
                "Deployment-ready setup",
                "Iterative improvements after launch"
            ]
        }
    ];

    // Customs Hover
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
        card.style.setProperty("--active", 1);
    };
    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.setProperty("--active", 0);
    };

    return (
        <>
            <div className='pt-20 sm:pt-25 md:pt-28 lg:pt-32'>
                <div className='container'>
                    <div className='relative'>
                        <h2 className='font-Rajdhani uppercase text-[#2b2a2a91] text-[48px] sm:text-[65px] md:text-[75px] lg:text-[95px] font-extrabold text-center leading-0'>Services</h2>
                        <h2 className='font-Rajdhani uppercase text-white text-[32px] sm:text-[40px] md:text-[45px] lg:text-[55px] font-bold absolute top-0 left-1/2 -translate-x-1/2 leading-0 whitespace-nowrap'>What <span className='text-[#FDB400]'>I Do</span></h2>
                    </div>
                    <div className='mt-15 sm:mt-22 md:mt-25 lg:mt-32'>
                        <h2 class="font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize">What I Provide!</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 mt-5'>
                            {services.map(service => (
                                <div key={service.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='hover-card hover-card-service px-3.75 sm:px-8 py-3.75 sm:py-8 rounded-xl group'>
                                    <div className='flex flex-col gap-2.5 sm:gap-3.75'>
                                        <div className='flex justify-between items-center'>
                                            <h4 className='text-4xl text-[#5c59598e] italic font-rajdhani font-bold transition-colors duration-200 group-hover:text-[#fdb500af]'>{service.id}</h4>
                                            <div className='h-9 w-9 flex items-center justify-center border border-[#FDB400] rounded-full transition-colors duration-200 group-hover:bg-[#FDB400]'>
                                                <IoMdArrowDown className="text-[#FDB400] group-hover:text-black text-[20px] transition-colors duration-200" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='text-[22px] sm:text-[26px] text-white font-rajdhani font-semibold'>{service.title}</h2>
                                            <p className='font-titillium text-color text-[15px] max-w-110'>{service.description}</p>
                                        </div>
                                        <div className='flex items-center gap-2.5'>
                                            <span className='h-px w-8 bg-[#fdb500af] block'></span>
                                            <h4 className='text-[#FDB400] uppercase font-rajdhani font-semibold text-[15px] tracking-[1px] [word-spacing:2px]'>Service Scope</h4>
                                        </div>
                                        <div>
                                            <ul className='flex flex-col gap-1'>
                                                {service.scope.map((item, index) => (
                                                    <li key={index} className='flex items-center gap-2 text-color font-titillium text-[15px]'><span><MdOutlineKeyboardDoubleArrowRight /></span>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesTop;