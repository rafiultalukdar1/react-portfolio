import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';

const Education = () => {

    const eduInfo = [
        { 
            id: 1,
            role: "Education",
            subject: "Diploma in Engineering (Computer)",
            institute: "Sherpur Polytechnic Institute",
            duration: "2021-2025",
            description: "Completed a comprehensive diploma program focused on practical engineering skills, problem-solving techniques, and hands-on experience in core computer engineering disciplines including programming, networking, and system design."
        },
        { 
            id: 2,
            role: "Career Journey",
            subject: "MERN Stack Developer",
            institute: "Programming Hero (B. 12)",
            duration: "2025",
            description: "Built scalable web applications with the MERN stack, developing responsive UIs with React, backend services with Node.js/Express, and database solutions with MongoDB through real-world projects."
        },
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
            <div className='pt-12 sm:pt-15 md:pt-17.5 lg:pt-20'>
                <div className='container'>
                    <h2 className='font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize'>Education</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 mt-3.75 sm:mt-6.25 gap-5 xl:gap-7.5'>
                        {eduInfo.map((item) => (
                            <div key={item.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='hover-card py-5.5 sm:py-7.5 px-3.75 sm:px-7.5 rounded-xl'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-3 mb-1.5'>
                                        <div className='bg-[#FDB400] py-1.5 px-2 rounded text-[18px] text-black'>
                                            <LuGraduationCap />
                                        </div>
                                        <h6 className='text-[20px] font-semibold font-rajdhani text-white'>{item.role}</h6>
                                    </div>
                                    <h2 className='text-white font-rajdhani text-[25px] sm:text-[27px] md:text-[29px] lg:text-[32px] font-bold leading-none'>{item.subject}</h2>
                                    <h6 className='text-[20px] font-semibold font-rajdhani text-primary'>{item.institute}</h6>
                                    <h6 className='text-[20px] font-semibold font-rajdhani text-color'>{item.duration}</h6>
                                    <p className='font-titillium text-color text-[15px] mt-1.5'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;