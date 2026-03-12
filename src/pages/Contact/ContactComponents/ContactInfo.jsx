import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

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
        },
        {
            id: 0.5,
            label: "Facebook",
            text: "Facebook Profile",
            link: "https://www.facebook.com/rafiultalukdar1",
            icon: <FaFacebookF />
        },
        {
            id: 0.6,
            label: "WhatsApp",
            text: "01720229887",
            link: "https://wa.me/01720229887",
            icon: <FaWhatsapp />
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

    // Form
    const sendEmail = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const subject = e.target.subject.value.trim();
        const message = e.target.textarea.value.trim();
        if (!name || !email || !subject || !message) {
            toast.error("All fields are required!", {
                className: "toastify-black",
                progressClassName: "toast-progress",
                autoClose: 3000,
                position: "top-center"
            });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Please enter a valid email!", {
                className: "toastify-black",
                progressClassName: "toast-progress",
                autoClose: 3000,
                position: "top-center"
            });
            return;
        }
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            toast.success("Message Sent Successfully!", {
                className: "toastify-black",
                progressClassName: "toast-progress",
                autoClose: 3000,
                position: "top-center"
            });
            e.target.reset();
        })
        .catch(() => {
            toast.error("Failed to send message!", {
                className: "toastify-black",
                progressClassName: "toast-progress",
                autoClose: 3000,
                position: "top-center"
            });
        });
    };


    return (
        <>
            <div className='container'>
                <div className='mt-15 sm:mt-22 md:mt-25 lg:mt-32'>
                    <h2 className="font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize">Contact Information!</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 items-start'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-5'>
                            {contact.map(item => (
                                <div key={item.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='hover-card hover-card-small py-5.5 sm:py-8.75 px-4 sm:px-7 rounded-lg'>
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
                        <div className=''>
                            <div className='hover-card py-5 sm:py-7.5 px-3.75 sm:px-6.25 rounded-lg w-full' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                                <h2 className='text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-medium font-titillium text-white text-center'>Let’s Chat About Your Project</h2>
                                <form onSubmit={sendEmail} action="" className='mt-3.75 sm:mt-5 flex flex-col gap-2.5 sm:gap-3.75'>
                                    <input name="name" type="text" placeholder="Your Full Name" className='input-class'/>
                                    <input name="email" type="email" placeholder="Email ID" className='input-class'/>
                                    <input name="subject" type="text" placeholder="Subject" className='input-class'/>
                                    <textarea name="textarea" placeholder="Type Your Message" className='input-class min-h-30 sm:min-h-37.5 py-2.5'/>
                                    <div>
                                        <button type="submit" className='custom-btn'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;