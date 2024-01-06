import React from 'react';
import PageTitle from '../../Components/PageTitle';
import Cover from '../Shared/Cover/Cover';
import shopCoverImg from '../../assets/shop/banner2.jpg'
import ShopTab from './ShopTab/ShopTab';

const Shop = () => {
    

    return (
        <div>
            <PageTitle
                title={'Shop'}
                metaContent={'Would you like to try a dish?'}
            />
            <Cover
                img={shopCoverImg}
                title='OUR SHOP'
                desc='Would you like to try a dish?'
                className={'section-mb-130'}
            />

            <ShopTab />
        </div>
    );
};

export default Shop;