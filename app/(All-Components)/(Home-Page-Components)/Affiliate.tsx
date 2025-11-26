'use client';

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate"
import { MdArrowForwardIos } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import React, { forwardRef, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { FaUserAlt } from "react-icons/fa"

import './(Home-Page-Css)/Refferal_Program.css'
import Image from "next/image";
import image21 from '../../../public/(home-page-image)/Refferal_Affiliate_Image/number-21_12234579.png'
import userimage from '../../../public/(home-page-image)/Refferal_Affiliate_Image/userimage.jpeg'
import lottoimage1 from '../../../public/(home-page-image)/Refferal_Affiliate_Image/lottoimage1 (1).png'
import lottoimage2 from '../../../public/(home-page-image)/Refferal_Affiliate_Image/lottoimage1 (2).png'
import lottoimage3 from '../../../public/(home-page-image)/Refferal_Affiliate_Image/lottoimage1 (3).png'
import lottoimage4 from '../../../public/(home-page-image)/Refferal_Affiliate_Image/lottoimage1 (4).png'
import lottoimage5 from '../../../public/(home-page-image)/Refferal_Affiliate_Image/lottoimage1 (5).png'





const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "flex size-20 items-center justify-center   z-40 p-0 ",
                className
            )}>
            {children}
        </div>
    )
})

Circle.displayName = "Circle"


export default function Affiliate() {




    const [refferal, setPrefferal] = useState<any[]>([]);
    React.useEffect(() => {
        fetch("/json-Files/home_json/refferal.json")
            .then((res) => res.json())
            .then(data => (
                setPrefferal(data)
            ))
    }, []);


    const containerRef = useRef<HTMLDivElement>(null)
    const divRefs = Array.from({ length: 7 }, () => useRef<HTMLDivElement>(null))


    return (
        <>

            {/* affilieate div  */}

            <div className=" opacity-95 pb-10 text-white relative overflow-hidden px-5  md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto">
                {/* Header */}
                <div className="text-center space-y-4 mb-16 px-4">
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-2xl xl:text-4xl">
                        <TextAnimate animation="slideLeft" by="character">
                            Instant Bonus & Affiliate Commission for Player
                        </TextAnimate>
                    </h3>
                    <p className="text-[#A5A3A8] text-[12px] md:text-[16px] lg:text-[12px] xl:text-[16px] font-semibold max-w-2xl mx-auto">
                        <TextAnimate animation="scaleUp" as="text">
                            Invite your friends and earn exclusive rewards. The more you refer, the more you earn!
                        </TextAnimate>
                    </p>
                </div>

                {/* just for mobile diagram  */}
                <div className=' md:hidden'>
                    <div className='   '>
                        {/* first section  */}
                        <div>
                            <BackgroundGradient className=' h-full w-full rounded-[22px] px-7 py-10 bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                                <h4 className=' text-lg  font-semibold text-[#00ECE2] text-center'>Referral Process</h4>
                                <h4 className=' text-[12px] font-normal text-[#ffffff] text-center'>Referrers must obtain a referral link.
                                    Invite friends to register using the referral link.</h4>
                            </BackgroundGradient>
                            <div className='flex '>
                                <p className="relative flex h-10 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#D9828A]  before:to-[#4B3881]">
                                </p>
                            </div>
                        </div>
                        <div>
                            <BackgroundGradient className=' h-full w-full rounded-[22px] px-7 py-10 bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                                <h4 className=' text-lg  font-semibold text-[#00ECE2] text-center'>Get 10% on Referral Bonus</h4>
                                <h4 className=' text-[12px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will receive an instant bonus as per the table below.
                                </h4>
                            </BackgroundGradient>
                            <div className='flex '>
                                <p className="relative flex h-10 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#D9828A]  before:to-[#4B3881]">
                                </p>
                            </div>
                        </div>
                        <div>
                            <BackgroundGradient className=' h-full w-full rounded-[22px] px-7 py-10 bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                                <h4 className=' text-lg  font-semibold text-[#00ECE2] text-center'>Just Connect Wallet</h4>
                                <h4 className=' text-[12px] font-normal text-[#ffffff] text-center'>Both the referrer and the referee must complete the ACCOUNT VERIFICATION process.</h4>
                            </BackgroundGradient>
                            <div className='flex '>
                                <p className="relative flex h-10 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#D9828A]  before:to-[#4B3881]">
                                </p>
                            </div>
                        </div>
                        <div>
                            <BackgroundGradient className=' h-full w-full rounded-[22px] px-7 py-10 bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                                <h4 className=' text-lg  font-semibold text-[#00ECE2] text-center'>Registration</h4>
                                <h4 className=' text-[12px] font-normal text-[#ffffff] text-center'>Members who register via the referral link will complete the Referral Process. The referee can check their status at [My Referrer].</h4>
                            </BackgroundGradient>
                            <div className='flex '>
                                <p className="relative flex h-10 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#D9828A]  before:to-[#4B3881]">
                                </p>
                            </div>
                        </div>
                        <div>
                            <BackgroundGradient className=' h-full w-full rounded-[22px] px-7 py-10 bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                                <h4 className=' text-lg  font-semibold text-[#00ECE2] text-center'>Monthly Accumulation</h4>
                                <h4 className=' text-[12px] font-normal text-[#ffffff] text-center'>The system will accumulate the ticketing amount from the referee monthly. From each draw, both the referrer and referee will receive the monthly bonus</h4>
                            </BackgroundGradient>
                        </div>
                        {/* button section  */}
                        <div className="flex gap-4 mt-10 items-center justify-center">
                            <div className="p-0 lg:p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                                <Button className="w-28  lg:w-40 h-6 lg:h-12 rounded-full text-center text-[10px] lg:text-lg text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                    Refer a friend
                                </Button>
                            </div>
                            <div className="p-0 lg:p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                                <Button className="w-28 lg:w-40 h-6 lg:h-12 rounded-full text-center text-[10px] lg:text-lg text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                    Play
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tab and desktop Diagram */}
                <div className=' hidden md:block'>
                    <div className=' flex  justify-center gap-x-5 lg:gap-x-9'>
                        {/* first section  */}
                        <div>
                            <BackgroundGradient className=' h-[120px] lg:h-36 xl:h-44 2xl:h-56 w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                                <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#00ECE2] text-center'>Referral Process</h4>
                                <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>Referrers must obtain a referral link.
                                    Invite friends to register using the referral link.</h4>
                            </BackgroundGradient>
                            <div className='flex '>
                                <p className="relative flex h-10 lg:h-20 xl:h-24 2xl:h-40 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#D9828A]  before:to-[#4B3881]">
                                </p>
                            </div>
                        </div>
                        <div>
                            <BackgroundGradient className='  h-[120px] lg:h-36 xl:h-44 2xl:h-56 w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                                <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#00ECE2] text-center'>Get 10% on Referral Bonus</h4>
                                <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will receive an instant bonus as per the table below.</h4>
                            </BackgroundGradient>
                            <div className='flex '>
                                <p className="relative flex h-10 lg:h-20 xl:h-24 2xl:h-40 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-linear-to-b before:from-[#D9828A]  before:to-[#4B3881]">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative w-[70%] mx-auto flex justify-between h-10 lg:h-20 xl:h-24 2xl:h-40  dark:bg-gray-900  rounded-[10px]"
                        style={{
                            borderTop: '4px solid',
                            borderLeft: '4px solid',
                            borderRight: '4px solid',
                            borderImage: 'linear-gradient(to right, #D9828A, #4B3881, #D9828A) 1',
                        }}>
                        {/* Content */}
                        <div className="flex items-center justify-center mx-auto">
                            <p className="relative flex h-10 lg:h-20 xl:h-24 2xl:h-40 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-linear-to-b before:from-[#D9828A]  before:to-[#4B3881]">
                            </p>
                        </div>
                    </div>
                    <div className=' flex gap-x-5 lg:gap-x-10 items-center justify-between'>
                        <BackgroundGradient className=' h-[120px] lg:h-36 xl:h-44 2xl:h-56 w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                            <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#00ECE2] text-center'>Get 10% on Referral Bonus</h4>
                            <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will receive an instant bonus as per the table below.</h4>
                        </BackgroundGradient>
                        <BackgroundGradient className=' h-[120px] lg:h-36 xl:h-44 2xl:h-56 w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                            <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#00ECE2] text-center'>Get 10% on Referral Bonus</h4>
                            <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will receive an instant bonus as per the table below.</h4>
                        </BackgroundGradient>
                        <BackgroundGradient className='h-[120px] lg:h-36 xl:h-44 2xl:h-56 w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                            <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#00ECE2] text-center'>Get 10% on Referral Bonus</h4>
                            <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will receive an instant bonus as per the table below.</h4>
                        </BackgroundGradient>
                    </div>

                    {/* button div  */}

                    <div className="flex gap-4 mt-10 items-center justify-center">
                        <div className="p-px lg:p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                            <Button className="w-20  md:w-40 lg:w-32 xl:w-40 h-6 md:h-12 lg:h-8 xl:h-10 2xl:h-12 rounded-full text-center text-[10px] md:text-lg lg:text-[10px] xl:text-sm 2xl:text-lg text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                Refer a friend
                            </Button>
                        </div>
                        <div className="p-px lg:p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                            <Button className="w-20  md:w-40 lg:w-32 xl:w-40 h-6 md:h-12 lg:h-8 xl:h-10 2xl:h-12 rounded-full text-center text-[10px] md:text-lg lg:text-[10px] xl:text-sm 2xl:text-lg text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                Play
                            </Button>
                        </div>
                    </div>
                </div>
            </div>



            {/* refferal div  */}

            <div>
                {/* Header text */}
                <div className="text-center space-y-4 mb-10 px-4">
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-2xl xl:text-4xl opacity-95">
                        <TextAnimate animation="scaleUp" by="text" className=" text-white">
                            Referral Program - Boost Your Earnings
                        </TextAnimate>
                    </h3>
                    <p className="text-[#ffffff] text-[16px] font-semibold max-w-2xl mx-auto w-full md:w-[65%] opacity-95">
                        <TextAnimate animation="blurIn" as="h1">
                            Start play with confidence. Our team is here to provide you with the guidance and support you need to make the most of your investments.
                        </TextAnimate>
                    </p>
                </div>
                {/* button section  */}
                <div className=' mx-auto mb-10 opacity-95'>
                    <div className=' w-full md:w-[70%] h-4 md:h-7 xl:h-14 mx-auto grid grid-cols-2  rounded-full shadow-[0_10px_15px_-3px_rgba(33,150,243,0.4),0_4px_6px_-4px_rgba(33,150,243,0.4)]' >
                        <div>
                            <h3 className=' text-[7px] md:text-[12px] xl:text-[16px] flex items-center justify-center text-center w-full h-full text-white border-r-2'>Copy Referral Link & Send To Affiliate Partner</h3>
                        </div>
                        <div>
                            <h3 className=' text-[7px] md:text-[12px] xl:text-[16px] flex items-center justify-center text-center w-full h-full text-white'>Check Your Level Income From The Play</h3>
                           
                        </div>


                    </div>
                </div>
                {/* animated refferal beam  */}

                <div
                    className={cn(
                        "relative flex h-full w-full items-center justify-center overflow-hidden pl-28 pr-28 py-10",
                    )} ref={containerRef}>
                    <div className="flex size-full  items-stretch justify-between gap-10 pr-36">
                        <div className="flex flex-col justify-center relative ">
                            <Circle ref={divRefs[6]} className=" h-full w-full object-cover">
                                <div
                                    style={{ backgroundImage: "url('/(home-page-image)/Refferal_Affiliate_Image/pngwing.com (7).png')", }}
                                    className="item-hints cursor-pointer  z-50 bg-cover bg-center h-60 w-60 rounded-xl bottom-80">
                                    <div className="hint relative z-40 " data-position="4">
                                        {/* <div className="hint-content do--split-children w-80 absolute py-9 opacity-0 z-40">
                                        <p className="text-white">Use Navbar to navigate the website quickly and easily.</p>
                                        </div> */}
                                    </div>
                                </div>
                            </Circle>
                        </div>

                        <div className="flex flex-col justify-center -ml-28">
                            <div className=" relative z-40">
                                <div className="relative z-40" data-position="4">
                                    <span className=" text-white">
                                        <Circle ref={divRefs[5]} className="size-24">
                                            <div className=" w-[100px] h-[100px] border-2 border-[#2155F9] rounded-[70%_30%_30%_70%/70%_70%_30%_30%] bg-linear-to-tl from-[#0143A9] to-[#091C7F] flex items-center justify-center opacity-100">
                                                <h3 className=' text-3xl font-extrabold text-white pl-3'>21%</h3>
                                            </div>
                                        </Circle>
                                    </span>
                                    <div className="hint-content do--split-children w-80 absolute py-9 opacity-0 z-40">
                                        <p className="text-white">Use Navbar to navigate the website quickly and easily.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-3 ">
                            {refferal.map((data, index) => (
                                <div key={index}>
                                    <div className="item-hints cursor-pointer relative ">
                                        <div className="hint relative z-10" data-position="4">
                                            <span className="hint-do text-white z-50">
                                                <Circle ref={divRefs[index]}>
                                                    <div className=" w-full h-full   border-2 border-[#2155F9] rounded-[70%_30%_30%_70%/70%_70%_30%_30%] bg-linear-to-tl from-[#0143A9] to-[#091C7F] flex items-center justify-center opacity-100">
                                                        <h3 className=' text-2xl font-extrabold text-white pl-3'>{data.Parcentage}</h3>
                                                    </div>
                                                </Circle>
                                            </span>
                                            <div className="hint-content do--split-children w-80 absolute py-9 opacity-0 z-40">
                                                <p className="text-white text-sm">{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* AnimatedBeams */}
                    {divRefs.slice(0, 5).map((fromRef, i) => (
                        <AnimatedBeam
                            key={i}
                            containerRef={containerRef}
                            fromRef={fromRef}
                            toRef={divRefs[5]} // 21% circle
                            duration={3}
                            gradientStartColor="#FF5F1F"
                            gradientStopColor="#FFE500"
                        />
                    ))}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={divRefs[5]}
                        toRef={divRefs[6]}
                        duration={3}
                        gradientStartColor="#FF5F1F"
                        gradientStopColor="#ffffff"
                    />
                </div>
            </div>
        </>
    );
}
