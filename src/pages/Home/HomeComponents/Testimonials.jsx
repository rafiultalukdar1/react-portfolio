import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

import "swiper/css";
import { TfiQuoteLeft } from "react-icons/tfi";

const Testimonials = () => {

    const testimonials = [
        {
            quoteIcon: FaQuoteLeft,
            rating: [FaStar, FaStar, FaStar, FaStar, FaStar],
            text: "Expertly balances design and function. The final result was creative, high-performing, and delivered with seamless professionalism.",
            name: "Ahmed Khan",
            role: "Happy Client",
            image: "https://i.ibb.co.com/bMNrfB45/profile3.png"
        },
        {
            quoteIcon: FaQuoteLeft,
            rating: [FaStar, FaStar, FaStar, FaStar, FaStar],
            text: "Rafiul was dedicated and patient, fixing my issues through several revisions & helping test on many mobile devices. Thanks again!",
            name: "Olivia",
            role: "Happy Client",
            image: "https://i.ibb.co.com/TBn5B6KC/user-female.png"
        },
        {
            quoteIcon: FaQuoteLeft,
            rating: [FaStar, FaStar, FaStar, FaStar, FaStar],
            text: "Skillfully blends aesthetics with functionality. The outcome was innovative, efficient, and executed with flawless professionalism.",
            name: "Jack Carter",
            role: "Happy Client",
            image: "https://i.ibb.co.com/849z5S40/profile.png"
        },
        {
            quoteIcon: FaQuoteLeft,
            rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalfAlt],
            text: "Seamlessly merges design and practicality. The result was inventive, effective, and delivered with impeccable expertise.",
            name: "Julian Turner",
            role: "Happy Client",
            image: "https://i.ibb.co.com/GvcmQYMS/profile4.png"
        }
    ];


    return (
        <>
            <div className='pt-25 sm:pt-30 md:pt-35 lg:pt-40'>
                <div className='container'>
                    <div className='relative'>
                        <h2 className='font-Rajdhani uppercase text-[#2b2a2a91] text-[48px] sm:text-[65px] md:text-[75px] lg:text-[95px] font-extrabold text-center leading-0'>Reviews</h2>
                        <h2 className='font-Rajdhani uppercase text-white text-[32px] sm:text-[40px] md:text-[45px] lg:text-[55px] font-bold absolute top-0 left-1/2 -translate-x-1/2 leading-0 whitespace-nowrap'>Client <span className='text-[#FDB400]'>Says</span></h2>
                    </div>

                    <div class="mt-15 sm:mt-22 md:mt-25 lg:mt-32">
                        <h2 class="font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize">Client Feedback!</h2>

                        <div className='mt-4 py-1'>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                loop={false}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 1.2 },
                                    768: { slidesPerView: 1.5 },
                                    992: { slidesPerView: 2.5 },
                                    1200: { slidesPerView: 3.3 },
                                }
                            }>
                            {/* <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    576: {
                                        slidesPerView: 1.2,
                                    },
                                    768: {
                                        slidesPerView: 1.5,
                                    },
                                    992: {
                                        slidesPerView: 2.5,
                                    },
                                    1200: {
                                        slidesPerView: 3.3,
                                    },
                                }
                            }> */}

                                {testimonials.map((item, i) => (
                                    <SwiperSlide key={i} className="testimonials-box rounded-md">
                                    <div className='px-5 py-6.5 min-h-62.5 h-full flex flex-col justify-between gap-3.75'>
                                        <div className="flex justify-between">
                                            <TfiQuoteLeft className='text-white text-[33px]' />
                                            <div className="flex space-x-0.5">
                                                {item.rating.map((Icon, idx) => (
                                                    <Icon key={idx} className='text-[#ffdf20] text-[20px]' />
                                                ))}
                                            </div>
                                        </div>

                                        <p className='text-[15px] text-color font-titillium'>"{item.text}"</p>

                                        <div className="flex items-center gap-3.75">
                                            <img src={item.image} alt={item.name} className='w-14 h-14 rounded-full object-cover p-0.5 border border-[#fdb500da]' />
                                            <div>
                                                <h4 className='text-white text-[18px] winky-font uppercase '>{item.name}</h4>
                                                <span className='text-color font-titillium text-[14px] uppercase'>{item.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;