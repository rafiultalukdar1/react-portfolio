import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let value = 0;

        const interval = setInterval(() => {
            value += 1;
            setProgress(value);

            if (value >= 100) {
                clearInterval(interval);
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black'>
            <div className='text-center'>

                <div className='relative w-50 sm:w-75 h-5 sm:h-7.5 border-2 border-white rounded overflow-hidden'>
                    <div className='flex h-full'>
                        {[...Array(16)].map((_, index) => (
                            <div
                                key={index}
                                className='flex-1 border-r border-black/30 bg-[#FDB400]'
                                style={{
                                    opacity: progress > index * 6 ? 1 : 0.2
                                }}
                            />
                        ))}
                    </div>
                </div>

                <h2 className='mt-1 sm:mt-2.5 text-[18px] sm:text-[22px] font-semibold tracking-widest text-[#FFFFFFCC] capitalize font-rajdhani'>
                    Loading...
                </h2>
            </div>
        </div>
    );
};

export default Preloader;