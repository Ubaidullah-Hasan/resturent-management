import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import UseScreenWidth from '../../../Hooks/UseScreenWidth';

const PopularMenu = () => {
    const { screenWidth } = UseScreenWidth(); console.log(screenWidth)
    const smScreen = 640;
    const [menu, setMenu] = useState([]);
    // todo: fetch data from server
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.filter(item => item.category === 'popular')));
    }, []);
    console.log(menu)

    // todo: 
    const handleMenu = () => {

    }


    return (
        <section className='section-mt section-w mb-[60px] md:mb-[80px] lg:mb-[130px]'>
            <SectionHeader
                title={"FROM OUR MENU"}
                subHeading={"Check it out"}
            />

            <div className='grid lg:grid-cols-2 gap-6 lg:mb-[48px]'>
                {menu.map(item => (
                    <div key={item?._id} className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-between gap-2 md:gap-[32px] '>
                        <img src={item?.image} alt={item?.name} className='w-[118px] h-[104px] rounded-full sm:rounded-none sm:rounded-r-full sm:rounded-b-full object-cover' />
                        <div className='text-center sm:text-start'>
                            {
                                screenWidth < smScreen ?
                                    <>
                                        <h2 className='font-cinzel text-[#151515] text-[20px] uppercase'>{item?.name} </h2>
                                        <hr className='w-1/2 mx-auto border-dashed border-[#999999]' />
                                    </>
                                    :
                                    <h2 className='font-cinzel text-[#151515] text-[20px] uppercase'>{item?.name} ------------------</h2>
                            }

                            <p className='text-[#737373] mt-2 '>{item?.recipe}</p>
                        </div>
                        <p className='text-[#BB8506] text-[20px] md:me-4 lg:me-0'>${item?.price}</p>
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <button onClick={handleMenu} className='w-[236px] py-5 px-[30px] border-b-[3px] rounded-b-lg border-[#1F2937] text-[#1F2937] text-[20px] font-[500] uppercase hover:shadow-lg'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;