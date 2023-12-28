import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/SectionHeader';

const PopularMenu = () => {
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
        <div className='section-mt section-w mb-[60px] md:mb-[80px] lg:mb-[130px]'>
            <SectionHeader
                title={"FROM OUR MENU"}
                subHeading={"Check it out"}
            />

            <div className='grid grid-cols-2 gap-6 lg:mb-[48px]'>
                {menu.map(item => (
                    <div key={item?._id} className='flex gap-[32px]'>
                        <img src={item?.image} alt={item?.name} className='w-[118px] h-[104px] rounded-r-full	rounded-b-full ' />
                        <div>
                            <h2 className='font-cinzel text-[#151515] text-[20px] uppercase'>{item?.name} ------------------</h2>
                            <p className='text-[#737373] mt-2 '>{item?.recipe}</p>
                        </div>
                        <p className='text-[#BB8506] text-[20px]'>${item?.price}</p>
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <button onClick={handleMenu} className='w-[236px] py-5 px-[30px] border-b-[3px] rounded-b-lg border-[#1F2937] text-[#1F2937] text-[20px] font-[500] uppercase hover:shadow-lg'>View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;