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

// todo: sweet alert doesnot work
// import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'



const Register = ({ isPassword, setIsPassword, fromURL }) => {
    const navigate = useNavigate();
    const { userRegister, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [registerLoading, setRegisterLoading] = useState(false);
    const [regexError, setRegexError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();
        setRegisterLoading(true);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setRegexError('Password length must be 8 characters long, contains at least one digit, one lowercase letter, one uppercase letter and one special character!')
            setRegisterLoading(false)
            return;
        }
        setRegexError('');


        const imageFile = form.image.files[0];
        if (imageFile) {
            const formData = new FormData();
            formData.append('key', import.meta.env.VITE_IMGBBAPIKEY);
            formData.append('image', imageFile);

            const response = await fetch('https://api.imgbb.com/1/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                const imageUrl = result.data.url;

                userRegister(email, password)
                    .then((succ) => {
                        updateUser(name, imageUrl)
                            .then(() => {
                                setRegisterLoading(false);
                                setError("");
                                navigate(fromURL);
                                form.reset();
                            })
                            .catch((err) => {
                                setError("Update user failed!");
                                setRegisterLoading(false);
                            })
                    }).catch(err => {
                        setError("Email already registered!");
                        setRegisterLoading(false);
                    })
            }
        } else {
            userRegister(email, password)
                .then(() => {
                    updateUser(name, image)
                        .then((succ) => {
                            setRegisterLoading(false);
                            setError('');
                            navigate(fromURL);
                            form.reset();
                        })
                        .catch((err) => {
                            setError('Update user failed! ');
                            setRegisterLoading(false);
                        })
                }).catch(err => {
                    setError("Email already registered!");
                    setRegisterLoading(false);
                })
        }
    }


    const [imgFileName, setImgFileName] = useState('');
    const handleProfile = (event) => {
        const fileName = event.target.files[0].name;
        setImgFileName(fileName);
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
                    <label htmlFor="img"><FaCamera className="mr-2 cursor-pointer" /></label>
                    <input onChange={handleProfile} name='image' type="file" accept="image/*" id='img' className="flex-1 outline-none hidden" />
                    <label htmlFor="img" className='capitalize text-gray-400 cursor-pointer'>{imgFileName || 'Click me to upload image'}</label>
                </div>

                <div className="mb-4 flex items-center border rounded-md p-2">
                    <RiUserAddLine className="mr-2" />
                    <input name='name' type="text" required placeholder="Name" className="flex-1 outline-none" />
                </div>

                <div className={` flex items-center border rounded-md p-2  ${error ? 'border-red-500 mb-2' : 'mb-4'}`}>
                    <HiOutlineMail className="mr-2" />
                    <input name='email' type="email" required placeholder="Email" className={`flex-1 outline-none`} />
                </div>
                {error && <p className='mb-4 text-red-500 text-start'>{error}</p>}

                <div className="mb-4 flex items-center border rounded-md p-2" >
                    <IoKeyOutline className="mr-2" />
                    <input name='password' type={isPassword ? "password" : "text"} required placeholder="Password" className="flex-1 outline-none" />
                    {
                        isPassword ?
                            <FaRegFaceRollingEyes onClick={() => setIsPassword(!isPassword)} className="ms-2 cursor-pointer bg-transparent animate-bounce shadow-md" />
                            :
                            <PiSmileyXEyes onClick={() => setIsPassword(!isPassword)} className="ms-2 cursor-pointer bg-transparent animate-bounce shadow-md" size={19} />
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

            <SocialLogin
                fromURL={fromURL}
            />

        </div>
    );
};

export default Register;