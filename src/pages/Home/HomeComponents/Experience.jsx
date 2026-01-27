import React from 'react';
import { RiShoppingBag4Line } from 'react-icons/ri';

const Experience = () => {

    const stats = [
        { id: 1, value: "120+", label: "Project Complete" },
        { id: 3, value: "100+", label: "Clients Reviews" },
        { id: 4, value: "110+", label: "Happy Clients" },
        { id: 2, value: "05+", label: "Awards Won" },
    ];

    const experience = [
        {
            id: 1,
            company: "KM IT Firm",
            duration: "2 Years",
            role: "Front-End Developer",
            description:
            "Created responsive and SEO-friendly web applications using React.js, Tailwind CSS, and Bootstrap. Built reusable UI components, ensured cross-browser compatibility, and delivered visually polished, user-focused interfaces.",
        },
        {
            id: 1,
            company: "ASAD IT Firm",
            duration: "1 Years",
            role: "MERN Stack Developer",
            description:
            "Developed scalable MERN applications with secure REST APIs, authentication, and real-time features. Built interactive dashboards, optimized MongoDB performance, and delivered reliable, client-focused digital solutions.",
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
                    <h2 className='font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize'>Experiences</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-7.5 mt-3.75 sm:mt-6.25'>
                        <div className='p-6.25 sm:p-7.5 bg-linear-to-br from-[#0C0C0C] to-[#fdb50081] rounded-xl sm:rounded-[20px] h-full flex flex-col justify-between'>
                            <div className='flex items-center gap-5 md:gap-7 lg:gap-8 xl:gap-12'>
                                <h1 className='text-primary font-rajdhani text-[65px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-extrabold leading-tight'>03+</h1>
                                <h3 className='text-white font-rajdhani text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-none capitalize'>Years Of experience</h3>
                            </div>
                            <p className='font-titillium text-white text-[16px] pt-2.5'>I deliver end-to-end digital solutions, including design, development, bug fixes, and redesigns. My work focuses on responsive layouts, clean and maintainable code, and optimized performance to create seamless, user-friendly experiences.</p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5'>
                            {stats.map((stat) => (
                            <div
                                key={stat.id}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="hover-card hover-card-small py-7.5 rounded-xl text-center"
                            >
                                <h2 className='text-[40px] md:text-[46px] lg:text-[52px] font-bold text-white font-rajdhani leading-none'>{stat.value}</h2>
                                <p className='text-color font-titillium text-[15px]'>{stat.label}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-3.75 sm:mt-10 gap-5 xl:gap-7.5'>
                        {experience.map((item) => (
                            <div key={item.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='hover-card py-5.5 sm:py-7.5 px-3.75 sm:px-7.5 rounded-xl'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-3 mb-1.5'>
                                        <div className='bg-[#FDB400] py-1.5 px-2 rounded text-[18px] text-black'>
                                            <RiShoppingBag4Line />
                                        </div>
                                        <h6 className='text-[20px] font-semibold font-rajdhani text-white'>Experience</h6>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <h2 className='text-white font-rajdhani text-[25px] sm:text-[27px] md:text-[29px] lg:text-[32px] font-bold leading-none'>{item.company}</h2>
                                        <h2 className='text-color font-rajdhani text-[25px] sm:text-[27px] md:text-[29px] lg:text-[32px] font-bold leading-none'>({item.duration})</h2>
                                    </div>
                                    <h6 className='text-[20px] font-semibold font-rajdhani text-primary'>{item.role}</h6>
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

export default Experience;