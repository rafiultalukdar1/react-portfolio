import React, { useState } from 'react';

const ProjectsItems = ( {frontData} ) => {

    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <div class="mt-15 sm:mt-22 md:mt-25 lg:mt-32">
                <div className='container'>
                    <div className="flex items-center">
                        <button onClick={() => setActiveTab("tab1")} className={`px-7 py-3 text-[12px] font-bold uppercase tracking-[1px] [word-spacing:2px] transition-all duration-300 border border-[#fdb5009c] rounded-tl rounded-bl ${ activeTab === "tab1" ? "bg-primary text-black" : "text-white" }`}>Front-End</button>

                        <button onClick={() => setActiveTab("tab2")} className={`px-7 py-3 text-[12px] font-bold uppercase tracking-[1px] [word-spacing:2px] transition-all duration-300 border border-[#fdb5009c] rounded-tr rounded-br ${activeTab === "tab2" ? "bg-primary text-black" : "text-white"}`}>Full-Stack</button>
                    </div>


                    <div className="mt-12.5">
                        {activeTab === "tab1" && (
                            <div className="animate-[fade_0.4s_ease]">
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-1'>
                                    {
                                        frontData.map((project) => (
                                            <div key={project.id} className='group min-h-55 sm:min-h-70 relative overflow-hidden'>
                                                <img src={project.thumbnail} alt="" className='h-full w-full object-cover'/>
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
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {activeTab === "tab2" && (
                            <div className="animate-[fade_0.4s_ease]">
                                Content 2
                            </div>
                        )}
                    </div>


                    
                </div>
            </div>
        </>
    );
};

export default ProjectsItems;