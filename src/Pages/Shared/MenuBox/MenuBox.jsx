import React from 'react';
import UseScreenWidth from '../../../Hooks/UseScreenWidth';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import { Link } from 'react-router-dom';


const MenuBox = ({ data, btnContent = 'ORDER YOUR FAVOURITE FOOD', toURL }) => {
    const { screenWidth } = UseScreenWidth();
    const smScreen = 640;

    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-6 lg:mb-[48px]'>
                {data.map(item => (
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

            <Link 
            to={toURL}
            >
                <PrimaryBtn btnContent={btnContent} />
            </Link>
        </div>
    );
};

export default MenuBox;