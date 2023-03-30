import React, {useState} from 'react';
import data from "./data";

const Qna = () => {
    // 当前激活的下标
    const [activeIndex, setActiveIndex] = useState()
    // 点击改变下标
    const updateActive = (id) => {
        if (activeIndex === id) {
            return setActiveIndex(null)
        }
        setActiveIndex(id)
    }
    return (
        <div className={'flex flex-col mt-20 bg-bgGreen max-w-[1280px] m-auto px-4 '}>
            <h2 className={'py-6 text-3xl font-bold text-center px-4 text-[#e5e3df]'}>Pet Care FAQs</h2>
            <div className={'grid grid-cols-1 gap-3'}>
                {
                    data.map(item => (
                        <div key={item.id} className={'border border-[#887e6f]'}>
                            <div onClick={() => updateActive(item.id)}
                                 className={'flex   items-center justify-between p-3  text-[#dfdad8] hover:cursor-pointer  '}>
                                <h2 className={'font-semibold'}>{item.question}</h2>
                                <span className={`duration-[0.4s] ${activeIndex === item.id ? 'rotate-180 ' : ''} `}>
                            ⮟
                        </span>
                            </div>
                            <div
                                className={`p-3 text-sm text-[#dfdad8] ${activeIndex === item.id ? 'block' : 'hidden'} `}>
                                    {item.answer}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Qna;