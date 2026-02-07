import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlinePhoneAndroid } from 'react-icons/md';

const ContactInfo = () => {

    const contact = [
        {
            id: 0.1,
            label: "Phone",
            text: "01720229887",
            link: "tel:01720229887",
            icon: <MdOutlinePhoneAndroid />
        },
        {
            id: 0.2,
            label: "Email",
            text: "rafiultalukdar007@gmail.com",
            link: "mailto:rafiultalukdar007@gmail.com",
            icon: <HiOutlineMail />
        },
        {
            id: 0.3,
            label: "Address",
            text: "Sherpur, Bangladesh",
            link: "https://www.google.com/maps/place/শেরপুর/@25.0161286,90.0208934,13.46z",
            icon: <IoLocationSharp />
        },
        {
            id: 0.4,
            label: "LinkedIn",
            text: "LinkedIn Profile",
            link: "https://www.linkedin.com/in/rafiultalukdar/",
            icon: <FaLinkedinIn />
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
            <div className='container'>
                <div className='mt-15 sm:mt-22 md:mt-25 lg:mt-32'>
                    <h2 class="font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize">Contact Information!</h2>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 items-start'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-5'>
                            {contact.map(item => (
                                <div key={item.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='hover-card hover-card-small py-8.75 px-5 sm:px-7 rounded-xl'>
                                    <div className='flex items-center gap-5'>
                                        <div className='text-[34px] text-color'>{item.icon}</div>
                                        <div className='flex flex-col gap-1'>
                                            <h4 className='text-[22px] text-white font-semibold font-rajdhani'>{item.id} {item.label}</h4>
                                            <span className='block w-10 h-0.5 rounded bg-[#FFFFFFCC]'></span>
                                        </div>
                                    </div>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#FFFFFFCC] hover:text-[#FDB400] transition font-titillium mt-3 block text-[16px]">{item.text}</a>
                                </div>
                            ))}
                        </div>
                        <div className='h-[550px] bg-amber-800 w-full'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;