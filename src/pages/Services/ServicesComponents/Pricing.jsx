import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Pricing = () => {

    const pricingPlans = [
        {
            id: "01",
            price: 120,
            currency: "$",
            duration: "3 Days",
            title: "Core",
            description:
                "Perfect for validating ideas or small features with a fast and focused MERN setup.",
            features: [
                "Requirement analysis",
                "Basic MERN architecture",
                "Responsive React frontend",
                "Basic REST API setup",
                "Deployment-ready build",
                "Clean & scalable codebase"
            ],
        },
        {
            id: "02",
            price: 200,
            currency: "$",
            duration: "7 Days",
            title: "Advanced",
            description:
                "Ideal for startups or businesses needing a solid, production-ready MERN application.",
            features: [
                "Feature-based planning",
                "Advanced React UI & state management",
                "REST API development",
                "Authentication & authorization",
                "Performance optimization",
                "Deployment & testing"
            ],
        },
        {
            id: "03",
            price: 450,
            currency: "$",
            duration: "15 Days",
            title: "Ultimate",
            description:
                "A complete end-to-end MERN solution for scalable, real-world applications.",
            features: [
                "Full MERN product development",
                "Custom UI & UX flow",
                "Secure backend & MongoDB schema",
                "Third-party API integration",
                "Scalable architecture",
                "Post-launch support"
            ],
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
            <div className='pt-12 sm:pt-15 md:pt-17.5 lg:pt-20'>
                <div className='container'>
                    <h2 className='font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize'>Pricing & Packages!</h2>


                    <div class='mt-3.75 sm:mt-6.25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {pricingPlans.map(price => (
                            <div key={price.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='hover-card px-3.75 sm:px-8 py-3.75 sm:py-8 rounded-xl relative group'>
                                <div className='absolute top-0 left-1/2 -translate-x-1/2 bg-[#FDB400] py-2 px-5.5 rounded-bl rounded-br'>
                                    <p className='text-black uppercase font-titillium text-[12px] font-bold tracking-[1px] [word-spacing:2px]'>{price.title}</p>
                                </div>
                                <div className='flex flex-col gap-5 sm:gap-7.5 mt-10'>
                                    <div className='text-center'>
                                        <h2 className='text-[55px] text-white font-rajdhani font-semibold leading-[1.1]'><span className='text-[32px] transition-colors duration-200 group-hover:text-[#FDB400]'>{price.currency}</span>{price.price}</h2>
                                        <p className='text-[15px] font-titillium text-color'>{price.duration}</p>
                                    </div>
                                    <p className='text-[15px] font-titillium text-color max-w-77.5'>{price.description}</p>
                                    <ul className='flex flex-col gap-1'>
                                        {price.features.map((item, index) => (
                                            <li key={index} className='flex items-center gap-2 text-color font-titillium text-[15px]'><span className='text-[#FDB400]'><MdOutlineKeyboardDoubleArrowRight /></span>{item}</li>
                                        ))}
                                    </ul>
                                    <div className='text-center pt-1 sm:pt-2.5 pb-2.5 sm:pb-5'>
                                        <button className='px-5 py-2.5 text-[12px] font-bold uppercase tracking-[1px] [word-spacing:2px] rounded bg-[#FDB400] text-black'>Explore Plans</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;