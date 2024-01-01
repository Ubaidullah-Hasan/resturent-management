import React, { useEffect, useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import './ShopTab.css'
import FoodBox from '../../Shared/FoodBox/FoodBox';

const ShopTab = () => {
    const [menu, loading] = useMenu();
    // console.log(loading)


    const filteredData = menu.filter(item => item.category !== "offered");
    const uniqueCategories = [...new Set(filteredData.map(item => item.category))];
    const [activeTab, setActiveTab] = useState(uniqueCategories[0] || 'salad');
    const [activeCategory, setActiveCategory] = useState([]);

    useEffect(() => {
        const data = menu.filter(item => item.category === activeTab);
        setActiveCategory(data);
    }, [activeTab, menu]);

    console.log(activeCategory);

    if (loading) {
        return (
            <div className='mb-5 h-[50px] flex items-center justify-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
    


    return (
        <div className='section-w mb-5'>
            <div role="tablist" className="flex flex-col md:flex-row gap-3 md:gap-[20px] lg:gap-[40px] justify-center">
                {
                    uniqueCategories.map((category, index) => (
                        <a
                            key={index}
                            role="tab"
                            className={`md:text-[18px] lg:text-[24px] font-bold uppercase text-[#151515] duration-300 cursor-pointer ${activeTab === category ? 'active-tab' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </a>
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