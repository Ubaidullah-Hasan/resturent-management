import React from 'react';
import PageTitle from '../../../Components/PageTitle';
import Cover from '../../Shared/Cover/Cover';
import PageCover from '../../../assets/menu/banner3.jpg'


const Menu = () => {
    return (
        <div>
            <PageTitle
                title={"Menu"}
            />
            <Cover
                img={PageCover}
                pageCover={true}
                title='OUR MENU'
                desc='Would you like to try a dish?'
            />
        </div>
    );
};

export default Menu;