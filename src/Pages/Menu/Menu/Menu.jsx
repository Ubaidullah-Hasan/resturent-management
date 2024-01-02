import React from 'react';
import PageTitle from '../../../Components/PageTitle';
import Cover from '../../Shared/Cover/Cover';
import PageCover from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import SectionHeader from '../../../Components/SectionHeader';
import useMenu from '../../../Hooks/useMenu';
import MenuBox from '../../Shared/MenuBox/MenuBox';
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter((item) => item?.category === 'offered');
    const dessert = menu.filter((item) => item?.category === 'dessert');
    const pizza = menu.filter((item) => item?.category === 'pizza');
    const salad = menu.filter((item) => item?.category === 'salad');
    const soup = menu.filter((item) => item?.category === 'soup');


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
                className='section-mb-130'
            />
            <section className='section-w section-mb'>
                <SectionHeader title={"TODAY'S OFFER"} subHeading={"Don't miss"} />
                <MenuBox
                    data={offered}
                />
            </section>
            <>
                <Cover
                    img={dessertImg}
                    title='DESSERTS'
                    desc='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    className={'section-mb'}
                />
                <section className='section-w section-mb'>
                    <MenuBox
                        data={dessert}
                        toURL={`/shop/dessert`}
                    />
                </section>
            </>
            <>
                <Cover
                    img={pizzaImg}
                    title='PIZZA'
                    desc='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    className={'section-mb'}
                />
                <section className='section-w section-mb'>
                    <MenuBox
                        data={pizza}
                        toURL={`/shop/pizza`}
                    />
                </section>
            </>
            <>
                <Cover
                    img={saladImg}
                    title='SALADS'
                    desc='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    className={'section-mb'}
                />
                <section className='section-w section-mb'>
                    <MenuBox
                        data={salad}
                        toURL={`/shop/salad`}
                    />
                </section>
            </>
            <>
                <Cover
                    img={soupImg}
                    title='SOUPS'
                    desc='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    className={'section-mb'}
                />
                <section className='section-w section-mb'>
                    <MenuBox
                        data={soup}
                        toURL={`/shop/soup`}
                    />
                </section>
            </>

        </div>
    );
};

export default Menu;