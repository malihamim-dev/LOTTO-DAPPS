'use client';
import React, { useEffect, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";
import Lottie from "lottie-react";
import { Button } from '@/components/ui/button';
import { TextAnimate } from "@/components/ui/text-animate"

import blocchain_crypto from '../../../public/(Lotty_files)/(home-lotty)/Winning_Universe_Hero_Lotty/Blockchain  Crypto.json';
import crypto_Wallet from '../../../public/(Lotty_files)/(home-lotty)/Winning_Universe_Hero_Lotty/Crypto Wallet.json';
import gift_box_effect from '../../../public/(Lotty_files)/(home-lotty)/Winning_Universe_Hero_Lotty/Gift box effect.json';
import robot from '../../../public/(Lotty_files)/(home-lotty)/Winning_Universe_Hero_Lotty/Robot assistant  Online manager.json';


export default function Connecting_Section() {
    return (
        <>
            <style jsx>
                {`
                @property --border-angle {
                syntax: "<angle>"; 
                initial-value: 0deg;
                inherits: false;
                }
                @keyframes border-rotate {
                from {
                    --border-angle: 0deg;
                }
                to {
                    --border-angle: 360deg;
                }
                }
                `}
            </style>

            <div className=" px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28  py-10 overflow-hidden max-w-[1596px] mx-auto">
                {/* Animated Border Card */}
                <div
                    className="relative p-5 w-full rounded-[30px] border-4 border-transparent bg-[#1B0C41] py-10 grid md:grid-cols-3"
                    style={{ "--bg": "hsl(190deg 20% 10%)", animation: "border-rotate 4s linear infinite", background: "linear-gradient(#1B0C41, #1B0C41) padding-box, conic-gradient(from var(--border-angle), var(--bg) 50%, #463481, #D9828A, #463481) border-box", }}>
                    {/* left section  */}
                    <div className='hidden md:block'>
                        <div className=" md:flex items-center justify-end px-5 lg:px-10 h-full">
                            <div className="flex flex-col items-end justify-center gap-5">
                                <Lottie animationData={crypto_Wallet} className="h-60 md:h-40" loop />
                                <Lottie animationData={gift_box_effect} className="h-60 md:h-40" loop />
                            </div>
                        </div>
                    </div>
                    {/* 🎯 Main Content */}

                    {/* middle section  */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className=" space-y-3 lg:space-y-5 text-center">
                            <div className=''>
                                <div className=' mt-0 md:mt-10'>
                                    <h3 className=" text-[10px] md:text-xl lg:text-4xl font-medium text-white text-center">
                                        <TextAnimate animation="blurIn" as="h1">
                                            Join As Universe Lotto Player
                                        </TextAnimate>
                                    </h3>
                                </div>
                            </div>
                            <h2 className=" text-sm md:text-2xl lg:text-5xl font-semibold text-white">
                            </h2>
                            <div className=" space-y-3 md:space-y-6 mt-10">
                                {/* Stats cards */}
                                {[
                                    { icon: <FaUsers className="text-white text-lg md:text-3xl lg:text-5xl" />, label: "Players", value: "200000+" },
                                    { icon: <FaTicket className="text-[#FF6A00] text-lg md:text-3xl lg:text-5xl" />, label: "Tickets Sold", value: "1300000+" },
                                    { icon: <LuDollarSign className="text-[#FFD700] text-lg md:text-3xl lg:text-5xl" />, label: "Total Prize Given", value: "50000000+" },
                                ].map((item, idx) => (
                                    <div key={idx} className="border-2 bg-linear-to-r from-[#dc838a] to-[#433281] w-32 h-10 md:h-14 lg:h-20 md:w-52  lg:w-96 p-2 px-5 rounded-lg md:rounded-2xl mx-auto">
                                        <div className="flex items-center justify-center gap-x-5 text-white">
                                            <div>{item.icon}</div>
                                            <div>
                                                <p className="text-[10px] md:text-lg lg:text-3xl font-medium">{item.value}</p>
                                                <p className=" text-[7px] md:text-[10px] lg:text-[16px] font-normal">{item.label}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* 🎮 Play Now Button */}
                                <div className="flex justify-center">
                                    <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl">
                                        <Button className=" h-5 w-20 md:h-10 lg:h-16 md:w-28 lg:w-52 rounded-full text-[10px] md:text-[16px] lg:text-lg xl:text-3xl text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4] flex items-center justify-center">
                                            Play Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right section  */}

                    <div className=' hidden md:block'>
                        <div className=" md:flex items-center justify-start px-5 lg:px-10 h-full">
                            {/* Right side */}
                            <div className="flex flex-col items-end  gap-5">
                                <Lottie animationData={blocchain_crypto} className=" h-60 md:h-40" loop />
                                <Lottie animationData={robot} className=" h-60 md:h-40 lg:-pl-10" loop />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
