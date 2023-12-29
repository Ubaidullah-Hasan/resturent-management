import React from 'react';
import { Link } from 'react-router-dom';

const CallUs = () => {
    return (
        <section className='section-w h-[150px] md:h-[200px] lg:h-[250px] mb-[60px] md:mb-[80px] lg:mb-[130px] flex justify-center items-center bg-[#151515] text-white'>
            <h1 className='text-[20px] md:text-[32px] lg:text-[50px] font-semibold'><Link to={"tel:+8801401606882"}>Call Us: +8801401606882</Link></h1>
        </section>
    );
};

export default CallUs;