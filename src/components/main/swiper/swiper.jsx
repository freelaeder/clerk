import React, {useRef} from 'react';
import {Carousel} from "antd";
import {doctors} from "./data";
import {Link} from "react-router-dom";
import './swiper.css'

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards} from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const SwiperScreens = () => {
    // 控制carosel
    const carouselRef = useRef();
    return (
        <div className={'mt-20 px-4'}>
            <h2 className={'text-center my-6 px-4  text-3xl font-bold text-[#e5e3df]'}>Expert Veterinary Care You
                Can Trust</h2>
            <div className={'mx-auto relative  max-w-[754px] lg:bg-[#377658] '}>
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
                                    <Link to={`/doctors/${item.link}`}>
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
                            <SwiperSlide key={Math.random()} className="rounded-sm">
                                <img src={doctor.image} alt="doctor" className="doctor"/>
                                <Link to={`doctors/${doctor.link}`} className="lg:hidden">
                                    <div
                                        className="absolute bottom-4 rounded-md right-0 left-1/2 -ml-[40%] h-16 w-[80%] border-2 border-secGreen bg-bgGreen opacity-70 ">
                                        <div className="flex h-full flex-col items-center justify-center">
                                            <div className="name font-medium">{doctor.name}</div>
                                            <p className="underline font-light">Learn More</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center ml:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 200"
                            fill="none"
                            stroke="#828972"
                            className="h-20 w-20 stroke-2"
                        >
                            <path
                                className="hand-x"
                                d="M139.93,113.56l-41.12-6.93V76.08a9.25,9.25,0,0,0-9.25-9.25h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,122.65c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,113.56Z"
                            />
                            <g className="swipe-horizontal">
                                <path
                                    className="line-horizontal"
                                    d="M70.85,42c19.69-12.46,37,0,37,0"
                                    fill="none"
                                />
                                <polyline
                                    className="arrow-left"
                                    points="76.6 46.01 68.37 43.43 68.38 43.41 70.96 35.18"
                                />
                                <polyline
                                    className="arrow-right"
                                    points="100.21 44.66 108.43 42.08 108.43 42.06 105.85 33.84"
                                />
                            </g>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SwiperScreens;