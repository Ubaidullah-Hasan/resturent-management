import React, { useContext, useState } from 'react';
import { RiLoginCircleLine } from 'react-icons/ri'; // Using React Icons for login button
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { PiSmileyXEyes } from "react-icons/pi";
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import loadingGifImg from '../../assets/login/rocket.gif';
import PageTitle from '../../Components/PageTitle';


const LoginForm = ({ isPassword, setIsPassword, setToggle, fromURL }) => {

    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then(res => {
                navigate(fromURL);
                setIsLoading(false);
                setError(false);
                form.reset();
            }).catch(err => {
                setError(true);
                setIsLoading(false);
            })
    }

    return (
        <div>
            <PageTitle
                title={'Login'}
            />
            <h2 className="text-2xl font-cinzel font-extrabold uppercase mb-4">
                Welcome Back
            </h2>
            <form onSubmit={handleForm}>
                <div className="mb-4 flex items-center border rounded-md p-2">
                    <HiOutlineMail className="mr-2" />
                    <input required name='email' type="email" placeholder="Email" className="flex-1 outline-none" />
                </div>

                <div className="mb-4 flex items-center border rounded-md p-2">
                    <IoKeyOutline className="mr-2" />
                    <input required name='password' type={isPassword ? "password" : "text"} placeholder="Password" className="flex-1 outline-none" />
                    {
                        isPassword ?
                            <FaRegFaceRollingEyes onClick={() => setIsPassword(!isPassword)} className="ms-2 cursor-pointer animate-bounce shadow-md" />
                            :
                            <PiSmileyXEyes onClick={() => setIsPassword(!isPassword)} className="ms-2 cursor-pointer animate-bounce shadow-md" size={19} />
                    }
                </div>

                <div className='mb-4 flex gap-5 justify-between divide-x'>
                    {/* todo: after complete site then work with remember me */}
                    <div className='w-1/2 text-start'>
                        <input className='mr-3 cursor-pointer accent-green-600' type="checkbox" id="rememberMe" />
                        <label className='cursor-pointer' htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <p onClick={() => setToggle(3)} className='cursor-pointer w-1/2 text-end'>Forgot Password?</p>
                </div>

                {error && <p className='text-red-500 text-start mb-4'>Something went wrong again try!</p>}

                {
                    isLoading ?
                        <img src={loadingGifImg} className='mb-4 mx-auto w-[80px] rotate-90' alt="Login Image " />
                        :
                        <button type="submit" className="mb-4 duration-300 bg-green-600 hover:bg-green-700 text-white p-2 rounded-md flex items-center justify-center w-full font-bold">
                            <RiLoginCircleLine className="mr-2" />
                            Login
                        </button>
                }


            </form>

            <SocialLogin
                fromURL={fromURL}
            />
        </div>
    );
};

export default LoginForm;