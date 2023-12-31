import React from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import featureImg from '../../../assets/home/featured.jpg'
import moment from 'moment';

const Featured = () => {
    return (
        <section className='section-mb-130 py-[60px] lg:py-[130px] bg-cover bg-no-repeat bg-center' style={{ background: `linear-gradient(to right, #00000094, #00000094), url(${featureImg})`, backgroundAttachment: 'fixed'}}>
            <div className='section-w'>
                <SectionHeader
                    subHeading={"Check it out"}
                    title={"FROM OUR MENU "}
                    color='text-white' // pass class like tailwind
                />
                <div className='flex flex-col lg:flex-row items-center gap-[30px] xl:gap-[68px] text-white'>
                    <img src={featureImg} alt="Feature" className='w-[300px] lg:w-[450px] xl:w-[648px] h-[200px] lg:h-[300px] xl:h-[400px] object-cover' />
                    <div className='text-center lg:text-start'>
                        <h3 className='text-[24px] leading-[36px]'>{moment().format('MMMM DD, YYYY')}</h3>
                        <h3 className='text-[24px] leading-[36px]'>WHERE CAN I GET SOME?</h3>
                        <p className='text-[20px] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='shadow hover:shadow-lg uppercase rounded-lg border-b-[3px] border-white text-white text-[20px] px-[30px] py-[20px]'>read more</button>
                    </div>
                </div>
            </div>
        </section >
        
    );
};

export default Featured;