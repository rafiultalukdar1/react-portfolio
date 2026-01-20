import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <div className='footer-bottom mt-55'>
                <div className='container'>
                    <p className='text-[#FFFFFFCC] text-[14px] font-medium font-rajdhani uppercase [word-spacing:1px]'>© Rafiul Talukdar {year} / All rights reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;