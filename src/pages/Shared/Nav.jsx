import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import DecodeNavLink from './DecodeNavLink';
import { FaXTwitter } from "react-icons/fa6";

const Nav = () => {

    const socials = [
        { icon: <FaGithub />, link: "https://github.com/rafiultalukdar1" },
        { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rafiultalukdar/" },
        { icon: <FaFacebookF />, link: "https://www.facebook.com/rafiultalukdar1" },
    ];

    const socialsTow = [
        { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rafiultalukdar/" },
        { icon: <FaFacebookF />, link: "https://www.facebook.com/rafiultalukdar1" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/rafiul.talukdar/" },
        { icon: <FaXTwitter />, link: "https://x.com/rafiultalukdar" },
        { icon: <FaWhatsapp />, link: "https://wa.me/01720229887" },
        { icon: <FaGithub />, link: "https://github.com/rafiultalukdar1" },
    ];

    const [open, setOpen] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Prevent scrolling when sidebar is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [open]);

    // Track mouse position only when overlay is open
    useEffect(() => {
        if (!open) return;
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [open]);

  return (
    <>
        <div className='py-5 border-b border-[#c1c0bf1e] bg-[#0C0C0C] sticky top-0 z-40'>
            <div className='container'>
                <div className='flex justify-between items-center gap-2.5'>
                    <div>
                        <NavLink to='/'>
                            <img className='max-w-12' src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className='nav-items space-x-5.5 hidden lg:block'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/services'>Services</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                    <div className='flex items-center gap-x-2.5'>
                        <div className='menu-social hidden md:flex lg:hidden xl:flex items-center gap-x-2.5'>
                            {socials.map((item, i) => ( <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"> {item.icon} </a> ))}
                        </div>
                        {/* Bar Icon */}
                        <div className='bar cursor-pointer flex flex-col justify-between h-6 w-6' onClick={()=> setOpen(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Overlay */}
        {open && (
            <div className="fixed inset-0 bg-black/80 z-42 cursor-pointer" onClick={()=> setOpen(false)} > <span className='absolute select-none pointer-events-none text-white py-2.5 px-5 m-2.5 bg-[#141414] font-titillium text-[12px] font-semibold uppercase tracking-[2px] [word-spacing:3px]' style={{
                top: cursorPos.y + 10 + 'px',
                left: cursorPos.x + 10 + 'px',
                }}> Close Menu </span>
            </div>
        )}

        {/* Side Bar */}
        <div className={`fixed top-0 right-0 w-90 h-full bg-[#141414] shadow-[6px_0_6px_rgba(0,0,0,0.1)] flex flex-col gap-8.75 duration-500 z-44 ${open ? 'translate-x-0' : 'translate-x-full'}`}>

            <div className="py-7 px-7 flex justify-between items-center border-b border-[#9f9f9f27]">
                <div className='hamburger cursor-pointer' onClick={() => setOpen(false)}>
                    <IoMdClose/>
                </div>
                <div>
                    <NavLink to='/' onClick={() => setOpen(false)}>
                        <img className='max-w-12' src={logo} alt="logo" />
                    </NavLink>
                </div>
            </div>

            <div className='px-8 pt-2.5'>
                <div className='sidebar-heading'>
                    <h2>Rafiul Talukdar</h2>
                </div>
                
                <div className='mt-12 text-white menu-items' onClick={() => setOpen(false)}>
                    <DecodeNavLink to="/" text="HOME" />
                    <DecodeNavLink to="/about" text="ABOUT" />
                    <DecodeNavLink to="/services" text="SERVICES" />
                    <DecodeNavLink to="/projects" text="PROJECTS" />
                    <DecodeNavLink to="/contact" text="CONTACT" />
                </div>

                <div className='mt-12'>
                    <h4 className='text-[15px] text-white font-medium font-rajdhani uppercase mb-3'>Stay connected</h4>
                    <div className='flex flex-wrap items-center gap-x-2 gap-y-2.5 menu-social menu-social-tow'>
                        {socialsTow.map((items, i) => ( <a key={i} href={items.link} target="_blank" rel="noopener noreferrer"> {items.icon} </a> ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Nav;