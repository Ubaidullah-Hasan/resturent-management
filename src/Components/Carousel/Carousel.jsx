import React, { useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom';



const Carousel = ({ carouselItems }) => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent(current === 0 ? carouselItems.length - 1 : current - 1);
    }

    const next = () => {
        setCurrent(current === carouselItems.length - 1 ? 0 : current + 1);
    }
    console.log("prev = ", current, "next = ", current);


    const handleLink = (link) => {
        navigate(link);
        console.log("link")
    }

    return (
        <>
            <div className='overflow-hidden cursor-pointer relative'>
                <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${current * 100}%)` }}>
                    {
                        carouselItems.map((item, index) => (
                            <img onClick={() => handleLink(item?.link)} className='w-[100%] md:h-full lg:h-[680px] 2xl:h-[700px] object-cover' src={item?.img} key={index} />
                        ))
                    }
                </div>


                {/* navigation button */}
                <>
                    <button className='absolute top-[43%] ms-5 cursor-default w-7 h-7 md:w-9 md:h-11 rounded-full bg-white/80 hover:bg-white/100 duration-100 flex justify-center items-center' onClick={prev}>
                        <IoMdArrowDropleft size={40} color='black' />
                    </button>

                    <button className='absolute top-[43%] right-0 me-5 cursor-default w-7 h-7 md:w-9 md:h-11 rounded-full bg-white/80 hover:bg-white/100 duration-100 flex justify-center items-center' onClick={next}>
                        <IoMdArrowDropright size={40} color='black' />
                    </button>
                </>


                {/* indicator */}
                <div className='hidden absolute bottom-5 right-0 left-0 md:flex items-center justify-center gap-3'>
                    {carouselItems.map((item, i) => (
                        <div key={i} className={`cursor-default w-4 h-4 rounded-full  ${current === i ? "p-3 bg-blue-500" : "bg-white/90"}`} />
                    ))}
                </div>
            </div>

            {/* navigation image */}
            <div className='w-1/2 py-1 mx-auto'>
                <div className='flex'>
                    {
                        carouselItems.map((img, i) => (
                            <div key={i} className={`border-2 ${current === i ? 'border-orange-500 opacity-100' : 'border-white opacity-70'}`}>
                                <img src={img?.img} alt='' className='aspect-video object-cover	' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Carousel;