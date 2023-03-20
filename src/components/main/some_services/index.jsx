import React from 'react';
import {Link} from "react-router-dom";
import {services} from "./services_data";

const SomeServices = () => {
    return (
        <div className={'mt-20 mb-[1000px] flex flex-col items-center bg-[#334d3c]'}>
            <h2 className={'my-7 text-3xl font-bold text-center text-[#f7ffec]'}>Expert Veterinary Services for Your
                Pet</h2>
            <div className={'grid max-w-[1280px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1'}>
                {
                    services.map(item => (
                        <Link key={item.id} to={`/services/${item.name}`}>
                            <div className={'rounded-sm border border-secGreen pl-7 pr-7 pb-7 text-sm sm:h-full'}>
                                <img className={'w-10 h-10'} src={item.icon} alt=""/>
                                <p className={'mt-4 text-lg font-bold text-[#f7ffec] '}>{item.name}</p>
                                <p className={'mt-3 text-[#f7ffec]'}>{item.description}</p>
                            </div>
                        </Link>
                    ))
                }


            </div>
        </div>
    );
};

export default SomeServices;