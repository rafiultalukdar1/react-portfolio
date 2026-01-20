import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <>
      <div className='py-15 sm:py-18 md:py-21 lg:py-27.5'>
        <div className='container'>

          <div className='hero-separate'>
            <div className='hero-one'>
              <h4 className='text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-titillium font-semibold'>Hi, I'm</h4>
              <h2 className="text-white font-bold font-rajdhani text-[36px] sm:text-[44px] md:text-[54px] lg:text-[60px] xl:text-[65px]">Rafiul Talukdar</h2>
              <h2 style={{ lineHeight: 0.7 }} className='text-primary font-bold font-rajdhani text-[36px] sm:text-[44px] md:text-[54px] lg:text-[60px] xl:text-[65px] md:mt-1.5'>
                <Typewriter
                options={{
                    strings: [
                    'Web Developer.',
                    'MERN Developer.',
                    'Next.js Developer.',
                    'Freelancer.',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    deleteSpeed: 50,
                    cursor: '|'
                }}/>
              </h2>
              <p className='text-color font-titillium max-w-132 text-[15px] mt-4 md:mt-5 lg:mt-7 xl:mt-10'>I am a MERN Stack Developer focused on building fast, scalable, user-centric web applications. Using MongoDB, Express.js, React, and Node.js, I create clean, efficient, and responsive solutions with an emphasis on performance and real-world impact.</p>
            </div>
            <div className='w-full h-full bg-amber-200 hero-tow'>
              image
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;