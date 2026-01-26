import React from 'react';

const AboutTop = () => {
    return (
        <>
            <div className='pt-20 sm:pt-25 md:pt-28 lg:pt-32'>
                <div className='container'>
                    <div className='relative'>
                        <h2 className='font-Rajdhani uppercase text-[#2b2a2a91] text-[48px] sm:text-[65px] md:text-[75px] lg:text-[95px] font-extrabold text-center leading-0'>Resume</h2>
                        <h2 className='font-Rajdhani uppercase text-white text-[32px] sm:text-[40px] md:text-[45px] lg:text-[55px] font-bold absolute top-0 left-1/2 -translate-x-1/2 leading-0 whitespace-nowrap'>About <span className='text-[#FDB400]'>Me</span></h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutTop;