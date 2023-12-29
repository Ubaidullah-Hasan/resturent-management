import React from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import foodImg from '../../../assets/home/slide5.jpg' // todo: remove img
import { FaPersonWalkingArrowRight } from "react-icons/fa6";


const ChefRecommends = () => {
    // todo: fetch data
    const chefRecommends = [
        {
            _id: "1",
            recipeName: "Grilled Lobster Tails",
            desc: "Fresh lobster tails seasoned and grilled to perfection, served with garlic butter.",
            foodImg: foodImg,
            price: 29.99,
            rating: 4.9
        },
        {
            _id: "2",
            recipeName: "Truffle Risotto",
            desc: "Creamy risotto cooked with truffle oil, mushrooms, and Parmesan cheese.",
            foodImg: foodImg,
            price: 22.49,
            rating: 4.8
        },
        {
            _id: "3",
            recipeName: "Roast Duck Breast",
            desc: "Tender duck breast roasted to perfection, served with a berry sauce.",
            foodImg: foodImg,
            price: 26.99,
            rating: 4.7
        },
        {
            _id: "4",
            recipeName: "Tiramisu",
            desc: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
            foodImg: foodImg,
            price: 15.99,
            rating: 4.9
        },
        {
            _id: "5",
            recipeName: "Spicy Seafood Pasta",
            desc: "Spaghetti pasta with a spicy tomato sauce, mixed seafood, and fresh herbs.",
            foodImg: foodImg,
            price: 19.99,
            rating: 4.6
        },
        {
            _id: "6",
            recipeName: "Creme Brulee",
            desc: "Creamy vanilla custard topped with a caramelized sugar crust.",
            foodImg: foodImg,
            price: 14.49,
            rating: 4.8
        }
    ];

    // todo: write code
    const handleCart = () => {

    }

    return (
        <section className='section-w section-mb-130'>
            <SectionHeader
                title={"CHEF RECOMMENDS"}
                subHeading={"Should Try"}
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6'>
                {chefRecommends.slice(0, 3).map((item, index) => (
                    <div key={item?._id} className='h-[555px] w-full xl:w-[424px] bg-[#F3F3F3]'>
                        <img src={item?.foodImg} alt={item?.recipeName} className='w-full h-[300px] object-cover' />
                        <div className='py-[30px] px-[20px] md:py-8 md:px-[40px] text-center '>
                            <h2 className='text-[24px] font-semibold text-[#151515] capitalize mb-3'>{item?.recipeName}</h2>
                            <p className='capitalize text-[#151515] mb-6'>
                                {item?.desc.length > 60 ? `${item?.desc.slice(0, 60)}...` : item?.desc}
                                {item?.desc.length > 60 && <FaPersonWalkingArrowRight className='inline ms-2 text-[#BB8506]' />}
                            </p>
                            <button onClick={handleCart} className={`shadow hover:shadow-lg text-[#BB8506] uppercase py-[15px] md:py-[20px] px-[22px]  md:px-[30px] text-[18px] md:text-[20px] font-medium rounded-lg border-b-[3px]  ${index === 1 ? 'bg-[#1F2937] border-[#1F2937]' : 'bg-[#E8E8E8] border-[#BB8506]'}`}>Add To cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChefRecommends;