import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: "Figma", percent: 95 },
  { name: "Photoshop (psd)", percent: 90 },
  { name: "Adobe XD", percent: 85 },
  { name: "Adobe Illustrator", percent: 80 }
];

const devSkills = [
  { name: "HTML & CSS", percent: 98 },
  { name: "JavaScript & jQuery", percent: 95 },
  { name: "React & Next.js", percent: 90 },
  { name: "MongoDB, Express.js, Node.js", percent: 85 }
];

const Skills = () => {

  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sectionRef} className='pt-12 sm:pt-15 md:pt-17.5 lg:pt-20'>
        <div className='container max-w-3xl'>
          <h2 className='font-rajdhani text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize'>Tech Stack!</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-7.5 gap-y-7.5 mt-3.75 sm:mt-5.5'>
                <div className='space-y-3.75 sm:space-y-5'>
                    <h2 className='text-[24px] text-primary font-titillium font-semibold mb-2.5 sm:mb-3.75'>Design Expertise</h2>
                    {skills.map((skill, i) => (
                    <div key={i} className='space-y-1.5 sm:space-y-2.5'>
                        <div className='flex justify-between text-sm text-white'>
                            <span className='text-[15px] font-medium font-titillium uppercase'>{skill.name}</span>
                            <span className='text-[15px] font-medium font-titillium'>{active ? skill.percent : 0}%</span>
                        </div>

                        <div className='w-full h-2 bg-[#141414] rounded overflow-hidden'>
                            <div className='h-full rounded-full bg-[#FDB400] transition-all duration-1200 ease-out' style={{ width: active ? `${skill.percent}%` : '0%' }} />
                        </div>
                    </div>
                    ))}
                </div>
                <div className='space-y-3.75 sm:space-y-5'>
                    <h2 className='text-[24px] text-primary font-titillium font-semibold mb-2.5 sm:mb-3.75'>Development</h2>
                    {devSkills.map((skill, i) => (
                    <div key={i} className='space-y-1.5 sm:space-y-2.5'>
                        <div className='flex justify-between text-sm text-white'>
                            <span className='text-[15px] font-medium font-titillium uppercase'>{skill.name}</span>
                            <span className='text-[15px] font-medium font-titillium'>{active ? skill.percent : 0}%</span>
                        </div>
                        <div className='w-full h-2 bg-[#141414] rounded overflow-hidden'>
                            <div className='h-full rounded-full bg-[#FDB400] transition-all duration-1200 ease-out' style={{ width: active ? `${skill.percent}%` : '0%' }} />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
