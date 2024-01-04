import React, { useEffect, useState } from 'react';
import './ShopTab.css'
import FoodBox from '../../Shared/FoodBox/FoodBox';
import { Link, useLocation } from 'react-router-dom';
import useCategories from '../../../Hooks/useCategories';

const ShopTab = () => {

    const [categories, categoryLoading] = useCategories();
    const [loading, setLoading] = useState(true);
    // console.log(categories);

    // select category name when button is clicked in menu page
    const location = useLocation();
    // const locationSplit = location?.state?.to?.split('/');
    const locationSplit = location?.pathname?.split('/');
    let searchCategory = locationSplit[locationSplit?.length - 1];
    console.log(searchCategory, "category")


    const [activeTab, setActiveTab] = useState(searchCategory); 
    console.log(activeTab, "active tab")
    const [activeCategory, setActiveCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/categories/${searchCategory}`)
            .then(res => res.json())
            .then(data => {
                setActiveCategory(data);
                setLoading(false);
                setActiveTab(searchCategory);
            })

    }, [searchCategory]);

    console.log(activeCategory)

    if (categoryLoading || loading) {
        return (
            <div className='h-[100vh] flex items-center justify-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }



    return (
        <div className='section-w mb-5'>
            <div role="tablist" className="flex flex-col md:flex-row gap-3 md:gap-[20px] lg:gap-[40px] justify-center">
                {
                    categories.map((category, index) => (
                        <Link
                            to={`/shop/${category}`}
                            key={index}
                            role="tab"
                            className={`md:text-[18px] lg:text-[24px] font-bold uppercase text-[#151515] duration-300 cursor-pointer ${activeTab === category ? 'active-tab' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </Link>
                    ))
                }
            </div>

            <div className='mt-[60px]'>
                <FoodBox
                    data={activeCategory}
                    tabSection={true}
                />
            </div>

        </div>
    );
};

export default ShopTab;