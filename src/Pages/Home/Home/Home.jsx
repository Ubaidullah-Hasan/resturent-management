import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChenRecomments/ChefRecommends';
import Featured from '../Featured/Featured';
import Testemonial from '../Testemonial/Testemonial';
import About from '../About/About';
import PageTitle from '../../../Components/PageTitle';


const Home = () => {
    return (
        <div>
            <PageTitle
                title={"Home"}
                metaContent={"Resturent ................"}
            />

            <Banner></Banner>
            <Category></Category>
            <About />
            <PopularMenu></PopularMenu>
            <CallUs />
            <ChefRecommends />
            <Featured />
            <Testemonial />
        </div>

    );
};

export default Home;