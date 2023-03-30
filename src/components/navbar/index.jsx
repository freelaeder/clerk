import React, {useState} from "react";
import './navbar.css'
import logo from "../../assets/logo/logo.png";
import Icon from "@ant-design/icons";
import {Link, NavLink} from "react-router-dom";

const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path
            d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"/>
    </svg>
);
// const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;
const Navbar = () => {
    //背景盒子opacity
    const [menuBgOpacity, setMenuBgOpacity] = useState('h-[0%]')
    //menu box
    const [menuVisibility, setMenuVisibility] = useState("top-[-100%] right-[-100%]")
    // ment button
    const [menuButton, setMenuButton] = useState('opacity-0')
    const openMenu = () => {
        setMenuBgOpacity('h-[100%]')
        setMenuVisibility("top-0 right-0 cubic-bezier(.19,.75,.85,.51)");
        setTimeout(() => setMenuButton('opacity-100')
            , 600)
    }
    const closeMenu = () => {
        setTimeout(() => {
            setMenuButton('opacity-0')
            setMenuVisibility(
                "top-[-100%] right-[-100%] cubic-bezier(.23,.8,.71,.68)"
            );
            setMenuBgOpacity('h-[0%]')
        }, 200)
    }
    return (
        <div
            className={"z-20 h-[75px] w-full  px-0 lg:h-[90px] lg:px-12 bg-bgGreen  "}
        >
            {/*header top show*/}
            <div className={"flex h-full justify-between items-center px-4"}>
                {/*左侧*/}
                <div className={"align-center flex h-11 w-auto justify-center  "}>
                    <Link to={'/'}>
                        <img src={logo} alt="" className={"h-full w-auto"}/>
                    </Link>
                </div>
                {/*  右侧*/}
                <div className={"flex gap-8"}>
                    {/*登录盒子*/}
                    <div
                        className={
                            "profile z-10 flex h-10 w-10 items-center justify-center border border-secGreen text-secGreen lg:h-12 lg:w-12 "
                        }
                    >
                        <a
                            className="flex h-full w-full items-center justify-center bg-bgGreen"
                            href="/signup"
                        >
                            <button className="text-sm lg:text-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="h-[78%] w-[78%] bg-bgGreen"
                                    viewBox="0 0 16 16"
                                >
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                                        fill="#74bb8f"
                                    ></path>
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                        fill="#74bb8f"
                                    ></path>
                                    {" "}
                                </svg>
                            </button>
                        </a>
                    </div>
                    {/*menu盒子*/}
                    <div onClick={openMenu}
                         className="burger-menu z-20 h-10 w-10 hover:cursor-pointer lg:flex lg:h-12 lg:w-[6.5rem]">
                        <div
                            className="hidden  text-secGreen lg:flex lg:items-center lg:justify-center lg:border lg:border-r-0 lg:border-secGreen lg:bg-bgGreen lg:px-2 lg:text-lg">
                            Menu
                        </div>
                        <svg
                            className="border border-secGreen bg-bgGreen lg:border-l-0"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            zoomAndPan="magnify"
                            viewBox="0 0 30 30.000001"
                            preserveAspectRatio="xMidYMid meet"
                            version="1.0"
                            id="IconChangeColor"
                        >
                            <defs>
                                <clipPath id="id1">
                                    <path
                                        d="M 3.386719 7.164062 L 26.613281 7.164062 L 26.613281 22.40625 L 3.386719 22.40625 Z M 3.386719 7.164062 "
                                        clipRule="nonzero"
                                        id="mainIconPathAttribute"
                                    ></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#id1)">
                                <path
                                    fill="#74bb8f"
                                    d="M 3.398438 22.40625 L 26.601562 22.40625 L 26.601562 19.867188 L 3.398438 19.867188 Z M 3.398438 16.054688 L 26.601562 16.054688 L 26.601562 13.515625 L 3.398438 13.515625 Z M 3.398438 7.164062 L 3.398438 9.703125 L 26.601562 9.703125 L 26.601562 7.164062 Z M 3.398438 7.164062 "
                                    fillOpacity="1"
                                    id="mainIconPathAttribute"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
                {/*  隐藏的menu*/}
                <div
                    className={`fixed z-20 bg-bgGreen ${menuVisibility} h-auto w-[95%] border-b-2 border-l-2 border-b-secGreen border-secGreen border-l-secGreen duration-[0.6s] xsm:w-[400px] md:w-[600px] lg:h-auto lg:min-h-[55%] lg:w-[auto] lg:min-w-[500px]`}>
                    <div onClick={closeMenu}>
                        {/*关闭盒子*/}
                        <div
                            className="flex h-[70px] w-auto items-center justify-end border-b-2 border-secGreen px-4 lg:h-[90px] lg:px-12">
                            <div
                                className={`h-10 w-10 ${menuButton} lg:h-12 lg:w-12 menu-burger duration-200 hover:cursor-pointer lg:flex lg:w-[6.5rem]`}

                            >
                                <div
                                    className="hidden text-secGreen lg:flex lg:items-center lg:justify-center lg:border lg:border-r-0 lg:border-secGreen lg:bg-bgGreen lg:px-2 lg:text-lg">
                                    Menu
                                </div>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="IconChangeColor"
                                    className="border border-secGreen bg-bgGreen lg:h-12 lg:w-12 lg:border-l-0"
                                >
                                    <path
                                        d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                                        fill="#74bb8f"
                                        id="mainIconPathAttribute"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <ul className="my-14 ml-4 flex scale-y-110 flex-col border-secGreen items-start text-[42px] font-bold leading-[50px] text-secGreen md:my-16 md:ml-7 md:leading-[55px] lg:text-[50px]">
                            <li className="duration-150 hover:text-[#84d4a3]">
                                <NavLink to="/">HOME</NavLink>
                            </li>
                            <li className="duration-150 hover:text-[#84d4a3]">
                                <NavLink to="/services" className="service">
                                    SERVICES
                                </NavLink>
                            </li>
                            <li className="duration-150 hover:text-[#84d4a3]">
                                <NavLink to="/doctors">DOCTORS</NavLink>
                            </li>
                            <li className="duration-150 hover:text-[#84d4a3]">
                                <NavLink to="/about">ABOUT US</NavLink>
                            </li>
                            <li className="duration-150 hover:text-[#84d4a3]">
                                <NavLink to="/contacts">CONTACTS</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*  隐藏的背景*/}
                <div onClick={closeMenu}
                     className={`fixed bottom-0 right-0 ${menuBgOpacity}  z-[18] w-[100vw] backdrop-blur-sm duration-300 `}></div>
            </div>
        </div>
    );
};

export default Navbar;
