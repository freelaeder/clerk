import React from 'react';

const Reviews = () => {
    return (
        <div className={'mx-auto mt-20 max-w-[1280px] bg-bgGreen'}>
            <div className={'mx-auto py-12'}>
                <div className={'grid items-center gap-4 lg:grid-cols-5'}>
                    <div className={'mx-auto  space-y-4 text-center text-[#e5e3df] lg:col-span-2 lg:pl-4 lg:text-left'}>
                        <h2 className={'text-3xl font-bold px-4'}>Client feedback and reviews</h2>
                        <p className={'px-4'}>
                            Read what our clients have to say about the exceptional care and services provided by our veterinary clinic
                        </p>
                    </div>
                    <div className={'lg:col-span-3 '}>
                        <div className={'grid gap-4 md:grid-cols-2'}>
                            <div className={'grid content-center gap-4 '}>
                                <div className={'relative rounded-sm p-6 shadow-md'}>
                                    <div className={'absolute -top-3 left-3 select-none text-[100px] opacity-10'}>🙷</div>
                                    <p className={'text-[16px] text-gray-500 text-[#a09477]'} >I couldn't be happier with the care my pets received at this clinic. The veterinarians and staff are knowledgeable, compassionate, and truly care about the well-being of their patients. I highly recommend this clinic to any pet owner!</p>
                                    <div className={'flex mt-4 items-center space-x-4'}>
                                        <img className={'w-10 h-10'} src="/assets/users/user-icon.svg" alt=""/>
                                        <div>
                                            <p className={'  text-[#e5e3df] text-lg font-semibold'}>
                                                MyKola
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={'relative rounded-sm p-6 shadow-md'}>
                                    <div className={'absolute -top-3 left-3 select-none text-[100px] opacity-10'}>🙷</div>
                                    <p className={'text-[16px] text-gray-500 text-[#a09477]'} >I couldn't be happier with the care my pets received at this clinic. The veterinarians and staff are knowledgeable, compassionate, and truly care about the well-being of their patients. I highly recommend this clinic to any pet owner!</p>
                                    <div className={'flex mt-4 items-center space-x-4'}>
                                        <img className={'w-10 h-10'} src="/assets/users/user-icon.svg" alt=""/>
                                        <div>
                                            <p className={'  text-[#e5e3df] text-lg font-semibold'}>
                                                MyKola
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'grid content-center gap-4'}>
                                <div className={'relative rounded-sm p-6  shadow-md'}>
                                    <div className={'absolute -top-3 left-3 select-none text-[100px] opacity-10'}>🙷</div>
                                    <p className={' text-gray-500 text-[#a09477]'} >I couldn't be happier with the care my pets received at this clinic. The veterinarians and staff are knowledgeable, compassionate, and truly care about the well-being of their patients. I highly recommend this clinic to any pet owner!</p>
                                    <div className={'flex mt-4 items-center space-x-4'}>
                                        <img className={'w-10 h-10'} src="/assets/users/user-icon.svg" alt=""/>
                                        <div>
                                            <p className={'  text-[#e5e3df] text-lg font-semibold'}>
                                                MyKola
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={'relative rounded-sm p-6  shadow-md'}>
                                    <div className={'absolute -top-3 left-3 select-none text-[100px] opacity-10'}>🙷</div>
                                    <p className={' text-gray-500 text-[#a09477]'} >I couldn't be happier with the care my pets received at this clinic. The veterinarians and staff are knowledgeable, compassionate, and truly care about the well-being of their patients. I highly recommend this clinic to any pet owner!</p>
                                    <div className={'flex mt-4 items-center space-x-4'}>
                                        <img className={'w-10 h-10'} src="/assets/users/user-icon.svg" alt=""/>
                                        <div>
                                            <p className={'  text-[#e5e3df] text-lg font-semibold'}>
                                                MyKola
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;