import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import MenuBox from '../../Shared/MenuBox/MenuBox';

const PopularMenu = () => {
    const [popular, setPopular] = useState([]);


    useEffect(() => {
        fetch(`https://resturent-app-server.vercel.app/categories/popular`)
            .then(res => res.json())
            .then(data => {
                setPopular(data);
            })
    }, []);


    return (
        <section className='section-mt section-w mb-[60px] md:mb-[80px] lg:mb-[130px]'>
            <SectionHeader
                title={"FROM OUR MENU"}
                subHeading={"Check it out"}
            />

            <MenuBox
                data={popular}
                btnContent={'View Full Menu'}
                toURL='/menu'
            />


        </section>
    );
};

export default PopularMenu;