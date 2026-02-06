import React from 'react';
import { NavLink } from 'react-router';


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import galleryImg01 from '../../../assets/images/gallary/gallary-image.png'
import galleryImg02 from '../../../assets/images/gallary/gallary-image2.png'
import galleryImg03 from '../../../assets/images/gallary/gallary-image5.png'
import galleryImg04 from '../../../assets/images/gallary/gallary-image4.png'
import galleryImg05 from '../../../assets/images/gallary/gallary-image3.png'
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const Gallery = () => {

    const galleryData = [
        {
            id: 1,
            img: galleryImg01,
            title: "Techida",
            desc: "Modern landing page design for tech startups",
            liveLink: "https://rafiultalukdar1.github.io/Techida/",
        },
        {
            id: 2,
            img: galleryImg02,
            title: "Lorenzo",
            desc: "Professional corporate website design",
            liveLink: "https://rafiultalukdar1.github.io/Lorenzo-Website/",
        },
        {
            id: 3,
            img: galleryImg03,
            title: "BüyüdüGitti",
            desc: "Multi-page website with scalable layout",
            liveLink: "https://rafiultalukdar1.github.io/B-y-d-Gitti/",
        },
        {
            id: 4,
            img: galleryImg04,
            title: "Scale Marchandise",
            desc: "Merchandise eCommerce page design",
            liveLink: "https://rafiultalukdar1.github.io/Scale-Marchandise/",
        },
        {
            id: 5,
            img: galleryImg05,
            title: "ABC Fitness",
            desc: "Marketing website & landing page design",
            liveLink: "https://rafiultalukdar1.github.io/ABC-Fitness/",
        },
    ];
    
    return (
        <>
            <div className='pt-25 sm:pt-30 md:pt-35 lg:pt-40'>
                <div className='container'>
                    <div className='relative'>
                        <h2 className='font-Rajdhani uppercase text-[#2b2a2a91] text-[48px] sm:text-[65px] md:text-[75px] lg:text-[95px] font-extrabold text-center leading-0'>Projects</h2>
                        <h2 className='font-Rajdhani uppercase text-white text-[32px] sm:text-[40px] md:text-[45px] lg:text-[55px] font-bold absolute top-0 left-1/2 -translate-x-1/2 leading-0 whitespace-nowrap'>Tech <span className='text-[#FDB400]'>Works</span></h2>
                    </div>

                    <div className='mt-15 sm:mt-22 md:mt-25 lg:mt-32'>
                        <h2 class="font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize">My Project Highlights!</h2>

                        <div className='mt-6.75 sm:mt-10 md:mt-12 lg:mt-15 xl:mt-20 pb-10'>
                            <Swiper
                                modules={[EffectCoverflow, Autoplay, Pagination]}
                                effect="coverflow"
                                centeredSlides={true}
                                slidesPerView={1}
                                loop={true}
                                spaceBetween={-60}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                coverflowEffect={{
                                    rotate: 30,
                                    stretch: 0,
                                    depth: 200,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 1,
                                        centeredSlides: true,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 1.5,
                                        centeredSlides: true,
                                        spaceBetween: -20,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                        centeredSlides: true,
                                        spaceBetween: -50,
                                    }
                                }} className='pb-10 relative' >
                                {galleryData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        {({ isActive }) => (
                                            <div className="relative overflow-hidden">
                                                <img src={item.img} alt={item.title} className="w-full" />
                                                <div className={`absolute inset-x-0 bottom-0 z-10 p-3.75 sm:p-5 pb-5 sm:pb-7.5 pt-10 bg-linear-to-t from-black/90 via-black/60 to-transparent transition-all duration-500 ease-in-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`} >
                                                    <h3 className='text-[30px] md:text-[34px] font-bold text-primary font-rajdhani leading-0 mb-4.5'>{item.title}</h3>
                                                    <p className='text-white font-titillium text-[16px] sm:text-[18px] md:text-[20px]'>{item.desc}</p>
                                                    <button className='custom-btn custom-btn-swiper mt-2.5'><NavLink to='/projects'>See More</NavLink></button>
                                                </div>
                                                {/* <div className={`bg-[#FDB400] py-3 px-5 absolute top-0 right-0 z-20 transition-[transform,opacity] duration-500 ease-in-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
                                                    <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className='text-black font-titillium uppercase text-[14px] font-semibold flex items-center gap-2'><BsBoxArrowInUpRight /><span>Live Demo</span></a>
                                                </div> */}
                                                <div className={`absolute top-0 right-0 z-20 bg-[#FDB400] py-2.5 sm:py-3.75 px-5 sm:px-6.25 transition-all duration-700 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`} >
                                                    <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black uppercase text-[14px] font-semibold font-titillium"><BsBoxArrowInUpRight className='text-[18px]'/>Live Site</a>
                                                </div>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='mt-5 lg:mt-7.5'>
                            <NavLink to='/projects' className='custom-btn'>View All Projects</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;