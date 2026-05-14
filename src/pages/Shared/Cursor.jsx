import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [dot, setDot] = useState({ x: 0, y: 0 });

    // mouse position track
    useEffect(() => {
        const move = (e) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    // smooth lag animation
    useEffect(() => {
        let animation;

        const animate = () => {
            setDot((prev) => ({
                x: prev.x + (mouse.x - prev.x) * 0.15,
                y: prev.y + (mouse.y - prev.y) * 0.15
            }));

            animation = requestAnimationFrame(animate);
        };
        
        animate();

        return () => cancelAnimationFrame(animation);
    }, [mouse]);

    return (
        <>
            <div className="fixed top-0 left-0 w-6 h-6 border-2 border-[#FDB400] rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }} />

            <div className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FDB400] rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(${dot.x}px, ${dot.y}px)` }} />
        </>
    );
};

export default Cursor;