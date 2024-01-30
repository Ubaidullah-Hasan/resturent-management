import React from 'react';
import { GiWallet } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import chef from "../../assets/dashboard/chef 1.svg"

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';



const Admin = () => {
    const colors = ['#057ead', 'orange', 'green', '#c30202'];
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
    ];

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

    return (
        <div>
            <h1 className='font-cinzel text-[32px] mb-6'>Hi, Welcome Back!</h1>

            {/* history */}
            <div className='flex gap-[25px]'>
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
                <div className='mt-8'>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 30,
                            right: 30,
                            left: 20,
                            bottom: 50,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>


                {/* right chart */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default Admin;