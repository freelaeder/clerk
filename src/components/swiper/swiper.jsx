import React, {useRef} from 'react';
import {Carousel} from "antd";
import {doctors} from "./data";
import {Link} from "react-router-dom";
import './swiper.css'

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards} from "swiper";
import "swiper/css/effect-cards";
import "swiper/css";

const SwiperScreens = () => {
    // 控制carosel
    const carouselRef = useRef();
    return (
        <div className={'mx-auto relative  max-w-[754px] bg-[#377658] '}>
            {/*lg max 1024 */}
            <div className={' h-[500px] hidden  lg:block '}>
                <Carousel ref={carouselRef} autoplaySpeed={2000} autoplay={true} effect="fade">
                    {
                        doctors.map(item => (
                            <div key={item.id} className={'flex   h-[500px] w-[375px] justify-start float-left '}>
                                {/*left*/}
                                <div className={'w-[375px] h-[500px] float-left'}>
                                    <img className={'w-[375px] h-[500px] rounded-1-sm'}
                                         src={item.image} alt=""/>
                                </div>
                                {/*    right*/}
                                <div className={'flex w-[375px] flex-col items-center justify-start px-6 py-10'}>
                                    <p className={'text-2xl font-bold text-white'}>{item.name}</p>
                                    <div className="my-2 h-[3px] w-36 rounded-sm bg-secGreen"></div>
                                    <p className={'text-white  text-xl'}>
                                        Experience: <span className={'font-bold'}>8</span> yrs
                                    </p>
                                    <p className={'text-center mt-5 text-white tracking-wide'}>
                                        {item.desc}
                                        <span>
                                    <Link to={`/doctors/${item.name}`}>
                                        <button className={'underline'}>see full info</button>
                                    </Link>
                                </span>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
                <div className={'absolute bottom-6 text-white flex items-center -mr-[85.5px] right-1/4  gap-5'}>
                    <button onClick={() => carouselRef.current.prev()} className={'h-16 w-16 text-5xl'}>❰</button>
                    <div className={'h-20 w-[3px] rounded-sm bg-secGreen'}></div>
                    <button onClick={() => carouselRef.current.next()} className={'h-16 w-16 text-5xl'}>❱</button>
                </div>
            </div>
            {/*  min lo14   */}

            <div className={'lg:hidden'}>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="sm:max-w-4/6 w-full px-10 xsm:px-16 sm:w-4/6 md:max-w-[450px] md:px-16 ml:hidden"
                >
                    {doctors.map((doctor) => (
                        <div className="relative">
                            <SwiperSlide key={Math.random()} className="rounded-sm">
                                <img src={doctor.image} alt="doctor" className="doctor"/>
                                <Link to={`doctors/${doctor.link}`} className="lg:hidden">
                                    <div
                                        className="absolute bottom-4 right-0 left-1/2 -ml-[40%] h-16 w-[80%] border-2 border-secGreen bg-bgGreen opacity-70 ">
                                        <div className="flex h-full flex-col items-center justify-center">
                                            <div className="name font-bold">{doctor.name}</div>
                                            <p className="underline">Learn More</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default SwiperScreens;