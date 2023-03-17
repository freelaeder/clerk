import React from 'react';
import bg from '../assets/hero/bg-main-top.png'
import {Link} from "react-router-dom";
import SwiperScreens from "../components/swiper/swiper";

const Main = () => {
    return (
        <>
            <div
                className={'relative -mt-12 flex h-[100vh] w-full flex-col items-center justify-end overflow-hidden px-4 pb-12 md:-mt-16 lg:-mt-20 lg:pb-5'}>
                {/*    背景图*/}
                <div
                    className={'absolute top-0 left-0 h-full overflow-hidden aspect-[16/13.6] sm:h-auto sm:overflow-visible'}>
                    <img className={'w-full h-auto opacity-[0.3] '} src={bg} alt=""/>
                </div>
                {/*    h1*/}
                <div className={'z-10 w-full max-w-[1280px] lg:flex lg:items-start lg:justify-between lg:gap-20'}>
                    <h1 className={'w-full text-[4rem] font-bold leading-[4.2rem] text-secGreen sm:text-[6rem] sm:leading-[5rem] md:text-[7rem] md:leading-[6rem] lg:flex lg:flex-col lg:items-start lg:justify-start lg:text-[9rem] lg:leading-[7.8rem]'}>
                        <div>
                            Q
                            <span className={'text-[#5cb8ff]'}>U</span>
                            <span className={'text-[#FFD500]'}>A</span>
                            LITY
                        </div>
                        <div className={'gap-64 my-4 lg:items-center lg:justify-between '}>
                            <div>VET</div>
                        </div>
                        <div className={'justify-between lg:flex lg:w-full lg:items-center'}>
                            <p>CARE</p>
                        </div>

                    </h1>
                    <div>
                        <h2 className="mt-4 text-[13px] text-secGreen">
                            <div className="md:w-5/6  lg:w-auto lg:text-right">At Our Clinic, Your Furry Friend Receives
                                the
                                Best Possible Care. Our Team of Skilled and Compassionate Veterinarians Utilizes the
                                Latest
                                Techniques and Technology to Ensure Your Pet's Health and Happiness. Whether Your Pet
                                Needs
                                a Routine Check-Up or Specialized Care, You Can Trust Us to be Your Partner in Your
                                Pet's
                                Wellness Journey.<br/> <br/> Book Your Appointment Now!
                            </div>
                        </h2>
                        <div className={'mt-8 justify-start z-10 flex lg:flex lg:justify-end '}>
                            <Link to={'/signup'}>
                                <button
                                    className={' button h-[45px] w-[125px] bg-bgGreen border-secGreen text-secGreen border '}> Book
                                    now
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>

            </div>
            {/*    swiper*/}
            <div className={'mt-20 px-4'}>
                <h2 className={'text-center my-6 px-4  text-3xl font-bold text-[#e5e3df]'}>Expert Veterinary Care You Can Trust</h2>
                <SwiperScreens />
            </div>
        {/*   services */}
            <div className={'mt-[1200px] flex flex-col items-center bg-[#adc6af]'}>

            </div>
        </>

    );
};

export default Main;