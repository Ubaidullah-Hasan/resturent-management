import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className="footer gap-0 md:grid-cols-2">
                <aside className='md:col-span-1 w-full py-[60px] md:py-[97px] lg:pe-[156px] bg-[hsl(215,28%,17%)] place-items-center lg:place-items-start'>
                    <div className='text-center lg:ms-auto '>
                        <h3 className='text-[32px] font-[500] text-white w-full mb-6'>CONTACT US</h3>
                        <p className='text-[16px] font-[500] text-white leading-9 w-full'>
                            123 ABS Street, Uni 21, Bangladesh <br />
                            +88 123456789 <br />
                            Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00
                        </p>
                    </div>
                </aside>
                <aside className='md:col-span-1 min-w-full py-[60px] md:py-[97px] lg:ps-[156px] bg-[#111827] h-full place-items-center lg:place-items-start'>
                    <div className='text-center lg:me-auto'>
                        <h3 className='text-[32px] font-[500] text-white w-full mb-6'>Follow US</h3>
                        <p className='text-[16px] font-[500] text-white leading-9 w-full'>
                            Join us on social media
                        </p>
                        <nav className='flex justify-center gap-8 mt-8'>
                            <Link><FaFacebookF size={30} color='white'/></Link>
                            <Link><FaInstagram size={30} color='white'/></Link>
                            <Link><FaTwitter size={30} color='white'/></Link>
                        </nav>
                    </div>
                </aside>
            </div>
            <div className="footer footer-center p-[17px] bg-[#151515] text-base-content">
                <aside>
                    <p className='text-lg text-white'>Copyright © CulinaryCloud. All rights reserved.</p>
                </aside>
            </div>
        </footer >
    );
};

export default Footer;