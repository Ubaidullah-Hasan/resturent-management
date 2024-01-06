import React from 'react';
import { FaPersonWalkingArrowRight } from "react-icons/fa6";


const FoodBox = ({ data, tabSection = false }) => {
    // console.log(data)

    const handleCart = () => {

    }


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6'>
            {
                tabSection ?
                    data.map((item, index) => (
                        <div key={item?._id} className='relative lg:h-[580px] xl:h-[555px] w-full xl:w-[424px] bg-[#F3F3F3]'>
                            <img src={item?.image} alt={item?.name} className='w-full h-[300px] object-cover' />
                            <p className='bg-black text-white font-semibold py-[11px] px-[22px] inline absolute top-5 right-5'>${item?.price}</p>
                            <div className='py-[30px] px-[20px] md:py-8 md:px-[40px] text-center '>
                                <h2 className='text-[24px] font-semibold text-[#151515] capitalize mb-3'>{item?.name}</h2>
                                <p className='capitalize text-[#151515] mb-6'>
                                    {item?.recipe?.length > 60 ? `${item?.recipe.slice(0, 60)}...` : item?.recipe}
                                    {item?.recipe?.length > 60 && <FaPersonWalkingArrowRight className='inline ms-2 text-[#BB8506]' />}
                                </p>
                                <button onClick={handleCart} className={`shadow hover:shadow-lg duration-300 hover:bg-[#1F2937] text-[#BB8506] uppercase py-[15px] md:py-[20px] px-[22px]  md:px-[30px] text-[18px] md:text-[20px] font-medium rounded-lg border-b-[3px]  ${index === 1 ? 'bg-[#1F2937] hover:bg-[#E8E8E8] border-[#1F2937]' : 'bg-[#E8E8E8] border-[#BB8506]'}`}>Add To cart</button>
                            </div>
                        </div>
                    ))
                    :
                    data.map((item, index) => (
                        <div key={item?._id} className=' lg:h-[580px] xl:h-[555px] w-full xl:w-[424px] bg-[#F3F3F3]'>
                            <img src={item?.foodImg} alt={item?.recipeName} className='w-full h-[300px] object-cover' />
                            <div className='py-[30px] px-[20px] md:py-8 md:px-[40px] text-center '>
                                <h2 className='text-[24px] font-semibold text-[#151515] capitalize mb-3'>{item?.recipeName}</h2>
                                <p className='capitalize text-[#151515] mb-6'>
                                    {item?.desc?.length > 60 ? `${item?.desc.slice(0, 60)}...` : item?.desc}
                                    {item?.desc?.length > 60 && <FaPersonWalkingArrowRight className='inline ms-2 text-[#BB8506]' />}
                                </p>
                                <button onClick={handleCart} className={`shadow hover:shadow-lg text-[#BB8506] uppercase py-[15px] md:py-[20px] px-[22px]  md:px-[30px] text-[18px] md:text-[20px] font-medium rounded-lg border-b-[3px]  ${index === 1 ? 'bg-[#1F2937] border-[#1F2937]' : 'bg-[#E8E8E8] border-[#BB8506]'}`}>Add To cart</button>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
};

export default FoodBox;


// {
//     data.map((item, index) => (
//         <div key={item?._id} className=' lg:h-[580px] xl:h-[555px] w-full xl:w-[424px] bg-[#F3F3F3]'>
//             <img src={item?.foodImg} alt={item?.recipeName} className='w-full h-[300px] object-cover' />
//             <div className='py-[30px] px-[20px] md:py-8 md:px-[40px] text-center '>
//                 <h2 className='text-[24px] font-semibold text-[#151515] capitalize mb-3'>{item?.recipeName}</h2>
//                 <p className='capitalize text-[#151515] mb-6'>
//                     {item?.desc?.length > 60 ? `${item?.desc.slice(0, 60)}...` : item?.desc}
//                     {item?.desc?.length > 60 && <FaPersonWalkingArrowRight className='inline ms-2 text-[#BB8506]' />}
//                 </p>
//                 <button onClick={handleCart} className={`shadow hover:shadow-lg text-[#BB8506] uppercase py-[15px] md:py-[20px] px-[22px]  md:px-[30px] text-[18px] md:text-[20px] font-medium rounded-lg border-b-[3px]  ${index === 1 ? 'bg-[#1F2937] border-[#1F2937]' : 'bg-[#E8E8E8] border-[#BB8506]'}`}>Add To cart</button>
//             </div>
//         </div>
//     ))
// }