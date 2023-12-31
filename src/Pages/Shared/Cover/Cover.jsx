import React from 'react';

const Cover = ({ img, pageCover = false, title = 'title', desc = 'desc...'}) => {
    return (
        <div className={`${pageCover ? 'pb-[40px] md:pb-[80px] lg:pb-[110px] pt-[70px] md:pt-[150px] lg:pt-[240px]' : 'py-[80px] md:py-[120px] lg:py-[175px]'}`} style={{ backgroundImage: `url('${img}')` }}>
            {
                pageCover ?
                    <div className='text-center bg-[#15151599]/60 section-w py-[35px] md:py-[60px] lg:py-[145px]'>
                        <h1 className='text-white font-cinzel text-[28px] md:text-[52px] lg:text-[88px] font-bold'>{title}</h1>
                        <p className='text-white font-cinzel text-[18px] md:text-[20px] lg:text-[24px] max-w-[370px] md:max-w-[500px] lg:max-w-[841px] mx-auto'>{desc}</p>
                    </div>
                    :
                    <div className='text-center bg-[#15151599]/60 section-w pt-[42px] md:pt-[65px] lg:pt-[102px] pb-[52px] md:pb-[82px] lg:pb-[127px]'>
                        <h1 className='text-white font-cinzel text-[28px] md:text-[52px] lg:text-[88px] font-bold'>{title}</h1>
                        <p className='text-white font-cinzel text-[18px] md:text-[20px] lg:text-[24px] max-w-[370px] md:max-w-[500px] lg:max-w-[841px] mx-auto'>{desc}</p>
                    </div>
            }
        </div>
    );
};

export default Cover;