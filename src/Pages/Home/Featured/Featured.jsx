import React from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import featureImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <section className='section-mb-130 py-[130px] bg-black/50'>
            <div className='section-w'>
                <SectionHeader
                    subHeading={"Check it out"}
                    title={"FROM OUR MENU "}
                    color='white'
                />
                <div className='flex items-center gap-[68px]'>
                    <img src={featureImg} alt="Feature" className='w-[648px] h-[400px]' />
                    <div>
                        <h3></h3>
                        <h3>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='uppercase rounded-lg border-b-[3px] border-white text-white text-[20px] px-[30px] py-[20px]'>read more</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Featured;