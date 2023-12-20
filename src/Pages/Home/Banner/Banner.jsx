import React from 'react';
import Carousel from '../../../Components/Carousel/Carousel';

// todo
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
// todo


const Banner = () => {

    // todo: 
    const carouselItems = [
        {
            img: "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg",
            title: 'Item 1',
            slogan: 'Discover the New Collection',
            link: 'https://www.inchcalculator.com/amps-to-watts-calculator/',
        },
        {
            img: "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg",
            title: 'Item 2',
            slogan: 'Experience the Adventure',
            link: 'https://tailwindcss.com/docs/object-fit',
        },
        {
            img: "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg",
            title: 'Item 3',
            slogan: 'Unleash Your Creativity',
            link: '',
        },
        {
            img: "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg",
            title: 'Item 4',
            slogan: 'Embrace the Journey',
            link: '',
        },
        {
            img: "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg",
            title: 'Item 5',
            slogan: 'Elevate Your Style',
            link: '',
        },
        {
            img: "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg",
            title: 'Item 6',
            slogan: 'Transform Your Space',
            link: '',
        },
    ];

    return (
        // todo
        <div>
            <Carousel carouselItems={carouselItems} autoSlide={true}/>
        </div>
    );
};

export default Banner;