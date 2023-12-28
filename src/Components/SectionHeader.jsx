import React from 'react';

const SectionHeader = ({title, subHeading}) => {
    return (
        <div className=' md:w-[424px] mx-auto text-center mb-[20px] md:mb-[30px] lg:mb-[48px]'>
            <p className='text-[#D99904] text-[20px] italic mb-2 md:mb-4'>---{subHeading}---</p>
            <h1 className='text-[#151515] text-[22px] md:text-[28px] lg:text-[40px] py-3 md:py-4 border-y-2 md:border-y-4'>{title}</h1>
        </div>
    );
};

export default SectionHeader;