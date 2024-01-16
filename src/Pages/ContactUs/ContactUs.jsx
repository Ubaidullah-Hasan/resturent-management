import React from 'react';
import Cover from '../Shared/Cover/Cover';
import contactImg from '../../assets/contact/banner.jpg';
import SectionHeader from '../../Components/SectionHeader';
import PageTitle from '../../Components/PageTitle';
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import ContactForm from './ContactForm';


const ContactUs = () => {

    // location static data 
    const locationData = [
        {
            icon: <FaPhoneVolume size={32} color='white' />,
            title: 'PHONE',
            line1: '+38 (012) 34 56 789'
        },
        {
            icon: <FaLocationDot size={32} color='white' />,
            title: 'ADDRESS',
            line1: '123 ABS Street,',
            line2: 'Uni 21, Bangladesh'
        },
        {
            icon: <MdWatchLater size={32} color='white' />,
            title: 'WORKING HOURS',
            line1: 'Mon - Fri: 08:00 - 22:00',
            line2: 'Sat - Sun: 10:00 - 23:00',
        }
    ];

    return (
        <div>
            <PageTitle
                title='Contact Us'
            />

            <Cover
                title='CONTACT US'
                pageCover={true}
                img={contactImg}
                desc='Would you like to try a dish?'
                className='section-mb-130'
            />

            <div className='section-w'>
                <SectionHeader
                    title={"OUR LOCATION"}
                    subHeading={"Visit Us"}
                />

                {/* location section start */}
                <div className='flex flex-col md:flex-row gap-2 lg:gap-6 justify-between items-start section-mb-130'>
                    {
                        locationData.map((data, i) =>
                            <div key={i} className='w-full lg:w-[424px]  border' >
                                <div className='bg-[#D1A054] py-4 lg:py-6 flex justify-center'>{data?.icon}</div>

                                <div className='px-[10px] lg:px-[30px] pb-[10px] lg:pb-[30px]'>
                                    <div className='bg-[#F3F3F3] p-4 text-center h-[190px] flex flex-col items-center justify-center'>
                                        <h4 className='font-medium text-[24px] mb-4'>{data?.title}</h4>
                                        <p>{data?.line1}</p>
                                        <p>{data?.line2}</p>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                {/* location section end */}

                <SectionHeader
                    title={"CONTACT FORM"}
                    subHeading={"Send Us a Message"}
                />

                <ContactForm />

            </div>
        </div>
    );
};

export default ContactUs;