import React, { useContext, useState } from 'react';
import loginImg from '../../assets/login/login.jpg'
import loginBG from '../../assets/login/loginBg.jpg'
import { FaCircleUser } from "react-icons/fa6";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import LoginForm from './LoginForm';
import { useLocation, useNavigate } from 'react-router-dom';
import Register from './Register';
import Forgot from './Forgot';



const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromURL = location?.state?.from || '/';
    const urlDevide = location.pathname.split('/');
    const lastPathName = urlDevide[urlDevide.length - 1];
    const [toggle, setToggle] = useState(JSON.parse(localStorage.getItem('authToggle')) || 1);
    const [isPassword, setIsPassword] = useState(true);

    if (lastPathName === 'login') {
        localStorage.setItem('authToggle', JSON.stringify(1));
    } else if (lastPathName === 'register') {
        localStorage.setItem('authToggle', JSON.stringify(2));
    } else if (lastPathName === 'forgot') {
        localStorage.setItem('authToggle', JSON.stringify(3));
    }

    const handleLogin = () => {
        setToggle(1);
        const state = { from: fromURL };
        navigate('/login', { state });
    }
    const handleRegister = () => {
        setToggle(2);
        const state = { from: fromURL };
        navigate('/register', { state });
    }
    const handleForgot = () => {
        setToggle(3);
        const state = { from: fromURL };
        navigate('/forgot', { state });
    }

    return (
        <div className='flex items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: `linear-gradient(to bottom, #2aec489c, #d1a05487), url("${loginBG}")` }}>
            <div className="min-h-[406px] bg-red-500 flex " >
                {/* First div with Image */}
                <div className="w-[250px]">
                    <img src={loginImg} alt="Resturent app login" className="object-cover w-full h-full" />
                </div>

                {/* Second div with login, register, and forgot password icons */}
                <div className="flex flex-col justify-between w-[250px] border-r-2 border-gray-100	">
                    <div onClick={() => handleLogin()} className={`flex flex-col items-center justify-center gap-2 capitalize grow px-[40px] cursor-pointer duration-500 ${toggle === 1 ? 'bg-green-600 text-white' : "bg-white"}`}>
                        <FaCircleUser size={24} />
                        <span>Login</span>
                    </div>
                    <div onClick={() => handleRegister()} className={`flex flex-col items-center justify-center gap-2 capitalize grow px-[40px] cursor-pointer duration-500 ${toggle === 2 ? 'bg-green-600 text-white' : "bg-white"}`}>
                        {/* Adjust the path and size as needed */}
                        <BiSolidMessageSquareEdit size={24} />
                        <span>Register</span>
                    </div>
                    <div onClick={() => handleForgot()} className={`flex flex-col items-center justify-center gap-2 capitalize grow px-[40px] cursor-pointer duration-500 ${toggle === 3 ? 'bg-green-600 text-white' : "bg-white"}`}>
                        {/* Adjust the path and size as needed */}
                        <FaLock size={24} />
                        <span>Forgot Password</span>
                    </div>
                </div>

                {/* Third div for login, register, and forgot form */}
                <div className="bg-white p-8 w-[600px] text-center">
                    {/* for login */}
                    <div className={toggle === 1 ? "block" : "hidden"}>
                        <LoginForm
                            isPassword={isPassword}
                            setIsPassword={setIsPassword}
                            setToggle={setToggle}
                            fromURL={fromURL}
                        />
                    </div>

                    {/* todo: for register */}
                    <div className={toggle === 2 ? "block" : "hidden"}>
                        <Register
                            isPassword={isPassword}
                            setIsPassword={setIsPassword}
                            setToggle={setToggle}
                            fromURL={fromURL}
                        />
                    </div>

                    {/* todo: for forgot */}
                    <div className={toggle === 3 ? "block" : "hidden"}>
                        <Forgot />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;