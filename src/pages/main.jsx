import React from 'react';
import SwiperScreens from "../components/main/swiper/swiper";
import SomeServices from "../components/main/some_services";
import Hero from "../components/main/hero";
import Reviews from "../components/main/reviews";
import Footer from "../components/main/footer";
import Qna from "../components/main/qna/QNA";

const Main = () => {
    return (
        <>
            {/*hero*/}
            <Hero/>
            {/*    swiper*/}
            <SwiperScreens/>
            {/*   services */}
            <SomeServices/>
            {/*    qna*/}
            <Qna/>
            {/*    reviews*/}
            <Reviews/>
            {/*    footer*/}
            <Footer/>
        </>

    );
};

export default Main;