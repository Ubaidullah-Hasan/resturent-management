import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { HiUserGroup } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import SidebarActiveLink from '../Hooks/ActiveLink/SidebarActiveLink';
import SideBarMenuCommon from '../Pages/Shared/SideBarMenuCommon/SideBarMenuCommon';


const DashboardLayout = () => {
    const location = useLocation();
    const path = location.pathname;
    const haveUrlDashboard = path.split('/')[path.split('/').length - 1] === 'dashboard';

    const menuItems = [
        {
            icon: <AiFillHome />, // todo: why admin home menu always white
            name: 'Admin Home',
            link: '/dashboard'
        },
        {
            icon: <MdOutlineStackedBarChart />,
            name: 'add items',
            link: '/dashboard/additems'
        },
        {
            icon: <FaBook />,
            name: 'manage items',
            link: '/dashboard/manageitems'
        },
        {
            icon: <HiUserGroup />,
            name: 'all users',
            link: '/dashboard/allusers'
        },
    ];


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className={`bg-[#F6F6F6] drawer-content flex flex-col ${haveUrlDashboard ? 'ps-6 pr-[50px]' : 'px-[150px]'} pt-[50px] pb-[130px] `}>

                {/* Page content here */}
                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>

            {/* sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" menu py-[50px] px-[35px] w-80 min-h-full bg-primary text-base-content">
                    {/* Sidebar content here */}
                    <Link to={'/dashboard'} className=' font-cinzel lg:mb-[60px]'>
                        <h4 className='text-[28px] uppercase font-extrabold'>Shop Name</h4>
                        <p className='text-lg uppercase tracking-[6px] font-bold'>Restaurant</p>
                    </Link>

                    {/* menu items */}
                    <div className='flex flex-col space-y-6'>
                        {menuItems.map((item, i) => <SidebarActiveLink
                            to={item?.link}
                            key={i}
                            end
                        >
                            <p className='text-[24px] flex items-center gap-3 uppercase font-bold font-cinzel'>{item?.icon} <span className='text-[16px]'>{item?.name}</span></p>

                        </SidebarActiveLink>)}
                    </div>

                    <hr className='my-[34px]' />
                    {/* common items for user and admin */}
                    <SideBarMenuCommon />

                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;