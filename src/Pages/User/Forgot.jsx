import React, { useContext, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { IoSettings } from "react-icons/io5";
import forgetImg from '../../assets/login/resetPass.png'
import './forgot.css';
import { AuthContext } from '../../Providers/AuthProviders';
import PageTitle from '../../Components/PageTitle';

const Forgot = () => {
    const { resetPassword } = useContext(AuthContext);
    const [isError, setIsError] = useState('');
    const [isSuccess, setIsSuccess] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        resetPassword(email)
            .then(res => {
                setIsSuccess('Check email for password reset!');
                setIsError(false);
            }).catch(err => {
                setIsError("Email is not valid!");
            })
    };

    return (
        <div>
            <PageTitle
                title='forgot'
            />
            <img src={forgetImg} className='w-14 mx-auto mb-4' alt="Forget Image" />
            <h2 className="text-2xl font-cinzel font-extrabold uppercase mb-2">
                Forgot Password
            </h2>
            <p className='mb-8 text-gray-500 w-[70%] mx-auto'>Enter your email and we'll send you a link to reset your password</p>
            <form onSubmit={handleForm}>
                <div className="mb-4 flex items-center border rounded-md p-2">
                    <HiOutlineMail className="mr-2" />
                    <input name='email' type="email" required placeholder="Email" className="flex-1 outline-none" />
                </div>

                {isError && <p className='text-red-500 mb-4'>{isError}</p>}

                {isSuccess && <p className='text-green-500 mb-4'>{isSuccess}</p>}

                <button type="submit" className="forgot mb-4 duration-300 bg-green-600 hover:bg-green-700 text-white p-2 rounded-md flex items-center justify-center w-full font-bold">
                    <IoSettings className="mr-2 icon" />
                    Forgot Password
                </button>
            </form>
        </div>
    );
};

export default Forgot;