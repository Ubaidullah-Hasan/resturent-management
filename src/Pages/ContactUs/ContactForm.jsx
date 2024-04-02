import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTelegramPlane } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import UseScreenWidth from '../../Hooks/UseScreenWidth';
import emailjs from '@emailjs/browser';
import { AuthContext } from '../../Providers/AuthProviders';



const ContactForm = () => {
    const { user } = useContext(AuthContext);
    const { screenWidth } = UseScreenWidth();
    const breakPoint = 600; // for mobile < 600
    const captchaRef = useRef(null); // for recaptcha tracking
    const formRef = useRef(null); // form tracking for emailjs 
    const [isHuman, setIsHuman] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm(); // from react form hook


    // from submission code
    const onSubmit = async (data) => {
        // console.log(data);


        // google recaptcha
        const recaptchaResponse = captchaRef.current.getValue();
        // console.log(recaptchaResponse);
        try {
            const response = await axios.post('http://localhost:3000/api/verify-recaptcha', {
                recaptchaResponse
            });
            setIsHuman(response.data.success)
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        captchaRef.current.reset();
        setIsHuman(false) // todo: remove this


        // email js code
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    // console.log(isHuman)

    const captchaChange = (value) => {
        // console.log(value);
        if (value) {
            setIsHuman(true);
        }
    }


    // recaptcha style
    const customRecaptchaStyle = {
        transform: 'scale(0.7)',
        WebkitTransform: 'scale(0.7)',
        transformOrigin: '0 0',
        WebkitTransformOrigin: '0 0'
    };


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 p-8 lg:p-[88px] section-mb-130"
            ref={formRef}
        >
            {/* first row */}
            <div className='flex flex-col md:flex-row gap-6 mb-6'>
                <div className="w-full">
                    <label htmlFor="name" className="block text-xl font-bold text-gray-700 mb-4">
                        Name <span className={errors.name ? 'text-red-500' : ''}>*</span>
                    </label>
                    <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        id="name"
                        className={`w-full py-[10px] md:py-[15px] lg:py-[26px] px-[15px] md:px-[20px] lg:px-[36px] border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="block text-xl font-bold text-gray-700 mb-4">
                        Email <span className={errors.email ? 'text-red-500' : ''}>*</span>
                    </label>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        type="email"
                        id="email"
                        className={`w-full py-[10px] md:py-[15px] lg:py-[26px] px-[15px] md:px-[20px] lg:px-[36px] border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                        placeholder="Enter your email"
                        defaultValue={user?.email}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
            </div>

            {/* second row */}
            <div className="mb-6">
                <label htmlFor="phone" className="block text-xl font-bold text-gray-700 mb-4">
                    Phone <span className={errors.phone ? 'text-red-500' : ''}>*</span>
                </label>
                <input
                    {...register('phone',
                        { required: 'Phone is required' }
                    )}
                    type="tel"
                    id="phone"
                    className={`w-full py-[10px] md:py-[15px] lg:py-[26px] px-[15px] md:px-[20px] lg:px-[36px] border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                    placeholder="Phone Number"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            {/* text area */}
            <div className="mb-6">
                <label htmlFor="message" className="block text-xl font-bold text-gray-700 mb-4">
                    Message <span className={errors.message ? 'text-red-500' : ''}>*</span>
                </label>
                <textarea
                    {...register('message', { required: 'Message is required' })}
                    id="message"
                    className={`w-full h-[120px]  md:h-[180px] lg:h-[300px] py-[10px] md:py-[15px] lg:py-[26px] px-[15px] md:px-[20px] lg:px-[36px] border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                    placeholder="Your message here"
                    rows="4"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                ref={captchaRef}
                style={screenWidth < breakPoint ? customRecaptchaStyle : {}}
                onChange={captchaChange}
            />

            <button
                type="submit"
                disabled={!isHuman}
                className={`w-fit mt-[40px] md:mt-[70px] lg:mt-[102px] mx-auto text-white font-bold  py-4 px-[22px]  focus:outline-none flex justify-center items-center gap-2 `}
                style={{ backgroundImage: isHuman ? 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' : 'linear-gradient(90deg, #a8793291 0%, #ae7620a8 100%)' }}
            >
                Send Message
                <FaTelegramPlane />
            </button>
        </form>
    );
};

export default ContactForm;