import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const year = new Date().getFullYear();

    const socials = [
        { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rafiultalukdar/" },
        { icon: <FaFacebookF />, link: "https://www.facebook.com/rafiultalukdar1" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/rafiul.talukdar/" },
        { icon: <FaXTwitter />, link: "https://x.com/rafiultalukdar" },
        { icon: <FaWhatsapp />, link: "https://wa.me/01720229887" },
        { icon: <FaGithub />, link: "https://github.com/rafiultalukdar1" },
    ];

    return (
        <>
            <div className='mt-15 sm:mt-16 md:mt-20 lg:mt-22 xl:mt-25'>
                <div className='container'>
                    <h2 className='font-rajdhani text-white text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize'>Request <span className='text-[#FDB400]'>Information!</span></h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-7.5 mt-5'>
                        <div>
                            <h4 className='font-titillium text-[18px] text-white font-semibold uppercase mb-3'>01. Personal Summary</h4>
                            <p className='text-color text-[15px] font-titillium max-w-120'>Programming, coding, and design drive my work. With 3+ years of local and freelance experience, I deliver reliable, scalable, and high-quality web solutions, ensuring on-time delivery and client satisfaction. I’m always ready to offer skilled, dependable support for any web project.</p>
                            <button className='custom-btn mt-7.5'><NavLink to='/projects'>My Portfolio</NavLink></button>
                            {/* <div className='flex flex-wrap items-center gap-x-2 gap-y-2.5 menu-social mt-3.75'>
                                {socials.map((items, i) => ( <a key={i} href={items.link} target="_blank" rel="noopener noreferrer"> {items.icon} </a> ))}
                            </div> */}
                        </div>
                        <div>
                            <h4 className='font-titillium text-[18px] text-white font-semibold uppercase mb-3'>02. Stay in Touch</h4>
                            <p className='text-color text-[15px] font-titillium max-w-120'>Stay updated on my latest projects and releases. Sign up for exclusive updates.</p>
                            <div className="relative max-w-110 w-full mt-3.75">
                                <form className="relative">
                                    <input type="email" placeholder="Email..." required className="w-full h-12 px-4 bg-[rgba(95,95,95,0.1)] border border-[#c1c0bf1e] rounded text-gray-800 placeholder-[#FFFFFFCC] outline-none font-medium font-titillium focus:border-[#fdb5009c]" />
                                    <button type="submit" className="absolute top-0 right-0 h-full px-8 bg-[#FDB400] text-gray-900 font-semibold rounded-r flex items-center justify-center hover:opacity-95 font-titillium uppercase" ><FaPaperPlane className="mr-2.5" /> Send </button>
                                </form>

                                <div className='flex flex-wrap items-center gap-x-2 gap-y-2.5 menu-social mt-5'>
                                    {socials.map((items, i) => ( <a key={i} href={items.link} target="_blank" rel="noopener noreferrer"> {items.icon} </a> ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-bottom mt-10'>
                        <p className='text-[#FFFFFFCC] text-[14px] font-medium font-rajdhani uppercase [word-spacing:1px]'>© Rafiul Talukdar {year} / All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;