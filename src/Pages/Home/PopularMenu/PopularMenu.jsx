import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import UseMenu from '../../../Hooks/UseMenu';
import MenuBox from '../../Shared/MenuBox/MenuBox';

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')


    // todo: 
    const handleMenu = () => {

    }


    return (
        <section className='section-mt section-w mb-[60px] md:mb-[80px] lg:mb-[130px]'>
            <SectionHeader
                title={"FROM OUR MENU"}
                subHeading={"Check it out"}
            />

            <MenuBox data = {popular} />

            <PrimaryBtn onClick={handleMenu} btnContent={'View Full Menu'} />
        </section>
    );
};

export default PopularMenu;