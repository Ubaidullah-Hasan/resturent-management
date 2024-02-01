import React, { useContext, useState } from 'react';
import './navbar.css'
import cart from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { Link } from 'react-router-dom';
import UseScreenWidth from '../../../Hooks/UseScreenWidth';
import ActiveLink from '../../../Hooks/ActiveLink/ActiveLink';
import { IoMdClose, IoMdMenu } from "react-icons/io";
import useCategories from '../../../Hooks/useCategories';
import { AuthContext } from '../../../Providers/AuthProviders';
import useCart from '../../../Hooks/useCart';

const Navbar = () => {
    const [carts] = useCart();
    const { user, logOut } = useContext(AuthContext);
    const profileImg = user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

    const [categories] = useCategories();
    const firstCategory = categories[0]?.category;

    const { screenWidth } = UseScreenWidth();
    const breakPoint = 1024; // tab, mobile < 1024
    const [isHeader, setIsHeader] = useState(false);

    const handleHeader = () => {
        setIsHeader(!isHeader);
    }

    const handleLogOut = () => {
        logOut()
            .then(succ => {

            })
            .catch(err => {
                console.log(err.message)
            })
    }


    const menuItems = [
        <li className='text-[16px] lg:text-[20px] font-medium md:font-extrabold uppercase text-white' key="home"><ActiveLink to={'/'}>Home</ActiveLink></li>,
        <li className='text-[16px] lg:text-[20px] font-medium md:font-extrabold uppercase text-white' key="contact"><ActiveLink to={'/contactus'}>CONTACT us</ActiveLink></li>,
        <li className='text-[16px] lg:text-[20px] font-medium md:font-extrabold uppercase text-white' key="dashboard"><ActiveLink to={'/dashboard'}>DASHBOARD</ActiveLink></li>,
        <li className='text-[16px] lg:text-[20px] font-medium md:font-extrabold uppercase text-white' key="menu"><ActiveLink to={'/menu'}>Our Menu</ActiveLink></li>,
        <li className='text-[16px] lg:text-[20px] font-medium md:font-extrabold uppercase text-white' key="shop"><ActiveLink to={`/shop/${firstCategory}`}>Our Shop</ActiveLink></li>,

        // conditional menu for different screens
        screenWidth < breakPoint ?
            // for tab and mobile devices
            <React.Fragment key={1}>
                {
                    user ?
                        <li onClick={handleLogOut} className='text-[16px] lg:text-[20px] font-medium md:font-extrabold uppercase text-white cursor-pointer' key="/logout">Logout</li>
                        :
                        <li className='text-[16px] lg:text-[20px] font-medium md:font-extrabold uppercase text-white' key="/login"><ActiveLink to={'/login'}>login</ActiveLink></li>
                }
                <div className='flex gap-3'>
                    <div className="dropdown dropdown-end " key={"cart"}>
                        <div className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <img src={cart} alt="cart" />
                                <span className="badge badge-sm indicator-item left-[16px] top-[29px] bg-red-600 text-white rounded-full h-5 w-5">{carts.length}</span>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end" key={"profile"}>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={profileImg} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
            :
            <React.Fragment key={1}>
                <div className="dropdown dropdown-end" key={"cart"}>
                    <Link to={'/'}>
                        <div className="btn btn-ghost btn-circle hover:bg-transparent">
                            <div className="indicator">
                                <img src={cart} alt="cart" />
                                <span className="badge badge-sm indicator-item left-[16px] top-[29px] bg-red-600 text-white rounded-full h-5 w-5">{carts.length}</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {
                    user ?
                        <li onClick={handleLogOut} className='text-[16px] lg:text-[20px] font-medium md:font-extrabold uppercase text-white cursor-pointer' key="/logout">Logout</li>
                        :
                        <li className='text-[16px] lg:text-[20px] font-medium md:font-extrabold uppercase text-white' key="/login"><ActiveLink to={'/login'}>login</ActiveLink></li>
                }

                <div className="dropdown dropdown-end" key={"profile"}>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-9 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={profileImg} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <ActiveLink className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </ActiveLink>
                        </li>
                        <li><ActiveLink>Settings</ActiveLink></li>
                    </ul>
                </div>
            </React.Fragment>

    ];



    return (
        <header className='bg-[#212129]/30 fixed z-30 w-full'>
            {
                isHeader ?
                    <IoMdClose onClick={handleHeader} size={35} color='white' className='absolute z-20 top-[6px] md:top-4 right-3 lg:hidden p-1 border rounded' />
                    :
                    <IoMdMenu onClick={handleHeader} size={35} color='white' className='absolute z-20 top-[6px] md:top-4 right-3 lg:hidden p-1 border rounded' />
            }

            <div className={`bg-[#212129] lg:bg-[#212129]/0 border-b-2 border-white/50 navbar py-4 md:py-5 lg:py-[24px] xl:px-[55px] flex-col xl:flex-row items-center lg:items-center justify-between gap-6 lg:gap-2 duration-500 absolute lg:static z-10  ${isHeader ? '' : 'translate-y-[-388px] lg:translate-y-0'}`}>
                <div>
                    <Link className="text-white logo font-black text-[22px] lg:text-[28px] leading-7">BISTRO BOSS <br /> <span className='tracking-[5px] lg:tracking-[9.12px] uppercase font-bold text-[16px] lg:text-[20px]'>Restaurant</span></Link>
                </div>
                <ul className="flex-none gap-2 lg:gap-5 flex-col lg:flex-row items-center lg:items-center ">
                    {menuItems}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;


