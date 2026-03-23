import React from 'react';
import errorImg from '../../assets/images/error-image.png'
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <>
            <div className='container'>
                <div className='min-h-screen flex flex-col gap-5 items-center justify-center py-10'>
                    <img src={errorImg} alt="" className='max-w-full'/>
                    <NavLink to="/" className='px-5 py-2.5 text-[12px] font-bold uppercase tracking-[1px] [word-spacing:2px] rounded bg-[#141414] border border-[#FDB400] text-[#FDB400] hover:text-black hover:bg-[#FDB400] transition duration-300'>Back to Home!</NavLink>
                </div>
            </div>
        </>
    );
};

export default Error;