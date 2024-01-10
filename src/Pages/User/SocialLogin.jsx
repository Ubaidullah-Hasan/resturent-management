import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div>
            {/* or devider */}
            <div className='mb-4 flex items-center justify-between gap-4'>
                <hr className='border border-gray-200 border-dashed	 w-[35%] ' />
                <p className='uppercase '>or login with</p>
                <hr className='border border-gray-200 border-dashed	 w-[35%] ' />
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
    );
};

export default SocialLogin;