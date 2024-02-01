import React, { useEffect, useState } from 'react';
import { GiWallet } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import chef from "../../assets/dashboard/chef 1.svg"

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import useCategories from '../../Hooks/useCategories';
import { RiCheckboxBlankFill } from "react-icons/ri";


const AdminDash = () => {
    const [categories] = useCategories();

    // for chart start
    const colors = ['#057ead', 'orange', 'green', '#c30202'];
    const getRandomColor = () => {
        // Generate a random color in hexadecimal format
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0);
        return randomColor;
    };



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // for chart end

    return (
        <div>
            <h1 className='font-cinzel text-[32px] mb-6'>Hi, Welcome Back!</h1>

            {/* history */}
            <div className='flex flex-wrap xl:flex-nowrap justify-evenly gap-[25px]'>
                <div
                    className='w-[290px] py-[35px] text-white rounded-lg flex gap-6 items-center justify-center '
                    style={{ backgroundImage: 'linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)' }}
                >
                    <GiWallet size={50} />
                    <div>
                        <p className='text-[40px] font-extrabold'>1000</p>
                        <p className='text-[24px]'>Revenue</p>
                    </div>
                </div>

                <div
                    className='w-[290px] py-[35px] text-white rounded-lg flex gap-6 items-center justify-center '
                    style={{ backgroundImage: 'linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)' }}
                >
                    <HiUserGroup size={50} />
                    <div>
                        <p className='text-[40px] font-extrabold'>1500</p>
                        <p className='text-[24px]'>Customers</p>
                    </div>
                </div>

                <div
                    className='w-[290px] py-[35px] text-white rounded-lg flex gap-6 items-center justify-center '
                    style={{ backgroundImage: 'linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)' }}
                >
                    <img src={chef} alt='chef' />
                    <div>
                        <p className='text-[40px] font-extrabold'>1000</p>
                        <p className='text-[24px]'>Products</p>
                    </div>
                </div>

                <div
                    className='w-[290px] py-[35px] text-white rounded-lg flex gap-6 items-center justify-center '
                    style={{ backgroundImage: 'linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)' }}
                >
                    <img src={chef} alt='chef' />
                    <div>
                        <p className='text-[40px] font-extrabold'>1000</p>
                        <p className='text-[24px]'>Products</p>
                    </div>
                </div>
            </div>

            {/* graph */}
            <div className='bg-white'>
                {/* left chart */}
                <div className='mt-8 pb-[50px]'>
                    <BarChart
                        width={500}
                        height={300}
                        data={categories}
                        margin={{
                            top: 30,
                            right: 30,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='category' className='capitalize text-[9px]' />
                        <YAxis />
                        <Bar dataKey="totalItems" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {categories.map((entry, index) => (
                                // <Cell key={`cell-${index}`} fill={colors[index % 100]} />
                                <Cell key={`cell-${index}`} fill={getRandomColor()} />
                            ))}
                        </Bar>
                    </BarChart>
                    <p className='flex justify-center items-center gap-2 text-[#ad7af6] w-[500px]'>
                        <RiCheckboxBlankFill />
                        sold
                    </p>
                </div>


                {/* right chart */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default AdminDash;