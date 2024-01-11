import React, { useState, useContext } from 'react';
import { RiUserAddLine } from 'react-icons/ri';
import { HiOutlineMail } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegFaceRollingEyes } from 'react-icons/fa6';
import { PiSmileyXEyes } from 'react-icons/pi';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../Providers/AuthProviders';
import loadingGifImg from '../../assets/login/rocket.gif';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle';


const Register = ({ isPassword, setIsPassword }) => {
    const navigate = useNavigate();
    const { userRegister, updateUser } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [registerLoading, setRegisterLoading] = useState(false);
    const [regexError, setRegexError] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        setRegisterLoading(true);
        const form = e.target;
        const image = form.image.value; console.log(image)
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
        if(!passwordRegex.test(password)) {
            setRegexError('Password length must be 8 characters long, contains at least one digit, one lowercase letter, one uppercase letter and one special character!')
            setRegisterLoading(false)
            return;
        }
        setRegexError('');

        userRegister(email, password)
            .then(() => {
                setError(false);
                updateUser(name, image)
                    .then(() => {
                        setRegisterLoading(false);
                        setError(false);
                        navigate('/');
                    })
                    .catch((err) => {
                        setError(true)
                        setRegisterLoading(false);
                    })
            }).catch(err => {
                setError(true);
                setRegisterLoading(false);
            })
    }


    return (
        <div>
            <PageTitle
                title='Register'
            />
            <h2 className="text-2xl font-cinzel font-extrabold uppercase mb-4">
                Create an Account
            </h2>
            <form onSubmit={handleForm}>
                <div className="mb-4 flex items-center border rounded-md p-2">
                    <label htmlFor="img"><FaCamera className="mr-2" /></label>
                    <input name='image' type="file" accept="image/*" id='img' className="flex-1 outline-none hidden" />
                    <label htmlFor="img" className='capitalize text-gray-400'>Click me to upload image</label>
                </div>

                <div className="mb-4 flex items-center border rounded-md p-2">
                    <RiUserAddLine className="mr-2" />
                    <input name='name' type="text" required placeholder="Name" className="flex-1 outline-none" />
                </div>

                <div className={` flex items-center border rounded-md p-2  ${error ? 'border-red-500 mb-2' : 'mb-4'}`}>
                    <HiOutlineMail className="mr-2" />
                    <input name='email' type="email" required placeholder="Email" className={`flex-1 outline-none`} />
                </div>
                {error && <p className='mb-4 text-red-500 text-start'>Email already registered!</p>}

                <div className="mb-4 flex items-center border rounded-md p-2" >
                    <IoKeyOutline className="mr-2" />
                    <input name='password' type={isPassword ? "password" : "text"} required placeholder="Password" className="flex-1 outline-none" />
                    {
                        isPassword ?
                            <FaRegFaceRollingEyes onClick={() => setIsPassword(!isPassword)} className="ms-2 animate-bounce shadow-md" />
                            :
                            <PiSmileyXEyes onClick={() => setIsPassword(!isPassword)} className="ms-2 animate-bounce shadow-md" size={19} />
                    }
                </div>

                {
                    regexError && <p className='text-start text-red-500 mb-4'>{regexError}</p>
                }

                {
                    registerLoading ?
                        <img src={loadingGifImg} className='mb-4 mx-auto w-[80px] rotate-90' alt="Login Image " />
                        :
                        <button type="submit" className="mb-4 duration-300 bg-green-600 hover:bg-green-700 text-white p-2 rounded-md flex items-center justify-center w-full font-bold">
                            <RiUserAddLine className="mr-2" />
                            Register
                        </button>
                }
            </form>

            <SocialLogin />

        </div>
    );
};

export default Register;