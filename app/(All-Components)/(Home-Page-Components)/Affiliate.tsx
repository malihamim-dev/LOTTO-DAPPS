'use client';

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate"
import React, { forwardRef, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import './(Home-Page-Css)/Refferal_Program.css'
import Link from "next/link";
import Connect_Wallet from "../(Shard-Component)/Connect_Wallet";





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

    const [showWallet, setShowWallet] = useState(false);


    return (
        <div className=" opacity-95 pb-10 md:pb-20 text-white relative overflow-hidden px-5  md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto">
            {/* Header */}
            <div className="text-center space-y-4 mb-16 px-4">
                <h3 className="">
                    <TextAnimate animation="slideLeft" by="character" className=" font-bold text-2xl md:text-3xl lg:text-2xl xl:text-4xl">
                        Instant Bonus & Affiliate Commission for Player
                    </TextAnimate>
                </h3>
                <p className="text-[#ffffff] text-[12px] md:text-[16px] lg:text-[12px] xl:text-[16px] font-semibold max-w-2xl mx-auto">
                    <TextAnimate animation="scaleUp" as="text">
                        Invite your friends and earn exclusive rewards. The more you refer, the more you earn!
                    </TextAnimate>
                </p>
            </div>

            {/* just for mobile diagram  */}
            <div className=' md:hidden'>
                <div className='   '>
                    {/* first section  */}
                    <div className=" w-[300px] h-full md:w-full mx-auto ">
                        <BackgroundGradient className='rounded-[22px] px-7 py-5  bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                            <h4 className='  text-[16px] font-semibold text-[#ffffff] text-center'>Referral Process</h4>
                            <h4 className=' text-[10px] font-normal text-[#ffffff] text-center'>Referrers must obtain a referral link.
                                Invite friends to register using the referral link.</h4>
                        </BackgroundGradient>
                        <div className='flex '>
                            <p className="relative flex h-10 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#FF5F1F]  before:to-[#4B3881]">
                            </p>
                        </div>
                    </div>
                    <div className=" w-[300px] h-full md:w-full mx-auto ">
                        <BackgroundGradient className=' rounded-[22px] px-7 py-7 bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                            <h4 className=' text-[16px]  font-semibold text-[#ffffff] text-center'>Get 10% on Referral Bonus</h4>
                            <h4 className=' text-[10px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will receive an instant bonus as per the table below.
                            </h4>
                        </BackgroundGradient>
                        <div className='flex '>
                            <p className="relative flex h-10 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#FF5F1F]  before:to-[#4B3881]">
                            </p>
                        </div>
                    </div>
                    <div className=" w-[300px] h-full md:w-full mx-auto ">
                        <BackgroundGradient className=' rounded-[22px] px-7 py-7 bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                            <h4 className=' text-[16px] font-semibold text-[#ffffff] text-center'>Just Connect Wallet</h4>
                            <h4 className=' text-[10px] font-normal text-[#ffffff] text-center'>Both the referrer and the referee must complete the ACCOUNT VERIFICATION process.</h4>
                        </BackgroundGradient>
                        <div className='flex '>
                            <p className="relative flex h-10 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#FF5F1F]  before:to-[#4B3881]">
                            </p>
                        </div>
                    </div>
                    <div className=" w-[300px] h-full md:w-full mx-auto ">
                        <BackgroundGradient className=' rounded-[22px] px-7 py-7 bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                            <h4 className=' text-[16px] font-semibold text-[#ffffff] text-center'>Registration</h4>
                            <h4 className=' text-[10px] font-normal text-[#ffffff] text-center'>Members who register via the referral link will complete the Referral Process. The referee can check their status at [My Referrer].</h4>
                        </BackgroundGradient>
                        <div className='flex '>
                            <p className="relative flex h-10 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#FF5F1F]  before:to-[#4B3881]">
                            </p>
                        </div>
                    </div>
                    <div className=" w-[300px] h-full md:w-full mx-auto ">
                        <BackgroundGradient className=' h-full w-full rounded-[22px] px-7 py-7 bg-[#180A3C] dark:bg-zinc-900 space-y-3'>
                            <h4 className=' text-[16px] font-semibold text-[#ffffff] text-center'>Monthly Accumulation</h4>
                            <h4 className=' text-[10px] font-normal text-[#ffffff] text-center'>The system will accumulate the ticketing amount from the referee monthly. From each draw, both the referrer and referee will receive the monthly bonus</h4>
                        </BackgroundGradient>
                    </div>
                    {/* button section  */}
                    <div className="flex gap-4 mt-10 items-center justify-center">
                        <div className="p-0 lg:p-0.5 rounded-full shadow-2xl inline-block bg-none">
                            <Link href={"/Reffer-And-Earn"}>
                                <Button

                                    className="w-28  lg:w-40 h-6 lg:h-12 rounded-full text-center text-[10px] lg:text-lg text-white border border-[#FF5F1F] bg-black/5 backdrop-blur-md hover:border-none hover:bg-[#FF5F1F] hover:scale-110 cursor-pointer">
                                    Refer a friend
                                </Button>

                            </Link>
                        </div>
                        <div className="p-0 lg:p-0.5 rounded-full shadow-2xl inline-block bg-none">
                            <Button
                                onClick={() => setShowWallet(true)}
                                className="w-28  lg:w-40 h-6 lg:h-12 rounded-full text-center text-[10px] lg:text-lg text-white border border-[#FF5F1F] bg-black/5 backdrop-blur-md hover:border-none hover:bg-[#FF5F1F] hover:scale-110 cursor-pointer">
                                Play
                            </Button>
                            {showWallet && <Connect_Wallet onClose={() => setShowWallet(false)} />}
                        </div>
                    </div>
                </div>
            </div>

            {/* tab and desktop Diagram */}
            <div className=' hidden md:block'>
                <div className=' flex  justify-center gap-x-5 lg:gap-x-9'>
                    {/* first section  */}
                    <div>
                        <BackgroundGradient className=' h-[120px] lg:h-36 xl:h-full 2xl:h-full w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                            <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#ffffff] text-center'>Referral Process</h4>
                            <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>Referrers must obtain a referral link.
                                Invite friends to register using the referral link.</h4>
                        </BackgroundGradient>
                        <div className='flex '>
                            <p className="relative flex h-10 lg:h-20 xl:h-24 2xl:h-40 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#FF5F1F]  before:to-[#4B3881]">
                            </p>
                        </div>
                    </div>
                    <div>
                        <BackgroundGradient className='  h-[120px] lg:h-36 xl:h-full 2xl:h-full w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                            <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#ffffff] text-center'>Get 10% on Referral Bonus</h4>
                            <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will </h4>
                        </BackgroundGradient>
                        <div className='flex '>
                            <p className="relative flex h-10 lg:h-20 xl:h-24 2xl:h-40 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-linear-to-b before:from-[#FF5F1F]  before:to-[#4B3881]">
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
                        borderImage: 'linear-gradient(to right, #FF5F1F, #4B3881, #FF5F1F) 1',
                    }}>
                    {/* Content */}
                    <div className="flex items-center justify-center mx-auto">
                        <p className="relative flex h-10 lg:h-20 xl:h-24 2xl:h-40 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-linear-to-b before:from-[#FF5F1F]  before:to-[#4B3881]">
                        </p>
                    </div>
                </div>
                <div className=' flex gap-x-5 lg:gap-x-10 items-center justify-between'>
                    <BackgroundGradient className=' h-[120px] lg:h-36 xl:h-44 2xl:h-56 w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                        <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#ffffff] text-center'>Get 10% on Referral Bonus</h4>
                        <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will receive an instant bonus as per the table below.</h4>
                    </BackgroundGradient>
                    <BackgroundGradient className=' h-[120px] lg:h-36 xl:h-44 2xl:h-56 w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                        <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#ffffff] text-center'>Get 10% on Referral Bonus</h4>
                        <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will receive an instant bonus as per the table below.</h4>
                    </BackgroundGradient>
                    <BackgroundGradient className='h-[120px] lg:h-36 xl:h-44 2xl:h-56 w-52 lg:w-72 xl:w-80 2xl:w-96 rounded-[22px] p-4  bg-[#180A3C] dark:bg-zinc-900 space-y-5'>
                        <h4 className=' text-[12px] lg:text-[16px] xl:text-xl 2xl:text-2xl font-semibold text-[#ffffff] text-center'>Get 10% on Referral Bonus</h4>
                        <h4 className=' text-[8px] lg:text-[10px] xl:text-sm 2xl:text-[16px] font-normal text-[#ffffff] text-center'>When the referred friend makes their first successful buy the ticket, the referrer will receive an instant bonus as per the table below.</h4>
                    </BackgroundGradient>
                </div>

                {/* button div  */}

                <div className="flex gap-4 mt-10 items-center justify-center">
                    <div className="p-px lg:p-0.5 rounded-full bg-none">
                        <Link href={"/Reffer-And-Earn"}>
                            <Button className="w-20  md:w-40 lg:w-32 xl:w-40 h-6 md:h-12 lg:h-8 xl:h-10 2xl:h-12 rounded-full text-center text-[10px] md:text-lg lg:text-[10px] xl:text-sm 2xl:text-lg text-white border border-[#FF5F1F] bg-black/5 backdrop-blur-md hover:border-none hover:bg-[#FF5F1F] hover:scale-110 cursor-pointer">
                                Refer a friend
                            </Button>
                        </Link>
                    </div>
                    <div className="p-px lg:p-0.5 rounded-full bg-none">
                    
                            <Button 
                             onClick={() => setShowWallet(true)}
                            className="w-20  md:w-40 lg:w-32 xl:w-40 h-6 md:h-12 lg:h-8 xl:h-10 2xl:h-12 rounded-full text-center text-[10px] md:text-lg lg:text-[10px] xl:text-sm 2xl:text-lg text-white border border-[#FF5F1F] bg-black/5 backdrop-blur-md hover:border-none hover:bg-[#FF5F1F] hover:scale-110 cursor-pointer">
                                Play
                            </Button>
                        {showWallet && <Connect_Wallet onClose={() => setShowWallet(false)} />}
                    </div>
                </div>
            </div>
        </div >
    );
}
