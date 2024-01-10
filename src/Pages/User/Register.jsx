import React, { useState, useContext } from 'react';
import { RiUserAddLine } from 'react-icons/ri';
import { HiOutlineMail } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegFaceRollingEyes } from 'react-icons/fa6';
import { PiSmileyXEyes } from 'react-icons/pi';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = ({ isPassword, setIsPassword, setToggle }) => {
    const { userRegister, updateUser } = useContext(AuthContext);
    const [error, setError] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        userRegister(email, password)
            .then(succ => {
                console.log(succ.user)
                updateUser(name, image)
                    .then(() => {console.log("User updated successfully")})
                    .catch((err) => {console.log(err)})
            }).catch(err => {
                console.error(err)
                setError(true);
            })
    }


    return (
        <div>
            <h2 className="text-2xl font-cinzel font-extrabold uppercase mb-4">
                Create an Account
            </h2>
            <form onSubmit={handleForm}>
                <div className="mb-4 flex items-center border rounded-md p-2">
                    <label htmlFor="img"><FaCamera className="mr-2" /></label>
                    <input name='image' type="file" accept="image/*" id='img' className="flex-1 outline-none " />
                    <label htmlFor="img" className='capitalize text-gray-400'>Click me to upload image</label>
                </div>

                <div className="mb-4 flex items-center border rounded-md p-2">
                    <RiUserAddLine className="mr-2" />
                    <input name='name' type="text" required placeholder="Name" className="flex-1 outline-none" />
                </div>

                <div className="mb-4 flex items-center border rounded-md p-2">
                    <HiOutlineMail className="mr-2" />
                    <input name='email' type="email" required placeholder="Email" className="flex-1 outline-none" />
                </div>

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

                <button type="submit" className="mb-4 duration-300 bg-green-600 hover:bg-green-700 text-white p-2 rounded-md flex items-center justify-center w-full font-bold">
                    <RiUserAddLine className="mr-2" />
                    Register
                </button>
            </form>

            <SocialLogin />

        </div>
    );
};

export default Register;