import React from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import foodImg from '../../../assets/home/slide5.jpg' // todo: remove img
import FoodBox from '../../Shared/FoodBox/FoodBox';


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


    return (
        <section className='section-w section-mb-130'>
            <SectionHeader
                title={"CHEF RECOMMENDS"}
                subHeading={"Should Try"}
            />
            <FoodBox
                data={chefRecommends.slice(0, 3)}
            />
        </section>
    );
};

export default ChefRecommends;