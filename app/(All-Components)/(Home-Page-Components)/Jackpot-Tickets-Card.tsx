"use client";
import React, { useEffect, useState } from "react";
import { AuroraText } from "@/components/ui/aurora-text"

// using next js smooch sens font 
import { Smooch_Sans } from 'next/font/google';
const smoochSans = Smooch_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
    variable: '--font-smooch-sans',
});

import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import './(Home-Page-Css)/Jackpot_Tickets_Card.css'
import './(Home-Page-Css)/Jackpot_Tickets_Card_Button.css'
import { BsEye } from "react-icons/bs";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import addimage from '../../../public/(home-page-image)/Universe_Package_Section_Image/ads2.jpg'


export default function Jackpot_Tickets_Card() {

    const [packages, setPackages] = useState<any[]>([]);

    useEffect(() => {
        fetch("/json-Files/home_json/ticket_package.json")
            .then(res => res.json())
            .then((data) => {
                setPackages(data);

            });
    }, []);




    console.log("packages data", packages);

    // 🔥 Show only Smart category data
    const smartPackages = packages.filter(
        (p) => p.Package_Category === "Smart"
    );


    // 🔥 Show only matrix category data
    const MatrixPackage = packages.filter(
        (p) => p.Package_Category === "Matrix"
    );




    // 🔥 Show only jackpot category data
    const jackpotpackage = packages.filter(
        (p) => p.Package_Category === "Jackpot"
    );



    return (
        <div className="  px-5 md:px-8 lg:px-10 xl:px-28 2xl:px-28 max-w-[1596px] mx-auto pb-10">

            {/* smart package  */}

            <div>
                <div className=" pt-7 space-y-2.5">
                    <h3 className=" text-[#ffffff] text-2xl md:text-3xl lg:text-2xl xl:text-[40px] font-bold text-center md:text-start opacity-95">
                        Universe Fortune <AuroraText>Smart</AuroraText>
                    </h3>
                    <p className=" text-[#ffffff]  text-[12px] xl:text-[16px] font-normal text-center md:text-start opacity-95">
                        UNIVERSE Fortune Matrix targets medium-tier participants seeking higher prize pools
                        with fewer winners. It balances risk and reward through structured packages.
                    </p>
                </div>
                <div className=" mt-5 gap-10 pb-5">
                    <div className=" grid md:grid-cols-3 mt-5 md:mt-1 lg:mt-5 gap-4 lg:gap-5 xl:gap-7 2xl:gap-10 pb-5">
                        {smartPackages.map((pak, index) => (
                            <div key={index} className="card group w-[350px] h-[420px] bg-[#180A3C] rounded-[20px] relative overflow-hidden border border-[#FF5F1F] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-white hover:-translate-y-1.5 hover:shadow-[0_5px_5px_5px_rgba(255,255,255,0.167)] hover:border-white active:-translate-y-1.5 active:scale-98">

                                <div
                                    className="card__glow absolute -inset-2.5 opacity-0 transition-opacity duration-500 ease-linear group-hover:opacity-[1]"
                                    style={{
                                        background:
                                            "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 70%)",
                                    }}>
                                </div>

                                <div className="card__content px-5 pt-2 h-full flex flex-col gap-[0.75em] relative z-10">
                                    <div className=" flex justify-between">
                                        <div className="card__badge absolute top-3 right-3 z-20 bg-[#FF5F1F] text-black px-[1em] py-[0.30em] rounded-[5px] text-[1em] font-semibold opacity-0 scale-90 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:scale-100">
                                            <div className="flex items-center gap-x-2">
                                                <p className={`card__title ${smoochSans.className} text-2xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>
                                                    <BsEye className=" text-white" />
                                                </p>
                                                <p className={`card__title ${smoochSans.className} text-3xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>{pak.views}k</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__image h-[200px] bg-[#ffffff] w-full  rounded-[12px] relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
                                        <div
                                            className="absolute inset-0 opacity-100 pointer-events-none"
                                            style={{
                                                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%), repeating-linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0px, rgba(139, 92, 246, 0.1) 2px, transparent 2px, transparent 4px)`
                                            }}>
                                            <div className="aspect-video h-[200px] ">
                                                <img src={pak?.image} alt={pak?.package_name} className="h-full w-full object-cover" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card__text flex justify-between gap-1">
                                        <div>
                                            <p className={`card__title ${smoochSans.className} text-3xl font-semibold text-white m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff]`}>
                                                {pak?.package_name}
                                            </p>
                                        </div>
                                        <div className="flex gap-x-2">
                                            <div className="flex items-center gap-x-2">
                                                <FaRegHeart
                                                    className={pak.wishlist
                                                        ? "text-orange-400 text-2xl xl:text-4xl"
                                                        : "text-gray-400 text-2xl xl:text-4xl"} />
                                                <p className={`card__title ${smoochSans.className} text-3xl font-thin m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}> {pak.wishlist_views}k</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__footer justify-between items-center mt-auto">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white font-bold text-base">Winning Prize</div>
                                            <div className="text-white font-bold text-base"> ${pak.winning_money}M</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="text-white font-bold text-base">Ticket Prize</div>
                                            <div className="text-white font-bold text-base">${pak.ticket_price}</div>
                                        </div>
                                        <div className="flex items-center justify-center mx-auto py-5">
                                            <button className="group w-40 relative h-14 outline-none bg-transparent border-none text-sm font-bold text-white">
                                                PLAY
                                                <div
                                                    id="clip"
                                                    style={{ '--color': '#2761c3' } as React.CSSProperties}
                                                    className="text-[#2761c3] absolute top-0 overflow-hidden w-full h-full border-[5px] border-double border-(--color)  [box-shadow:inset_0px_0px_15px_#195480] [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] group-hover:animate-[greenLight8_0.2s_ease-in-out_0.55s_both] group-hover:[--color:#27c39f]">
                                                    <div id="leftTop"
                                                        className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[-1.96em] left-[-3.0em] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.05s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">

                                                    </div>
                                                    <div id="rightBottom"
                                                        className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[45%] left-[88%] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.25s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">

                                                    </div>
                                                    <div id="rightTop"

                                                        className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[-1.98em] left-[91%] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.15s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">

                                                    </div>
                                                    <div id="leftBottom"
                                                        className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[2.10em] left-[-2.15em] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.35s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">
                                                    </div>
                                                </div>

                                                <span
                                                    id="rightArrow"
                                                    className="arrow absolute bg-[#2761c3] top-[35%] w-[11%] h-[30%] left-[102%] [clip-path:polygon(100%_49%,0_0,0_100%)] group-hover:bg-[#27c39f] group-hover:left-[-15%] group-hover:animate-[rightArrow8_0.6s_ease-in-out_infinite_alternate_both] [transition:0.2s]">
                                                </span>

                                                <span
                                                    id="leftArrow"
                                                    className="arrow absolute bg-[#2761c3] top-[35%] w-[11%] h-[30%] left-[-13.5%] [clip-path:polygon(100%_0,100%_100%,0_50%)] group-hover:bg-[#27c39f] group-hover:left-[103%] group-hover:animate-[leftArrow8_0.6s_ease-in-out_infinite_alternate_both] [transition:0.2s]">
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* matrix package  */}

            <div>
                <div className='  mt-5 gap-10 pb-5'>
                    <div className=" pt-7 space-y-2.5">
                        <h3 className=" text-[#ffffff] text-2xl md:text-3xl lg:text-2xl xl:text-[40px] font-bold text-center md:text-start opacity-95">
                            Universe Fortune <AuroraText>Matrix</AuroraText>
                        </h3>
                        <p className=" text-[#ffffff]  text-[12px] xl:text-[16px] font-normal text-center md:text-start opacity-95 ">
                            UNIVERSE Fortune Matrix targets medium-tier participants seeking higher prize pools
                            with fewer winners. It balances risk and reward through structured packages.
                        </p>
                    </div>
                    <div className=' grid md:grid-cols-3 mt-5 md:mt-1 lg:mt-5 gap-4 lg:gap-5 xl:gap-7 2xl:gap-10 pb-5'>
                        {
                            MatrixPackage.map((pak, index) => (
                                <div key={index} className="card group w-[350px] h-[420px] bg-[#180A3C] rounded-[20px] relative overflow-hidden border border-[#FF5F1F] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-white hover:-translate-y-1.5 hover:shadow-[0_5px_5px_5px_rgba(255,255,255,0.167)] hover:border-white active:-translate-y-1.5 active:scale-98">
                                    <div
                                        className="card__glow absolute -inset-2.5 opacity-0 transition-opacity duration-500 ease-linear group-hover:opacity-[1]"
                                        style={{
                                            background: "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 70%)",
                                        }}>
                                    </div>
                                    <div className="card__content px-5 pt-2 h-full flex flex-col gap-[0.75em] relative z-10">
                                        <div className=" flex justify-between">
                                            <div className="card__badge absolute top-3 right-3 z-20 bg-[#FF5F1F] text-black px-[1em] py-[0.30em] rounded-[5px] text-[1em] font-semibold opacity-0 scale-90 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:scale-100">
                                                <div className="flex items-center gap-x-2">
                                                    <p className={`card__title ${smoochSans.className} text-2xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>
                                                        <BsEye className=" text-white" />
                                                    </p>
                                                    <p className={`card__title ${smoochSans.className} text-3xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>{pak.views}k
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__image h-[200px] bg-[#ffffff] w-full  rounded-[12px] relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
                                            <div
                                                className="absolute inset-0 opacity-100 pointer-events-none"
                                                style={{
                                                    background: ` radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%), repeating-linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0px, rgba(139, 92, 246, 0.1) 2px, transparent 2px, transparent 4px)`,
                                                }}>
                                                <div className="aspect-video h-[200px] ">
                                                    <img src={pak?.image} alt={pak?.package_name} className="h-full w-full object-cover" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__text flex justify-between gap-1">
                                            <div>
                                                <p className={`card__title ${smoochSans.className} text-3xl font-semibold text-white m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff]`}>
                                                    {pak?.package_name}
                                                </p>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <div className="flex items-center gap-x-2">
                                                    <FaRegHeart
                                                        className={pak.wishlist
                                                            ? "text-orange-400 text-2xl xl:text-4xl"
                                                            : "text-gray-400 text-2xl xl:text-4xl"} />
                                                    <p className={`card__title ${smoochSans.className} text-3xl font-thin m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}> {pak.wishlist_views}k</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__footer justify-between items-center mt-auto">
                                            <div className="flex items-center justify-between">
                                                <div className="text-white font-bold text-base">Winning Prize</div>
                                                <div className="text-white font-bold text-base"> ${pak.winning_money}M</div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-white font-bold text-base">Ticket Prize</div>
                                                <div className="text-white font-bold text-base">${pak.ticket_price}</div>
                                            </div>
                                            <div className="flex items-center justify-center mx-auto py-5">
                                                <button className="group w-40 relative h-14 outline-none bg-transparent border-none text-sm font-bold text-white">
                                                PLAY
                                                <div
                                                    id="clip"
                                                    style={{ '--color': '#2761c3' } as React.CSSProperties}
                                                    className="text-[#2761c3] absolute top-0 overflow-hidden w-full h-full border-[5px] border-double border-(--color)  [box-shadow:inset_0px_0px_15px_#195480] [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] group-hover:animate-[greenLight8_0.2s_ease-in-out_0.55s_both] group-hover:[--color:#27c39f]">
                                                    <div id="leftTop"
                                                        className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[-1.96em] left-[-3.0em] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.05s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">

                                                    </div>
                                                    <div id="rightBottom"
                                                        className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[45%] left-[88%] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.25s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">

                                                    </div>
                                                    <div id="rightTop"

                                                        className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[-1.98em] left-[91%] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.15s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">

                                                    </div>
                                                    <div id="leftBottom"
                                                        className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[2.10em] left-[-2.15em] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.35s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">
                                                    </div>
                                                </div>

                                                <span
                                                    id="rightArrow"
                                                    className="arrow absolute bg-[#2761c3] top-[35%] w-[11%] h-[30%] left-[102%] [clip-path:polygon(100%_49%,0_0,0_100%)] group-hover:bg-[#27c39f] group-hover:left-[-15%] group-hover:animate-[rightArrow8_0.6s_ease-in-out_infinite_alternate_both] [transition:0.2s]">
                                                </span>

                                                <span
                                                    id="leftArrow"
                                                    className="arrow absolute bg-[#2761c3] top-[35%] w-[11%] h-[30%] left-[-13.5%] [clip-path:polygon(100%_0,100%_100%,0_50%)] group-hover:bg-[#27c39f] group-hover:left-[103%] group-hover:animate-[leftArrow8_0.6s_ease-in-out_infinite_alternate_both] [transition:0.2s]">
                                                </span>
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="grid md:grid-cols-3 mt-0 md:mt-1 lg:mt-5 gap-3 lg:gap-5 xl:gap-10 pb-5">
                        {/* LEFT */}
                        <div className="md:col-span-1 ">
                            {MatrixPackage.length > 0 && (() => {
                                const lastPackage = MatrixPackage[MatrixPackage.length - 1];
                                return (
                                    <div className="card group w-[350px] h-[420px] bg-[#180A3C] rounded-[20px] relative overflow-hidden border border-[#FF5F1F] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-white hover:-translate-y-1.5 hover:shadow-[0_5px_5px_5px_rgba(255,255,255,0.167)] hover:border-white active:-translate-y-1.5 active:scale-98">
                                        <div
                                            className="card__glow absolute -inset-2.5 opacity-0 transition-opacity duration-500 ease-linear group-hover:opacity-[1]"
                                            style={{
                                                background:
                                                    "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 70%)",
                                            }}
                                        ></div>
                                        <div className="card__content px-5 pt-2 h-full flex flex-col gap-[0.75em] relative z-10">
                                            <div className=" flex justify-between">
                                                <div className="card__badge absolute top-3 right-3 z-20 bg-[#FF5F1F] text-black px-[1em] py-[0.30em] rounded-[5px] text-[1em] font-semibold opacity-0 scale-90 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:scale-100">
                                                    <div className="flex items-center gap-x-2">
                                                        <p className={`card__title ${smoochSans.className} text-2xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}><BsEye className=" text-white" />
                                                        </p>
                                                        <p className={`card__title ${smoochSans.className} text-3xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>{lastPackage.views}k

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__image h-[200px] bg-[#ffffff] w-full  rounded-[12px] relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
                                                <div
                                                    className="absolute inset-0 opacity-100 pointer-events-none"
                                                    style={{
                                                        background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%), repeating-linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0px, rgba(139, 92, 246, 0.1) 2px, transparent 2px, transparent 4px)`,
                                                    }}>
                                                    <div className="aspect-video h-[200px] ">
                                                        <img src={lastPackage?.image} alt={lastPackage?.package_name} className="h-full w-full object-cover" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__text flex justify-between gap-1">
                                                <div>
                                                    <p className={`card__title ${smoochSans.className} text-3xl font-semibold text-white m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff]`}>
                                                        {lastPackage?.package_name}
                                                    </p>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <div className="flex items-center gap-x-2">
                                                        <FaRegHeart
                                                            className={lastPackage.wishlist
                                                                ? "text-orange-400 text-2xl xl:text-4xl"
                                                                : "text-gray-400 text-2xl xl:text-4xl"} />
                                                        <p className={`card__title ${smoochSans.className} text-3xl font-thin m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}> {lastPackage.wishlist_views}k
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__footer justify-between items-center mt-auto">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-white font-bold text-base">Winning Prize</div>
                                                    <div className="text-white font-bold text-base"> ${lastPackage.winning_money}M</div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="text-white font-bold text-base">Ticket Prize</div>
                                                    <div className="text-white font-bold text-base">${lastPackage.ticket_price}</div>
                                                </div>
                                                <div className="flex items-center justify-center mx-auto py-5">
                                                    <button className="group w-40 relative h-14 outline-none bg-transparent border-none text-sm font-bold text-white">
                                                        PLAY
                                                        <div
                                                            id="clip"
                                                            style={{ '--color': '#2761c3' } as React.CSSProperties}
                                                            className="text-[#2761c3] absolute top-0 overflow-hidden w-full h-full border-[5px] border-double border-(--color)  [box-shadow:inset_0px_0px_15px_#195480] [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] group-hover:animate-[greenLight8_0.2s_ease-in-out_0.55s_both] group-hover:[--color:#27c39f]">
                                                            <div id="leftTop"
                                                                className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[-1.96em] left-[-3.0em] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.05s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">
                                                            </div>
                                                            <div id="rightBottom"
                                                                className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[45%] left-[88%] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.25s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">
                                                            </div>
                                                            <div id="rightTop"
                                                                className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[-1.98em] left-[91%] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.15s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">

                                                            </div>
                                                            <div id="leftBottom"
                                                                className="corner absolute w-[4em] h-[4em] bg-[#2761c3]    [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[2.10em] left-[-2.15em] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.35s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">
                                                            </div>
                                                        </div>

                                                        <span
                                                            id="rightArrow"
                                                            className="arrow absolute bg-[#2761c3] top-[35%] w-[11%] h-[30%] left-[102%] [clip-path:polygon(100%_49%,0_0,0_100%)] group-hover:bg-[#27c39f] group-hover:left-[-15%] group-hover:animate-[rightArrow8_0.6s_ease-in-out_infinite_alternate_both] [transition:0.2s]">
                                                        </span>

                                                        <span
                                                            id="leftArrow"
                                                            className="arrow absolute bg-[#2761c3] top-[35%] w-[11%] h-[30%] left-[-13.5%] [clip-path:polygon(100%_0,100%_100%,0_50%)] group-hover:bg-[#27c39f] group-hover:left-[103%] group-hover:animate-[leftArrow8_0.6s_ease-in-out_infinite_alternate_both] [transition:0.2s]">
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* RIGHT */}
                        <div className="md:col-span-2 mt-2 md:mt-0">
                            <BackgroundGradient className="relative flex-1 h-full rounded-[22px] bg-[#180A3C] dark:bg-zinc-900 overflow-hidden">
                                <Image
                                    src={addimage}
                                    alt="ad1"
                                    className="h-full w-full object-cover rounded-[22px] lg:h-[330px] xl:h-[413px] 2xl:h-[400px]" />
                            </BackgroundGradient>
                        </div>
                    </div>
                </div>

            </div>

            {/* Jackpot package  */}

            <div>
                <div className='  mt-5 gap-10 pb-5'>
                    <div className=" pt-7 space-y-2.5">
                        <h3 className=" text-[#ffffff] text-2xl md:text-3xl lg:text-2xl xl:text-[40px] font-bold text-center md:text-start opacity-95">
                            Universe Grand <AuroraText>Jackpot</AuroraText>
                        </h3>
                        <p className=" text-[#ffffff]  text-[12px] xl:text-[16px] font-normal text-center md:text-start opacity-95">
                            UNIVERSE Fortune Matrix targets medium-tier participants seeking higher prize pools
                            with fewer winners. It balances risk and reward through structured packages.
                        </p>
                    </div>
                    <div className=' grid md:grid-cols-3 mt-5 md:mt-1 lg:mt-5 gap-4 lg:gap-5 xl:gap-7 2xl:gap-10 pb-5'>
                        {
                            jackpotpackage.map((pak, index) => (
                                <div key={index} className="card group w-[350px] h-[420px] bg-[#180A3C] rounded-[20px] relative overflow-hidden border border-[#FF5F1F] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-white hover:-translate-y-1.5 hover:shadow-[0_5px_5px_5px_rgba(255,255,255,0.167)] hover:border-white active:-translate-y-1.5 active:scale-98">
                                    <div
                                        className="card__glow absolute -inset-2.5 opacity-0 transition-opacity duration-500 ease-linear group-hover:opacity-[1]"
                                        style={{
                                            background: "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 70%)",
                                        }}>
                                    </div>
                                    <div className="card__content px-5 pt-2 h-full flex flex-col gap-[0.75em] relative z-10">
                                        <div className=" flex justify-between">
                                            <div className="card__badge absolute top-3 right-3 z-20 bg-[#FF5F1F] text-black px-[1em] py-[0.30em] rounded-[5px] text-[1em] font-semibold opacity-0 scale-90 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:scale-100">
                                                <div className="flex items-center gap-x-2">
                                                    <p className={`card__title ${smoochSans.className} text-2xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>
                                                        <BsEye className=" text-white" />
                                                    </p>
                                                    <p className={`card__title ${smoochSans.className} text-3xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>{pak.views}k</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card__image h-[200px] bg-[#ffffff] w-full  rounded-[12px] relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
                                            <div
                                                className="absolute inset-0 opacity-100 pointer-events-none"
                                                style={{
                                                    background: ` radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%), repeating-linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0px, rgba(139, 92, 246, 0.1) 2px, transparent 2px, transparent 4px)`,
                                                }}>
                                                <div className="aspect-video h-[200px] ">
                                                    <img src={pak?.image} alt={pak?.package_name} className="h-full w-full object-cover" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__text flex justify-between gap-1">
                                            <div>
                                                <p className={`card__title ${smoochSans.className} text-3xl font-semibold text-white m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff]`}>
                                                    {pak?.package_name}
                                                </p>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <div className="flex items-center gap-x-2">
                                                    <FaRegHeart
                                                        className={pak.wishlist
                                                            ? "text-orange-400 text-2xl xl:text-4xl"
                                                            : "text-gray-400 text-2xl xl:text-4xl"} />
                                                    <p className={`card__title ${smoochSans.className} text-3xl font-thin m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}> {pak.wishlist_views}k</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="card__footer justify-between items-center mt-auto">
                                            <div className="flex items-center justify-between">
                                                <div className="text-white font-bold text-base">Winning Prize</div>
                                                <div className="text-white font-bold text-base"> ${pak.winning_money}M</div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-white font-bold text-base">Ticket Prize</div>
                                                <div className="text-white font-bold text-base">${pak.ticket_price}</div>
                                            </div>

                                            <div className="flex items-center justify-center mx-auto py-5">
                                                <button className="group w-40 relative h-14 outline-none bg-transparent border-none text-sm font-bold text-white">
                                                    PLAY
                                                    <div
                                                        id="clip"
                                                        style={{ '--color': '#2761c3' } as React.CSSProperties}
                                                        className="text-[#2761c3] absolute top-0 overflow-hidden w-full h-full border-[5px] border-double border-(--color)  [box-shadow:inset_0px_0px_15px_#195480] [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] group-hover:animate-[greenLight8_0.2s_ease-in-out_0.55s_both] group-hover:[--color:#27c39f]">
                                                        <div id="leftTop"
                                                            className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[-1.96em] left-[-3.0em] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.05s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">
                                                        </div>
                                                        <div id="rightBottom"
                                                            className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[45%] left-[88%] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.25s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">
                                                        </div>
                                                        <div id="rightTop"
                                                            className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[-1.98em] left-[91%] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.15s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">
                                                        </div>
                                                        <div id="leftBottom"
                                                            className="corner absolute w-[4em] h-[4em] bg-[#2761c3] [box-shadow:inset_1px_1px_8px_#2781c3] transform-[scale(1)_rotate(45deg)] transition-all duration-200 top-[2.10em] left-[-2.15em] group-hover:animate-[changeColor8_0.1s_ease-in-out_0.35s_both,lightEffect8_0.2s_linear_0.4s_both] group-hover:[transform:scale(1.25)_rotate(45deg);]">
                                                        </div>
                                                    </div>
                                                    <span
                                                        id="rightArrow"
                                                        className="arrow absolute bg-[#2761c3] top-[35%] w-[11%] h-[30%] left-[102%] [clip-path:polygon(100%_49%,0_0,0_100%)] group-hover:bg-[#27c39f] group-hover:left-[-15%] group-hover:animate-[rightArrow8_0.6s_ease-in-out_infinite_alternate_both] [transition:0.2s]">

                                                    </span>
                                                    <span
                                                        id="leftArrow"
                                                        className="arrow absolute bg-[#2761c3] top-[35%] w-[11%] h-[30%] left-[-13.5%] [clip-path:polygon(100%_0,100%_100%,0_50%)] group-hover:bg-[#27c39f] group-hover:left-[103%] group-hover:animate-[leftArrow8_0.6s_ease-in-out_infinite_alternate_both] [transition:0.2s]">

                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
