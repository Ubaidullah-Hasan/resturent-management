import React from 'react';
// import 'swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';


// import images
import salads from '../../../assets/home/slide1.jpg'
import soups from '../../../assets/home/slide2.jpg'
import pizzas from '../../../assets/home/slide3.jpg'
import desserts from '../../../assets/home/slide4.jpg'
import grains from '../../../assets/home/slide5.jpg'




const Category = () => {
    const categories = [
        {
            "_id": "1",
            "category_name": "Salads",
            "image": salads
        },
        {
            "_id": "2",
            "category_name": "Soups",
            "image": soups
        },
        {
            "_id": "3",
            "category_name": "pizzas",
            "image": pizzas
        },
        {
            "_id": "4",
            "category_name": "desserts",
            "image": desserts
        },
        {
            "_id": "5",
            "category_name": "Grains",
            "image": grains
        },
    ];


    return (
        <div className='lg:max-w-1320 mx-2 lg:mx-auto mt-[70px] mb-[90px] '>
            <>
                <Swiper
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        300: {
                            width: 300,
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        350: {
                            width: 350,
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        425: {
                            width: 425,
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1280: {
                            minWidth: 1280,
                            slidesPerView: 4,
                            spaceBetween: 25,
                        }
                    }}
                    modules={[FreeMode, Pagination]}
                    className=""
                    style={{
                        // "--swiper-pagination-color": "#FFBA08",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px"
                    }}
                >
                    {
                        categories.map((category) => (
                            <SwiperSlide>
                                <div className='relative'>
                                    <img src={category?.image} alt={category?.category_name} className='sm:h-[350px] lg:h-[450px]  aspect-potrate object-cover mb-[45px]' />
                                    <h1 className='absolute bottom-4 left-0 right-0 text-center text-white text-[20px] md:text-[32px] font-cinzel uppercase' style={{ textShadow: '2px 2px 1px black'}}>{category?.category_name}</h1>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </>
        </div>
    );
};


export default Category;