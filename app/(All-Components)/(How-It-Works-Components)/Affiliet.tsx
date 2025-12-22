
'use client';
import React, { useState } from 'react';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate"
import Connect_Wallet from '../(Shard-Component)/Connect_Wallet';



export default function Affiliet() {


    const [showWallet, setShowWallet] = useState(false);


    return (
        <div className=" text-white relative overflow-hidden px-5 pb-20 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95">
            {/* Header */}
            <div className="text-center space-y-4 mb-16 px-4">
                <h3 className="text-xl md:text-3xl lg:text-[28px] xl:text-4xl font-semibold text-white text-center">
                    <TextAnimate animation="slideLeft" by="character">
                        Instant Bonus & Affiliate Commission for Player
                    </TextAnimate>
                </h3>
                <p className="text-[#A5A3A8] text-xs lg:text-[12px] xl:text-[16px] font-semibold max-w-2xl mx-auto">
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
                            <p className="relative flex h-10 lg:h-20 xl:h-24 2xl:h-40 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#D9828A]  before:to-[#4B3881]">
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-[70%] mx-auto flex justify-between h-10 lg:h-20 xl:h-24 2xl:h-40 rounded-2xl dark:bg-gray-900  "
                    style={{
                        borderTop: '4px solid',
                        borderLeft: '4px solid',
                        borderRight: '4px solid',
                        borderImage: 'linear-gradient(to right, #D9828A, #4B3881, #D9828A) 1',
                    }}>
                    {/* Content */}
                    <div className="flex items-center justify-center mx-auto">
                        <p className="relative flex h-10 lg:h-20 xl:h-24 2xl:h-40 items-center justify-center mx-auto bg-white dark:bg-gray-900 rounded-md
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px]
                                before:bg-linear-to-b before:from-[#D9828A]  before:to-[#4B3881]">
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
                {/* button section  */}
                <div className="flex gap-4 mt-10 items-center justify-center">
                    <div className="p-px lg:p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                        <Button className="w-20  md:w-40 lg:w-32 xl:w-40 h-6 md:h-12 lg:h-8 xl:h-10 2xl:h-12 rounded-full text-center text-[10px] md:text-lg lg:text-[10px] xl:text-sm 2xl:text-lg text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                            Refer a friend
                        </Button>
                    </div>
                    <div className="p-px lg:p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                        <Button
                          onClick={() => setShowWallet(true)}
                            className="w-20  md:w-40 lg:w-32 xl:w-40 h-6 md:h-12 lg:h-8 xl:h-10 2xl:h-12 rounded-full text-center text-[10px] md:text-lg lg:text-[10px] xl:text-sm 2xl:text-lg text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4] cursor-pointer">
                            Play
                        </Button>
                         {showWallet && <Connect_Wallet onClose={() => setShowWallet(false)} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
