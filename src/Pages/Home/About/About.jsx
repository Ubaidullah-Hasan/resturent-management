import React from 'react';
import aboutBanner from '../../../assets/home/chef-service.jpg'

const About = () => {
    return (
        <section className='section-w section-mt py-[30px] md:py-[90px] lg:py-[120px] px-[20px] md:px-[70px] lg:px-[112px] bg-fixed bg-center bg-no-repeat' style={{ backgroundImage: `url(${aboutBanner})` }}>
            <div className='py-[20px] md:py-[40px] lg:py-[60px] xl:py-[100px] px-[35px] md:px-[60px] lg:px-[100px] xl:px-[167px] text-center bg-white '>
                <h1 className='font-cinzel text-[45px] mb-2'>Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </section>
    );
};

export default About;