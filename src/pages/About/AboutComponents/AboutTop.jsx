import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const code = `const rafi = {
  name: "Rafiul Talukdar",
  role: "MERN Stack Developer",
  skills: [
    "MongoDB", "Express.js", "React", "Node.js"
  ],
  tagline: "Growth Through Creation"
};`;

const AboutTop = () => {

    const profileInfo = [
        { label: "Name", value: "Rafiul Talukdar" },
        { label: "Date of Birth", value: "29 April 2006" },
        { label: "City", value: "Sherpur" },
        { label: "Residence", value: "Bangladesh" },
        { label: "Work Status", value: "Freelance & Flowing" },
        { label: "Motto", value: "Continuous Learning" }
    ];
    const professionalInfo = [
        { label: "Degree", value: "Diploma in Engineering (Computer)" },
        { label: "Profession", value: "Web Developer" },
        { label: "Experience", value: "3 Years" },
        { label: "Languages", value: "Bangla, English" },
        { label: "Phone", value: "01720229887" },
        { label: "E-mail", value: "rafiultalukdar007@gmail.com" },
    ];

    return (
        <>
            <div className='pt-20 sm:pt-25 md:pt-28 lg:pt-32'>
                <div className='container'>
                    <div className='relative'>
                        <h2 className='font-Rajdhani uppercase text-[#2b2a2a91] text-[48px] sm:text-[65px] md:text-[75px] lg:text-[95px] font-extrabold text-center leading-0'>Resume</h2>
                        <h2 className='font-Rajdhani uppercase text-white text-[32px] sm:text-[40px] md:text-[45px] lg:text-[55px] font-bold absolute top-0 left-1/2 -translate-x-1/2 leading-0 whitespace-nowrap'>About <span className='text-[#FDB400]'>Me</span></h2>
                    </div>

                    <div className='mt-18 sm:mt-22 md:mt-25 lg:mt-32'>
                        <h2 className='font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize'>Personal information</h2>
                        <div className='grid grid-cols-12 mt-3.75 sm:mt-5 gap-5'>
                            <div className='col-span-full lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-2 sm:gap-y-3'>
                                <div className='flex flex-col gap-2 sm:gap-3'>
                                    {profileInfo.map((item, index) => (
                                        <div key={index} className="flex items-center gap-5 sm:gap-8">
                                            <div className="flex justify-between items-center max-w-25 sm:max-w-27.5 w-full">
                                                <p className="text-[15px] sm:text-[16px] font-titillium text-color">{item.label}</p>
                                                <p className="text-[15px] sm:text-[16px] font-titillium text-color">:</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[15px] sm:text-[16px] font-titillium text-white font-medium">{item.value}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col gap-2 sm:gap-3'>
                                    {professionalInfo.map((item, index) => (
                                        <div key={index} className="flex items-start gap-5 sm:gap-8">
                                            <div className="flex justify-between items-center max-w-25 sm:max-w-27.5 w-full">
                                                <p className="text-[15px] sm:text-[16px] font-titillium text-color">{item.label}</p>
                                                <p className="text-[15px] sm:text-[16px] font-titillium text-color">:</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[15px] sm:text-[16px] font-titillium text-white font-medium">{item.value}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='col-span-full lg:col-span-4'>
                                <SyntaxHighlighter language="javascript" style={tomorrow} customStyle={{ fontSize: '15px', borderRadius: '8px', padding: '15px', background: '#141414' }}>
                                    {code}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutTop;