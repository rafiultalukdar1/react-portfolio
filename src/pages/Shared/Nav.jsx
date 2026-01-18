import React from 'react';
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Nav = () => {

    const socials = [
        { icon: <FaGithub />, link: "https://github.com/rafiultalukdar1" },
        { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rafiultalukdar/" },
        { icon: <FaFacebookF />, link: "https://www.facebook.com/rafiultalukdar1" },
    ];

    return (
        <>
            <div className='py-5 border-b border-[#c1c0bf1e] bg-[#0C0C0C] sticky top-0 z-50'>
                <div className='container'>
                    <div className='flex justify-between items-center gap-2.5 text-white'>
                        <div>
                            <NavLink to='/'><img className='max-w-12' src={logo} alt="" /></NavLink>
                        </div>
                        <div className='nav-items space-x-5.5'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            <NavLink to='/projects'>Projects</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </div>
                        <div>
                            <div className='flex items-center gap-x-2.5 menu-social'>
                                {socials.map((item, i) => (
                                    <a key={i} href={item.link} target="_blank">
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;