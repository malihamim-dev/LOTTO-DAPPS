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
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import './(Home-Page-Css)/Jackpot_Tickets_Card.css'
import './(Home-Page-Css)/Jackpot_Tickets_Card_Button.css'
import { BsEye } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";


export default function Jackpot_Tickets_Card() {

    const [packages, setPackages] = useState<any[]>([]);
    const [currentpage, setCurrentpage] = useState(1);
    const [itemperpage, setItemperpage] = useState(4);
    const [matrixCurrentpage, setmatrixCurrentpage] = useState(1)
    const [matrixitemperpage, setMatrixitemperpage] = useState(4)

    useEffect(() => {
        fetch("/json-Files/home_json/ticket_package.json")
            .then(res => res.json())
            .then((data) => {
                setPackages(data);

            });
    }, []);


    // console.log("packages data", packages);

    //  Show only Smart category data
    const smartPackages = packages.filter(
        (p) => p.Package_Category === "Smart"
    );


    //  Show only matrix category data
    const MatrixPackage = packages.filter(
        (p) => p.Package_Category === "Matrix"
    );


    //  Show only jackpot category data
    const jackpotpackage = packages.filter(
        (p) => p.Package_Category === "Jackpot"
    );


    //  smart and jackpot pagination display set 


    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 766) {
                setItemperpage(4);
            } else if (window.innerWidth < 1023) {
                setItemperpage(3)
            } else (
                setItemperpage(4)
            )
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);


    }, [])

    // smart package total page, start indexedDB, end index, visibalpackage data show 
    const totalpage = Math.ceil(smartPackages.length / itemperpage);
    const startIndex = (currentpage - 1) * itemperpage;
    const endIndex = startIndex + itemperpage;
    const visibalpackage = smartPackages.slice(startIndex, endIndex)


    // matrix package total page, start indexedDB, end index, visibalpackage data show 
    const jackpottotalpage = Math.ceil(jackpotpackage.length / itemperpage);
    const jackpotstartIndex = (currentpage - 1) * itemperpage;
    const jackpotendIndex = jackpotstartIndex + itemperpage;

    const jackpotvisibalpackage = jackpotpackage.slice(jackpotstartIndex, jackpotendIndex)


    // matrix pagination dispaly set

    useEffect(() => {

        const handleMatrixResize = () => {
            if (window.innerWidth < 766) {
                setMatrixitemperpage(4);
            } else if (window.innerWidth < 1023) {
                setMatrixitemperpage(6)
            } else (
                setMatrixitemperpage(8)
            )
        }

        handleMatrixResize();
        window.addEventListener("resize", handleMatrixResize);
        return () => window.removeEventListener("resize", handleMatrixResize);


    }, [])


    const matrixtotalpage = Math.ceil(MatrixPackage.length / matrixitemperpage);
    const matrixStartIndex = (matrixCurrentpage - 1) * matrixitemperpage;
    const matrixEndIndex = matrixStartIndex + matrixitemperpage;
    const matrixVisibalpackage = MatrixPackage.slice(matrixStartIndex, matrixEndIndex)


    return (
        <div className="  px-5 md:px-8 lg:px-10 xl:px-28 2xl:px-28 max-w-[1596px] mx-auto pb-10 md:pb-20">

            {/* smart package  */}
            <div>
                <div className=" pt-7 space-y-2.5 pb-3">
                    <h3 className=" text-[#ffffff] text-2xl md:text-3xl lg:text-2xl xl:text-[40px] font-bold text-center md:text-start opacity-95">
                         Fortune <AuroraText>Smart</AuroraText>
                    </h3>
                    <p className=" text-[#ffffff]  text-[12px] xl:text-[16px] font-normal text-center md:text-start opacity-95">
                        UNIVERSE Fortune Matrix targets medium-tier participants seeking higher prize pools
                        with fewer winners. It balances risk and reward through structured packages.
                    </p>
                </div>
                <div className=" mt-5 gap-10 pb-5">
                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 md:mt-1 lg:mt-5 gap-2 gap-y-3 lg:gap-2.5 xl:gap-3 2xl:gap-5 pb-5">
                        {visibalpackage.map((pak, index) => (
                            <div key={index} className="card group w-full h-60 md:h-80 lg:h-80 xl:h-[350px] 2xl:h-[420px] bg-[#180A3C] rounded-[10px] md:rounded-[12px] xl:rounded-2xl 2xl:rounded-[20px] relative overflow-hidden border border-[#FF5F1F] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-white hover:-translate-y-1.5 hover:shadow-[0_5px_5px_5px_rgba(255,255,255,0.167)] hover:border-white active:-translate-y-1.5 active:scale-98">

                                <div
                                    className="card__glow absolute -inset-2.5 opacity-0 transition-opacity duration-500 ease-linear group-hover:opacity-[1] hidden md:block"
                                    style={{
                                        background:
                                            "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 70%)",
                                    }}>
                                </div>

                                <div className="card__content px-2.5 md:px-3.5 xl:px-5 pt-0.5 md:pt-1 lg:pt-0.5 xl:pt-2 h-full flex flex-col gap-[0.75em] relative z-10">
                                    <div className=" flex justify-between">
                                        <div className="card__badge absolute top-3 right-3 z-20 bg-[#FF5F1F] text-black px-[7px] py-1 rounded-[5px] text-[1em] font-semibold opacity-0 scale-90 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:scale-100">
                                            <div className="flex items-center gap-x-1">
                                                <p className={`card__title ${smoochSans.className} lg:text-xl 2xl:text-2xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>
                                                    <BsEye className=" text-white" />
                                                </p>
                                                <p className={`card__title ${smoochSans.className} lg:text-base xl:text-lg 2xl:text-xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>{pak.views}k</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__image h-[100px] md:h-[130px] lg:h-[150px] xl:h-[150px] 2xl:h-[200px] bg-[#ffffff] w-full rounded-[10px] xl:rounded-[11px] 2xl:rounded-[12px] relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
                                        <div
                                            className="absolute inset-0 opacity-100 pointer-events-none"
                                            style={{
                                                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%), repeating-linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0px, rgba(139, 92, 246, 0.1) 2px, transparent 2px, transparent 4px)`
                                            }}>
                                            <img src={pak?.image} alt={pak?.package_name} className="  h-full w-full object-cover" />
                                        </div>
                                    </div>

                                    <div className="card__text flex justify-between gap-1">
                                        <div>
                                            <p className={`card__title ${smoochSans.className} text-[16px] md:text-[22px] lg:text-[24px] xl:text-[25px] 2xl:text-3xl font-semibold text-white m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] leading-3.5 lg:leading-5 xl:leading-7`}>
                                                {pak?.package_name}
                                            </p>
                                        </div>
                                        <div className="flex gap-x-2">
                                            <div className="flex items-center gap-x-2">
                                                <FaRegHeart
                                                    className={pak.wishlist
                                                        ? "text-orange-400 text-sm md:text-[16px] lg:text-lg xl:text-xl 2xl:text-4xl"
                                                        : "text-gray-400 text-sm md:text-[16px] lg:text-lg xl:text-xl 2xl:text-4xl"} />
                                                <p className={`card__title ${smoochSans.className} text-xs md:text-[22px] lg:text-[22px] xl:text-2xl 2xl:text-3xl font-thin m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}> {pak.wishlist_views}k</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__footer justify-between items-center mt-auto">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white font-bold text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-base  ">Winning Prize</div>
                                            <div className="text-white font-bold text-xs md:text-sm 2xl:text-base"> ${pak.winning_money}</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="text-white font-bold text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-base">Ticket Prize</div>
                                            <div className="text-white font-bold text-xs md:text-sm xl:text-base">${pak.ticket_price}</div>
                                        </div>
                                        <div className="flex items-center justify-center mx-auto py-3 md:py-5 lg:py-3 xl:py-5">
                                            <button className="group w-20 md:w-28 lg:w-28 xl:w-32 2xl:w-40 relative h-8 md:h-12 lg:h-[46px] xl:h-12 2xl:h-14 outline-none bg-transparent border-none text-[8px] md:text-[12px] 2xl:text-sm font-bold text-white ">
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

                {/* pagination section  */}

                <div className=" opacity-95">
                    <div className=" flex gap-x-2 lg:gap-x-5 items-center justify-center">
                        <button
                            onClick={() => setCurrentpage(p => Math.max(p - 1, 1))}
                            disabled={currentpage === 1}
                            className=" h-10 w-10 lg:h-12 lg:w-12 border border-[#ff5f1f] rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer disabled:opacity-40">
                            <FaArrowLeft className="text-sm lg:text-2xl text-[#ff5f1f]" />
                        </button>
                        <div className=" h-10 lg:h-12 w-56 lg:w-72 bg-[#ffff] rounded-full ">
                            <div className=" flex items-center justify-center h-full gap-x-3  ">

                                {
                                    Array.from({ length: totalpage }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentpage(i + 1)}
                                            className={`h-8 w-8 rounded-full text-lg font-bold 
                                                    ${currentpage === i + 1
                                                    ? "bg-[#ff5f1f] text-white"
                                                    : "text-[#ff5f1f] shadow-md shadow-[#c04818] hover:bg-[#ff5f1f] hover:text-white"
                                                }`}>
                                            {i + 1}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <button
                            onClick={() => setCurrentpage(p => Math.min(p + 1, totalpage))}
                            disabled={currentpage === totalpage}
                            className="h-10 w-10 lg:h-12 lg:w-12 border border-[#ff5f1f] rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer disabled:opacity-40">
                            <FaArrowRight className="text-sm lg:text-2xl text-[#ff5f1f]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* matrix package  */}


            <div>
                <div className='  mt-5 gap-10 pb-5'>
                    <div className=" pt-7 space-y-2.5 pb-3">
                        <h3 className=" text-[#ffffff] text-2xl md:text-3xl lg:text-2xl xl:text-[40px] font-bold text-center md:text-start opacity-95">
                             Fortune <AuroraText>Matrix</AuroraText>
                        </h3>
                        <p className=" text-[#ffffff]  text-[12px] xl:text-[16px] font-normal text-center md:text-start opacity-95 ">
                            UNIVERSE Fortune Matrix targets medium-tier participants seeking higher prize pools
                            with fewer winners. It balances risk and reward through structured packages.
                        </p>
                    </div>


                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 md:mt-1 lg:mt-5 gap-2 gap-y-3 lg:gap-2.5 xl:gap-3 2xl:gap-5 pb-5'>
                        {
                            matrixVisibalpackage.map((pak, index) => {
                                if (index === MatrixPackage.length - 1) return null;
                                return (
                                    <div key={index} className="card group w-full h-60 md:h-80 lg:h-80 xl:h-[350px] 2xl:h-[420px] bg-[#180A3C] rounded-[10px] md:rounded-[12px] xl:rounded-2xl 2xl:rounded-[20px] relative overflow-hidden border border-[#FF5F1F] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-white hover:-translate-y-1.5 hover:shadow-[0_5px_5px_5px_rgba(255,255,255,0.167)] hover:border-white active:-translate-y-1.5 active:scale-98">

                                        <div
                                            className="card__glow absolute -inset-2.5 opacity-0 transition-opacity duration-500 ease-linear group-hover:opacity-[1] hidden md:block"
                                            style={{
                                                background:
                                                    "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 70%)",
                                            }}>
                                        </div>

                                        <div className="card__content px-2.5 md:px-3.5 xl:px-5 pt-0.5 md:pt-1 lg:pt-0.5 xl:pt-2 h-full flex flex-col gap-[0.75em] relative z-10">
                                            <div className=" flex justify-between">
                                                <div className="card__badge absolute top-3 right-3 z-20 bg-[#FF5F1F] text-black px-[7px] py-1 rounded-[5px] text-[1em] font-semibold opacity-0 scale-90 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:scale-100">
                                                    <div className="flex items-center gap-x-1">
                                                        <p className={`card__title ${smoochSans.className} lg:text-xl 2xl:text-2xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>
                                                            <BsEye className=" text-white" />
                                                        </p>
                                                        <p className={`card__title ${smoochSans.className} lg:text-base xl:text-lg 2xl:text-xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>{pak.views}k</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__image h-[100px] md:h-[130px] lg:h-[150px] xl:h-[150px] 2xl:h-[200px] bg-[#ffffff] w-full rounded-[10px] xl:rounded-[11px] 2xl:rounded-[12px] relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
                                                <div
                                                    className="absolute inset-0 opacity-100 pointer-events-none"
                                                    style={{
                                                        background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%), repeating-linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0px, rgba(139, 92, 246, 0.1) 2px, transparent 2px, transparent 4px)`
                                                    }}>
                                                    <img src={pak?.image} alt={pak?.package_name} className="  h-full w-full object-cover" />
                                                </div>
                                            </div>

                                            <div className="card__text flex justify-between gap-1">
                                                <div>
                                                    <p className={`card__title ${smoochSans.className} text-[16px] md:text-[22px] lg:text-[24px] xl:text-[25px] 2xl:text-3xl font-semibold text-white m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] leading-3.5 lg:leading-5 xl:leading-7`}>
                                                        {pak?.package_name}
                                                    </p>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <div className="flex items-center gap-x-2">
                                                        <FaRegHeart
                                                            className={pak.wishlist
                                                                ? "text-orange-400 text-sm md:text-[16px] lg:text-lg xl:text-xl 2xl:text-4xl"
                                                                : "text-gray-400 text-sm md:text-[16px] lg:text-lg xl:text-xl 2xl:text-4xl"} />
                                                        <p className={`card__title ${smoochSans.className} text-xs md:text-[22px] lg:text-[22px] xl:text-2xl 2xl:text-3xl font-thin m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}> {pak.wishlist_views}k</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__footer justify-between items-center mt-auto">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-white font-bold text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-base  ">Winning Prize</div>
                                                    <div className="text-white font-bold text-xs md:text-sm 2xl:text-base"> ${pak.winning_money}</div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="text-white font-bold text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-base">Ticket Prize</div>
                                                    <div className="text-white font-bold text-xs md:text-sm xl:text-base">${pak.ticket_price}</div>
                                                </div>
                                                <div className="flex items-center justify-center mx-auto py-3 md:py-5 lg:py-3 xl:py-5">
                                                    <button className="group w-20 md:w-28 lg:w-28 xl:w-32 2xl:w-40 relative h-8 md:h-12 lg:h-[46px] xl:h-12 2xl:h-14 outline-none bg-transparent border-none text-[8px] md:text-[12px] 2xl:text-sm font-bold text-white ">
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
                                );
                            })
                        }
                    </div>

                 
                </div>

                {/* pagination section  */}

                <div className=" opacity-95 ">
                    <div className=" flex gap-x-2 lg:gap-x-5 items-center justify-center">
                        <button
                            onClick={() => setmatrixCurrentpage(p => Math.max(p - 1, 1))}
                            disabled={matrixCurrentpage === 1}
                            className=" h-10 w-10 lg:h-12 lg:w-12 border border-[#ff5f1f] rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer disabled:opacity-40">
                            <FaArrowLeft className="text-sm lg:text-2xl text-[#ff5f1f]" />
                        </button>
                        <div className=" h-10 lg:h-12 w-56 lg:w-72 bg-[#ffff] rounded-full ">
                            <div className=" flex items-center justify-center h-full gap-x-3  ">

                                {
                                    Array.from({ length: matrixtotalpage }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setmatrixCurrentpage(i + 1)}
                                            className={`h-8 w-8 rounded-full text-lg font-bold 
                                                    ${matrixCurrentpage === i + 1
                                                    ? "bg-[#ff5f1f] text-white"
                                                    : "text-[#ff5f1f] shadow-md shadow-[#c04818] hover:bg-[#ff5f1f] hover:text-white"
                                                }`}>
                                            {i + 1}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <button
                            onClick={() => setmatrixCurrentpage(p => Math.min(p + 1, matrixtotalpage))}
                            disabled={matrixCurrentpage === matrixtotalpage}
                            className="h-10 w-10 lg:h-12 lg:w-12 border border-[#ff5f1f] rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer disabled:opacity-40">
                            <FaArrowRight className="text-sm lg:text-2xl text-[#ff5f1f]" />
                        </button>
                    </div>
                </div>

            </div>

            {/* Jackpot package  */}

            <div>
                <div className='  mt-5 gap-10 pb-5'>
                    <div className=" pt-7 space-y-2.5 pb-3">
                        <h3 className=" text-[#ffffff] text-2xl md:text-3xl lg:text-2xl xl:text-[40px] font-bold text-center md:text-start opacity-95">
                             Grand <AuroraText>Jackpot</AuroraText>
                        </h3>
                        <p className=" text-[#ffffff]  text-[12px] xl:text-[16px] font-normal text-center md:text-start opacity-95">
                            UNIVERSE Fortune Matrix targets medium-tier participants seeking higher prize pools
                            with fewer winners. It balances risk and reward through structured packages.
                        </p>
                    </div>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 md:mt-1 lg:mt-5 gap-2 gap-y-3 lg:gap-2.5 xl:gap-3 2xl:gap-5 pb-5'>
                        {
                            jackpotvisibalpackage.map((pak, index) => (

                                <div key={index} className="card group w-full h-60 md:h-80 lg:h-80 xl:h-[350px] 2xl:h-[420px] bg-[#180A3C] rounded-[10px] md:rounded-[12px] xl:rounded-2xl 2xl:rounded-[20px] relative overflow-hidden border border-[#FF5F1F] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-white hover:-translate-y-1.5 hover:shadow-[0_5px_5px_5px_rgba(255,255,255,0.167)] hover:border-white active:-translate-y-1.5 active:scale-98">

                                    <div
                                        className="card__glow absolute -inset-2.5 opacity-0 transition-opacity duration-500 ease-linear group-hover:opacity-[1] hidden md:block"
                                        style={{
                                            background:
                                                "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 70%)",
                                        }}>
                                    </div>

                                    <div className="card__content px-2.5 md:px-3.5 xl:px-5 pt-0.5 md:pt-1 lg:pt-0.5 xl:pt-2 h-full flex flex-col gap-[0.75em] relative z-10">
                                        <div className=" flex justify-between">
                                            <div className="card__badge absolute top-3 right-3 z-20 bg-[#FF5F1F] text-black px-[7px] py-1 rounded-[5px] text-[1em] font-semibold opacity-0 scale-90 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:scale-100">
                                                <div className="flex items-center gap-x-1">
                                                    <p className={`card__title ${smoochSans.className} lg:text-xl 2xl:text-2xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>
                                                        <BsEye className=" text-white" />
                                                    </p>
                                                    <p className={`card__title ${smoochSans.className} lg:text-base xl:text-lg 2xl:text-xl m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}>{pak.views}k</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__image h-[100px] md:h-[130px] lg:h-[150px] xl:h-[150px] 2xl:h-[200px] bg-[#ffffff] w-full rounded-[10px] xl:rounded-[11px] 2xl:rounded-[12px] relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
                                            <div
                                                className="absolute inset-0 opacity-100 pointer-events-none"
                                                style={{
                                                    background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%), repeating-linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0px, rgba(139, 92, 246, 0.1) 2px, transparent 2px, transparent 4px)`
                                                }}>
                                                <img src={pak?.image} alt={pak?.package_name} className="  h-full w-full object-cover" />
                                            </div>
                                        </div>

                                        <div className="card__text flex justify-between gap-1">
                                            <div>
                                                <p className={`card__title ${smoochSans.className} text-[16px] md:text-[22px] lg:text-[24px] xl:text-[25px] 2xl:text-3xl font-semibold text-white m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] leading-3.5 lg:leading-5 xl:leading-7`}>
                                                    {pak?.package_name}
                                                </p>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <div className="flex items-center gap-x-2">
                                                    <FaRegHeart
                                                        className={pak.wishlist
                                                            ? "text-orange-400 text-sm md:text-[16px] lg:text-lg xl:text-xl 2xl:text-4xl"
                                                            : "text-gray-400 text-sm md:text-[16px] lg:text-lg xl:text-xl 2xl:text-4xl"} />
                                                    <p className={`card__title ${smoochSans.className} text-xs md:text-[22px] lg:text-[22px] xl:text-2xl 2xl:text-3xl font-thin m-0 transition-all duration-300 ease-linear group-hover:text-[#ffffff] group-hover:translate-x-0.5`}> {pak.wishlist_views}k</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__footer justify-between items-center mt-auto">
                                            <div className="flex items-center justify-between">
                                                <div className="text-white font-bold text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-base  ">Winning Prize</div>
                                                <div className="text-white font-bold text-xs md:text-sm 2xl:text-base"> ${pak.winning_money}</div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-white font-bold text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-base">Ticket Prize</div>
                                                <div className="text-white font-bold text-xs md:text-sm xl:text-base">${pak.ticket_price}</div>
                                            </div>
                                            <div className="flex items-center justify-center mx-auto py-3 md:py-5 lg:py-3 xl:py-5">
                                                <button className="group w-20 md:w-28 lg:w-28 xl:w-32 2xl:w-40 relative h-8 md:h-12 lg:h-[46px] xl:h-12 2xl:h-14 outline-none bg-transparent border-none text-[8px] md:text-[12px] 2xl:text-sm font-bold text-white ">
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

                {/* pagination section  */}


                <div className=" opacity-95">
                    <div className=" flex gap-x-2 lg:gap-x-5 items-center justify-center">
                        <button
                            onClick={() => setCurrentpage(p => Math.max(p - 1, 1))}
                            disabled={currentpage === 1}
                            className=" h-10 w-10 lg:h-12 lg:w-12 border border-[#ff5f1f] rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer disabled:opacity-40">
                            <FaArrowLeft className="text-sm lg:text-2xl text-[#ff5f1f]" />
                        </button>
                        <div className=" h-10 lg:h-12 w-56 lg:w-72 bg-[#ffff] rounded-full ">
                            <div className=" flex items-center justify-center h-full gap-x-3  ">

                                {
                                    Array.from({ length: jackpottotalpage }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentpage(i + 1)}
                                            className={`h-8 w-8 rounded-full text-lg font-bold 
                                                    ${currentpage === i + 1
                                                    ? "bg-[#ff5f1f] text-white"
                                                    : "text-[#ff5f1f] shadow-md shadow-[#c04818] hover:bg-[#ff5f1f] hover:text-white"
                                                }`}>
                                            {i + 1}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <button
                            onClick={() => setCurrentpage(p => Math.min(p + 1, totalpage))}
                            disabled={currentpage === totalpage}
                            className="h-10 w-10 lg:h-12 lg:w-12 border border-[#ff5f1f] rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer disabled:opacity-40">
                            <FaArrowRight className="text-sm lg:text-2xl text-[#ff5f1f]" />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}
