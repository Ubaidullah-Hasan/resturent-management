import React from 'react';
import { useForm } from 'react-hook-form';
import { FaTelegramPlane } from "react-icons/fa";


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
    };


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 p-8 lg:p-[88px] section-mb-130"
        >
            {/* first row */}
            <div className='flex gap-6 mb-6'>
                <div className="w-full">
                    <label htmlFor="name" className="block text-xl font-bold text-gray-700 mb-4">
                        Name <span className={errors.name ? 'text-red-500' : ''}>*</span>
                    </label>
                    <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        id="name"
                        className={`w-full py-[26px] px-[36px] border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
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
                        className={`w-full py-[26px] px-[36px] border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                        placeholder="Enter your email"
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
                    className={`w-full py-[26px] px-[36px] border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                    placeholder="Phone Number"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-xl font-bold text-gray-700 mb-4">
                    Message <span className={errors.message ? 'text-red-500' : ''}>*</span>
                </label>
                <textarea
                    {...register('message', { required: 'Message is required' })}
                    id="message"
                    className={`w-full h-[200px] md:h-[300px] py-[26px] px-[36px] border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md border-none focus:outline-primary`}
                    placeholder="Your message here"
                    rows="4"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                className="w-fit mx-auto text-white font-bold  py-4 px-[22px]  focus:outline-none flex justify-center items-center gap-2"
                style={{ backgroundImage: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}
            >
                Send Message
                <FaTelegramPlane />
            </button>
        </form>
    );
};

export default ContactForm;