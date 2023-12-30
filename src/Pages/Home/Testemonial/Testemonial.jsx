import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Rating from 'react-rating';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import UseScreenWidth from '../../../Hooks/UseScreenWidth';







const Testemonial = () => {
    const { screenWidth } = UseScreenWidth();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews);


    return (
        <section className='section-w section-mb-130'>
            <SectionHeader
                subHeading={"What Our Clients Say"}
                title={"TESTIMONIALS"}
            />

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="">
                {
                    reviews.map((review) => (
                        <SwiperSlide key={review?._id}>
                            <div className='flex flex-col items-center text-center'>
                                <Rating
                                    initialRating={review?.rating}
                                    emptySymbol={<FaStar color='#A1A1A1' size={screenWidth < 600 ? 30 : 50} />}
                                    fullSymbol={<FaStar color='#CD9003' size={screenWidth < 600 ? 30 : 50} />}
                                    readonly={true}
                                />
                                <FaQuoteLeft className='mt-[30px] md:mt-[48px] mb-[25px] md:mb-[40px] ' size={screenWidth < 600 ? 50 : 100} />
                                <p className='text-[20px] w-[80%]'>{review?.details}</p>
                                <h2 className='text-[22px] md:text-[32px] text-[#CD9003] uppercase font-medium mt-2'>{review?.name}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Testemonial;