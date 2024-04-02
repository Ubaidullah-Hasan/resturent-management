import React, { useEffect, useState } from 'react';
import './ShopTab.css'
import FoodBox from '../../Shared/FoodBox/FoodBox';
import { Link, useLocation } from 'react-router-dom';
import useCategories from '../../../Hooks/useCategories';
import Pagination from '../../../Components/Pagination/Pagination';
import useCount from '../../../Hooks/useCount';

const ShopTab = () => {

    const [categories, categoryLoading] = useCategories();
    const [loading, setLoading] = useState(true);

    // select category name when button is clicked in menu page
    const location = useLocation();
    const locationSplit = location?.pathname?.split('/');
    let searchCategory = locationSplit[locationSplit?.length - 1];

    const [activeTab, setActiveTab] = useState(searchCategory);
    const [activeCategory, setActiveCategory] = useState([]);


    // VARIABLE FOR PAGINATION START
    const [categoryWiseItemsCount] = useCount(searchCategory);
    // console.log(categoryWiseItemsCount);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 3;
    const totalPages = Math.ceil(categoryWiseItemsCount / limit);
    const pageCount = Array.from({ length: totalPages }, (_, i) => i + 1);
    // VARIABLE FOR PAGINATION END


    useEffect(() => {
        fetch(`https://resturent-app-server.vercel.app/categories/${searchCategory}?limit=3&page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setActiveCategory(data);
                setLoading(false);
                setActiveTab(searchCategory);
            })

    }, [searchCategory, currentPage]);

    const handleLink = (category) => {
        setActiveTab(category);
        setCurrentPage(1);
        setLoading(true);
    }


    if (categoryLoading || loading) {
        return (
            <div className='h-[100vh] flex items-center justify-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }



    return (
        <div className='section-w'>
            <div role="tablist" className="flex flex-col md:flex-row gap-3 md:gap-[20px] lg:gap-[40px] justify-center">
                {
                    categories.map((item, index) => (
                        <Link
                            to={`/shop/${item?.category}`}
                            key={index}
                            role="tab"
                            className={`md:text-[18px] lg:text-[24px] font-bold uppercase text-[#151515] duration-300 cursor-pointer ${activeTab === item?.category ? 'active-tab' : ''}`}
                            onClick={() => handleLink(item)}
                        >
                            {item?.category}
                        </Link>
                    ))
                }
            </div>

            <div className='mt-[60px]  mb-[35px]'>
                <FoodBox
                    data={activeCategory}
                    tabSection={true}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>

            <div className='section-mb'>
                <Pagination
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    pages={pageCount}
                    setLoading={setLoading}
                />
            </div>

        </div>
    );
};

export default ShopTab;