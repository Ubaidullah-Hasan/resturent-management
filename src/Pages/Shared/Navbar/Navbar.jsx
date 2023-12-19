import React from 'react';
import './navbar.css'
import cart from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menu = [
        <li><Link to={'/'}>Home</Link></li>,
        <li><Link to={'contactus'}>CONTACT us</Link></li>,
        <li><Link to={''}>DASHBOARD</Link></li>,
        <li><Link to={''}>Our Menu</Link></li>,
        <li><Link to={''}>Our Shop</Link></li>,
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <img src={cart} alt="cart" />
                    {/* todo: item number change */}
                    <span className="badge badge-sm indicator-item left-[16px] top-[29px] bg-red-600 text-white rounded-full h-5 w-5">8</span>
                </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    {/* todo: item & prise */}
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>,

        <li><Link to={''}>Logout</Link></li>,
        
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    {/* todo: change img */}
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
    ];


    return (
        <header>
            <div className="navbar lg:px-[55px] md:py-[24px]">
                <div className="flex-1">
                    <a className="text-white logo font-black text-[28px] leading-7">BISTRO BOSS <br /> <span className='tracking-[9.12px] uppercase font-bold text-[18px]'>Restaurant</span></a>
                </div>
                <ul className="flex-none gap-5">
                    {menu}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;