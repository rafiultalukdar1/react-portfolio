import React, { useEffect, useState } from 'react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsItems = ( {frontData, fullstackData } ) => {

    const [activeTab, setActiveTab] = useState("tab1");
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    //AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <>
            <div class="mt-15 sm:mt-22 md:mt-25 lg:mt-32">
                <div className='container'>
                    <div className="flex items-center" data-aos="fade-up">
                        <button onClick={() => setActiveTab("tab1")} className={`px-7 py-3 text-[12px] font-bold uppercase tracking-[1px] [word-spacing:2px] transition-all duration-300 border border-[#fdb5009c] bg-[#0C0C0C] rounded-tl rounded-bl ${ activeTab === "tab1" ? "bg-primary text-black" : "text-white" }`}>Front-End</button>
                        <button onClick={() => setActiveTab("tab2")} className={`px-7 py-3 text-[12px] font-bold uppercase tracking-[1px] [word-spacing:2px] transition-all duration-300 border border-[#fdb5009c] bg-[#0C0C0C] rounded-tr rounded-br ${activeTab === "tab2" ? "bg-primary text-black" : "text-white"}`}>Full-Stack</button>
                    </div>

                    <div className="mt-12.5">
                        {activeTab === "tab1" && (
                            <div className="animate-[fade_0.4s_ease]">
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-1'>
                                    {
                                        frontData.map((project, index) => (
                                            <div key={project.id} data-aos="fade-up" data-aos-delay={index * 150} className='group min-h-55 sm:min-h-70 relative overflow-hidden'>
                                                <img src={project.thumbnail} alt="" className='h-full w-full object-cover duration-700 group-hover:scale-105'/>
                                                <div className='absolute bottom-0 left-0 w-full px-3.75 pb-3.75 pt-12.5 bg-linear-to-t from-black to-transparent duration-700'>
                                                    <h4 className='text-[18px] sm:text-[20px] font-semibold text-primary font-rajdhani'>{project.projectName}</h4>
                                                    <ul className='flex items-center gap-2.5'>
                                                        {
                                                            project.techStack.slice(0, 3).map((tech, index) => (
                                                                <li key={index} className='text-[14px] font-semibold font-titillium text-color'>{tech}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className='absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm opacity-0 invisible duration-500 group-hover:opacity-100 group-hover:visible'>
                                                    <button onClick={() => setSelectedProject(project)} className='text-white px-5 py-2.5 text-[12px] font-bold uppercase tracking-[1px] [word-spacing:2px] border border-white/50 bg-white/10'>View Details</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                {/* Modal */}
                                {selectedProject && (
                                    <div onClick={() => setSelectedProject(null)} className='fixed inset-0 z-45 flex items-center justify-center bg-black/80 px-4' >
                                        <div onClick={(e) => e.stopPropagation()} className='relative w-full max-w-187.5 max-h-[80vh] overflow-y-auto bg-black border border-[#c1c0bf1e] rounded animate-[modal_0.3s_ease]'>
                                            <button onClick={() => setSelectedProject(null)} className='absolute z-2 top-2 sm:top-3.75 right-2 sm:right-3.75 h-8 sm:h-10 w-8 sm:w-10 flex justify-center items-center rounded-full text-[#FDB400] text-[18px] sm:text-[24px] border border-[#FDB400] overflow-hidden transition-transform duration-300 hover:text-black hover:bg-[#FDB400] hover:rotate-90 transform'><IoMdClose/></button>
                                            <div className='relative'>
                                                <img src={selectedProject.thumbnail} alt="" className='w-full' />
                                                <div className='absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black to-transparent z-0'></div>
                                            </div>
                                            <div className='py-3.75 sm:py-5.25 px-3 sm:px-5 flex flex-col gap-1.5 sm:gap-2.5'>
                                                <h2 className='text-[20px] sm:text-[24px] md:text-[30px] text-[#FDB400] font-bold font-rajdhani'>{selectedProject.projectName}</h2>
                                                <p className='text-[15px] sm:text-[16px] font-titillium text-color'>{selectedProject.description}</p>
                                                <div>
                                                    <h6 className='text-[15px] sm:text-[16px] font-titillium text-[#FDB400]'>Tech Stack:</h6>
                                                    <ul className='flex flex-wrap items-center gap-1.5 mt-1.5'>
                                                        {
                                                            selectedProject.techStack.map((tech, index) => (
                                                                <li key={index} className='text-[14px] font-medium font-titillium bg-white/8 border border-white/20 px-2.5 py-0.5 text-white'>{tech}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className='flex flex-wrap items-center gap-2.5 mt-2.5'>
                                                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className='text-white bg-[#0C0C0C] flex items-center gap-2 uppercase text-[12px] font-semibold font-titillium py-2 px-3 rounded tracking-[1px] [word-spacing:2px] border border-[#fdb5009c]'><BsBoxArrowInUpRight className='text-[16px]'/><span>Live Preview</span></a>
                                                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className='text-white bg-[#0C0C0C] flex items-center gap-2 uppercase text-[12px] font-semibold font-titillium py-2 px-3 rounded tracking-[1px] [word-spacing:2px] border border-[#fdb5009c]'><FaGithub className='text-[16px]'/><span>Source Code</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* Modal */}
                            </div>
                        )}

                        {activeTab === "tab2" && (
                            <div className="animate-[fade_0.4s_ease]">
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-1'>
                                    {
                                        fullstackData.map((project, index) => (
                                            <div key={project.id} data-aos="fade-up" data-aos-delay={index * 150} className='group min-h-55 sm:min-h-70 relative overflow-hidden'>
                                                <img src={project.thumbnail} alt="" className='h-full w-full object-cover duration-700 group-hover:scale-105'/>
                                                <div className='absolute bottom-0 left-0 w-full px-3.75 pb-3.75 pt-12.5 bg-linear-to-t from-black to-transparent duration-700'>
                                                    <h4 className='text-[18px] sm:text-[20px] font-semibold text-primary font-rajdhani'>{project.projectName}</h4>
                                                    <ul className='flex items-center gap-2.5'>
                                                        {
                                                            project.techStack.slice(0, 3).map((tech, index) => (
                                                                <li key={index} className='text-[14px] font-semibold font-titillium text-color'>{tech}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className='absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm opacity-0 invisible duration-500 group-hover:opacity-100 group-hover:visible'>
                                                    <button onClick={() => setSelectedProject(project)} className='text-white px-5 py-2.5 text-[12px] font-bold uppercase tracking-[1px] [word-spacing:2px] border border-white/50 bg-white/10'>View Details</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {/* <div className='h-full w-full p-5 flex flex-col items-center justify-center text-center border border-[#c1c0bf1e] gap-5'>
                                        <FaHourglassHalf className='text-white text-[30px]' />
                                        <p className='text-white text-[16px] font-medium font-titillium max-w-67 text-color'>More projects will be added soon as I keep learning and building.</p>
                                    </div> */}
                                </div>

                                {/* Fullstack Modal */}
                                {selectedProject && activeTab === "tab2" && (
                                    <div onClick={() => setSelectedProject(null)} className='fixed inset-0 z-45 flex items-center justify-center bg-black/80 px-4' >
                                        <div onClick={(e) => e.stopPropagation()} className='relative w-full max-w-187.5 max-h-[80vh] overflow-y-auto bg-black border border-[#c1c0bf1e] rounded animate-[modal_0.3s_ease]'>

                                            <button onClick={() => setSelectedProject(null)} className='absolute z-2 top-2 sm:top-3.75 right-2 sm:right-3.75 h-8 sm:h-10 w-8 sm:w-10 flex justify-center items-center rounded-full text-[#FDB400] text-[18px] sm:text-[24px] border border-[#FDB400] overflow-hidden transition-transform duration-300 hover:text-black hover:bg-[#FDB400] hover:rotate-90 transform' >
                                                <IoMdClose/>
                                            </button>

                                            <div className='relative'>
                                                <img src={selectedProject.thumbnail} alt="" className='w-full' />
                                                <div className='absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black to-transparent z-0'></div>
                                            </div>

                                            <div className='py-3.75 sm:py-5.25 px-3 sm:px-5 flex flex-col gap-1.5 sm:gap-2.5'>
                                                <h2 className='text-[20px] sm:text-[24px] md:text-[30px] text-[#FDB400] font-bold font-rajdhani'>{selectedProject.projectName}</h2>
                                                <p className='text-[15px] sm:text-[16px] font-titillium text-color'>{selectedProject.description}</p>
                                                <div>
                                                    <h6 className='text-[15px] sm:text-[16px] font-titillium text-[#FDB400]'>Tech Stack:</h6>
                                                    <ul className='flex flex-wrap items-center gap-1.5 mt-1.5'>
                                                        {
                                                            selectedProject.techStack.map((tech, index) => (
                                                                <li key={index} className='text-[14px] font-medium font-titillium bg-white/8 border border-white/20 px-2.5 py-0.5 text-white'>
                                                                    {tech}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>

                                                <div className='flex flex-wrap items-center gap-2.5 mt-2.5'>
                                                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className='text-white bg-[#0C0C0C] flex items-center gap-2 uppercase text-[12px] font-semibold font-titillium py-2 px-3 rounded tracking-[1px] [word-spacing:2px] border border-[#fdb5009c]' >
                                                        <BsBoxArrowInUpRight className='text-[16px]'/>
                                                        <span>Live Preview</span>
                                                    </a>
                                                    {selectedProject.githubClient && (
                                                        <a href={selectedProject.githubClient} target="_blank" rel="noopener noreferrer" className='text-white bg-[#0C0C0C] flex items-center gap-2 uppercase text-[12px] font-semibold font-titillium py-2 px-3 rounded tracking-[1px] [word-spacing:2px] border border-[#fdb5009c]' >
                                                            <FaGithub className='text-[16px]'/>
                                                            <span>Client Code</span>
                                                        </a>
                                                    )}
                                                    {selectedProject.githubServer && (
                                                        <a href={selectedProject.githubServer} target="_blank" rel="noopener noreferrer" className='text-white bg-[#0C0C0C] flex items-center gap-2 uppercase text-[12px] font-semibold font-titillium py-2 px-3 rounded tracking-[1px] [word-spacing:2px] border border-[#fdb5009c]' >
                                                            <FaGithub className='text-[16px]'/>
                                                            <span>Server Code</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsItems;