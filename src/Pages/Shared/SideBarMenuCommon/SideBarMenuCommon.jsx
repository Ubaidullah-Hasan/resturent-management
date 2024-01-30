import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { BsFillBagFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import SidebarActiveLink from '../../../Hooks/ActiveLink/SidebarActiveLink';



const SideBarMenuCommon = () => {
    const sideItems = [
        {
            icon: <AiFillHome />,
            name: 'Home',
            link: '/dashboard'
        },
        {
            icon: <FaBars />,
            name: 'Menu',
            link: '/menu'
        },
        {
            icon: <BsFillBagFill />,
            name: 'Shop',
            link: '/Shop'
        },
        {
            icon: <BsEnvelopeFill />,
            name: 'Contact',
            link: '/contact'
        },
    ];

    return (
        <div className='flex flex-col space-y-6'>
            {sideItems.map(item => <SidebarActiveLink
                to={item?.link}
            >
                <p className='text-[24px] flex items-center gap-3 uppercase font-bold font-cinzel'>{item?.icon} <span className='text-[16px]'>{item?.name}</span></p>

            </SidebarActiveLink>)}
        </div>
    );
};

export default SideBarMenuCommon;