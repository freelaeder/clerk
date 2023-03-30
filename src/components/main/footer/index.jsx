import React from 'react';
import MyForm from "./foem-user";

const Footer = () => {
    return (
        <div className={'mb-[1000px] mt-20'}>
            <div className={'px-4'}>
                <h2 className={'mx-auto w-5/6 text-center text-[2rem] font-bold leading-[2rem] text-[#74bb8f] sm:text-4xl md:text-5xl lg:w-[900px] lg:text-6xl lg:leading-[4rem]'}>STILL HAVE QUESTIONS? THEN THERE IS AN ANSWER!</h2>
                <MyForm />
            </div>

        </div>
    );
};

export default Footer;