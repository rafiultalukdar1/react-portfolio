import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <div className='footer-bottom'>
                <div className='container'>
                    <p className='text-[#FFFFFFCC] text-[14px] font-medium font-rajdhani uppercase tracking-[1px] [word-spacing:2px]'>© Rafiul Talukdar {year} / All rights reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;