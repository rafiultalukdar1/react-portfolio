import React, { useRef } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { NavLink } from 'react-router';
import Typewriter from 'typewriter-effect';
import image from '../../../assets/images/rafi-removebg-preview2.png'

const Banner = () => {

  // Customs Hover
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    card.style.setProperty("--active", 1);
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.setProperty("--active", 0);
  };



  return (
    <>
      <div className='pt-15 sm:pt-18 md:pt-20 lg:pt-27.5'>
        <div className='container'>
          <div className='hero-separate items-center'>
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
              {/* <p className='text-color font-titillium max-w-132 text-[15px] mt-4 md:mt-5 lg:mt-7 xl:mt-10'>I am a MERN Stack Developer focused on building fast, scalable, user-centric web applications. Using MongoDB, Express.js, React, and Node.js, I create clean, efficient, and responsive solutions with an emphasis on performance and real-world impact.</p> */}
              <p className='text-color font-titillium max-w-132 text-[15px] mt-4 md:mt-5 lg:mt-7 xl:mt-10'>I specialize in building fast, scalable, and user-centric web applications using Next.js, MongoDB, Express.js, React, and Node.js. My focus is on creating clean, efficient, and responsive solutions that prioritize performance, SEO, and real-world impact.</p>
              {/* <h5 className='bg-[#4B4B4B33] text-color font-titillium font-semibold py-2.5 px-6.25 inline-block uppercase text-[12px] tracking-[1px] [word-spacing:2px] mt-2 lg:mt-5'>Let’s turn ideas into beautiful and user-friendly web applications.</h5> */}
              <div className='mt-5 lg:mt-7.5 flex items-center gap-2.5'>
                <button className='custom-btn'><NavLink to='/projects'>View Projects</NavLink></button>
                <button className='custom-btn custom-btn-resume flex items-center gap-2.5'><FaFilePdf /><span>Resume</span></button>
              </div>
            </div>
            <div className='hero-tow'>
              <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='hover-card rounded-lg p-3.75 sm:p-5' >
                <div className='bg-[#0C0C0C] relative'>
                  <img className='max-w-[520px] w-full' src={image} alt="" />
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40%] bg-linear-to-t from-black/99 to-transparent'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;