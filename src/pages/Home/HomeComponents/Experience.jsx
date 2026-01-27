import React from 'react';

const Experience = () => {

    const stats = [
        { id: 1, value: "120+", label: "Project Complete" },
        { id: 3, value: "100+", label: "Clients Reviews" },
        { id: 4, value: "110+", label: "Happy Clients" },
        { id: 2, value: "05+", label: "Awards Won" },
    ];

    // Customs Hover
    const handleMouseMove = (e) => {
        const card = e.currentTarget; // Use the hovered card directly
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
            <div className='pt-12 sm:pt-15 md:pt-18 lg:pt-22'>
                <div className='container'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-7.5'>
                        <div className='p-6.25 sm:p-7.5 bg-linear-to-br from-[#0C0C0C] to-[#fdb50081] rounded-xl sm:rounded-[20px] h-full flex flex-col justify-between'>
                            <div className='flex items-center gap-5 md:gap-7 lg:gap-8 xl:gap-12'>
                                <h1 className='text-primary font-rajdhani text-[65px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-extrabold leading-tight'>03+</h1>
                                <h3 className='text-white font-rajdhani text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-none'>Years Of experience</h3>
                            </div>
                            <p className='font-titillium text-white text-[16px] pt-2.5'>I deliver end-to-end digital solutions, including design, development, bug fixes, and redesigns. My work focuses on responsive layouts, clean and maintainable code, and optimized performance to create seamless, user-friendly experiences.</p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
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
                </div>
            </div>
        </>
    );
};

export default Experience;