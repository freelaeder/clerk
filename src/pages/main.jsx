import React from 'react';
import SwiperScreens from "../components/main/swiper/swiper";
import SomeServices from "../components/main/some_services";
import Hero from "../components/main/hero";

const Main = () => {
    return (
        <>
            {/*hero*/}
            <Hero />
            {/*    swiper*/}
            <SwiperScreens/>
            {/*   services */}
            <SomeServices/>
        </>

    );
};

export default Main;