import React from 'react';
import loginImg from '../../assets/login/login.jpg'
import loginBG from '../../assets/login/loginBg.jpg'
import { RiLoginCircleLine } from 'react-icons/ri'; // Using React Icons for login button
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { FaCircleUser, FaRegFaceRollingEyes } from "react-icons/fa6";
import { PiSmileyXEyes } from "react-icons/pi";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { FaFacebookF, FaLock, FaGoogle } from "react-icons/fa";








const Login = () => {
    return (
        <div className='flex items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: `linear-gradient(to bottom, #2aec489c, #d1a05487), url("${loginBG}")` }}>
            <div className=" bg-red-500 flex " >
                {/* First div with Image */}
                <div className="w-[250px]">
                    <img src={loginImg} alt="Resturent app login" className="object-cover w-full h-full" />
                </div>

                {/* Second div with login, register, and forgot password icons */}
                <div className="flex flex-col justify-between w-[250px] border-r-2 border-gray-100	">
                    <div className="flex flex-col items-center justify-center gap-2 capitalize grow px-[40px] bg-white ">
                        <FaCircleUser size={24} />
                        <span>Login</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 capitalize grow px-[40px] bg-green-600 text-white">
                        {/* Adjust the path and size as needed */}
                        <BiSolidMessageSquareEdit size={24} />
                        <span>Register</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 capitalize grow px-[40px] bg-white">
                        {/* Adjust the path and size as needed */}
                        <FaLock size={24} />
                        <span>Forgot Password</span>
                    </div>
                </div>

                {/* Third div with login form */}
                <div className="bg-white p-8 w-[600px] text-center">
                    <h2 className="text-2xl font-cinzel font-extrabold uppercase mb-4">
                        Welcome Back
                    </h2>
                    <form>
                        <div className="mb-4 flex items-center border rounded-md p-2">
                            <HiOutlineMail className="mr-2" />
                            <input type="email" placeholder="Email" className="flex-1 outline-none" />
                        </div>

                        <div className="mb-4 flex items-center border rounded-md p-2">
                            <IoKeyOutline className="mr-2" />
                            <input type="password" placeholder="Password" className="flex-1 outline-none" />
                            <FaRegFaceRollingEyes className="mx-2" />
                            <PiSmileyXEyes size={20} />
                        </div>

                        <div className='mb-4 flex gap-5 justify-between divide-x'>
                            <div className='w-1/2 text-start'>
                                <input className='mr-3 cursor-pointer accent-green-600' type="checkbox" id="rememberMe" />
                                <label className='cursor-pointer' htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <p className='cursor-pointer w-1/2 text-end'>Forgot Password?</p>
                        </div>

                        <button type="submit" className="mb-4 duration-300 bg-green-600 hover:bg-green-700 text-white p-2 rounded-md flex items-center justify-center w-full font-bold">
                            <RiLoginCircleLine className="mr-2" />
                            Login
                        </button>
                    </form>

                    {/* or devider */}
                    <div className='mb-4 flex items-center justify-center gap-4'>
                        <hr className='border border-gray-200 border-dashed	 w-full '/>
                        <p className='uppercase'>or</p>
                        <hr className='border border-gray-200 border-dashed	 w-full '/>
                    </div>

                    {/* google and facebook login */}
                    <div className='flex justify-between gap-8'>
                        <button className='duration-300 grow py-3 rounded-md border border-[#EA4335] hover:bg-[#EA4335] text-[#EA4335] hover:text-white flex items-center justify-center'>
                            <FaGoogle />
                        </button>
                        <button className='duration-300 grow py-3 rounded-md border border-[#316FF6] hover:bg-[#316FF6] text-[#316FF6] hover:text-white flex items-center justify-center'>
                            <FaFacebookF />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;