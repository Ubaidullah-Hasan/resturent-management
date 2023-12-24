import React, { useEffect, useState } from 'react';

const UseScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleWindowResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)

        // Cleanup: Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleWindowResize)
    }, []); // Empty dependency array means this effect runs once when the component mounts
    

    return {screenWidth};
};

export default UseScreenWidth;