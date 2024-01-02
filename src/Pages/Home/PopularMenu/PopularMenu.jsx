import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import useMenu from '../../../Hooks/useMenu';
import MenuBox from '../../Shared/MenuBox/MenuBox';
import { useNavigate } from 'react-router-dom';

const PopularMenu = () => {
    const navigate = useNavigate();
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')


    // todo: 
    const handleMenu = () => {
        navigate('/menu')
    }


    return (
        <section className='section-mt section-w mb-[60px] md:mb-[80px] lg:mb-[130px]'>
            <SectionHeader
                title={"FROM OUR MENU"}
                subHeading={"Check it out"}
            />

            <MenuBox data={popular} />

            <PrimaryBtn handleMenu={handleMenu} btnContent={'View Full Menu'} />
        </section>
    );
};

export default PopularMenu;