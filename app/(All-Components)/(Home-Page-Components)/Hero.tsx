"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "next-themes";
import Lottie from "lottie-react";
import { NumberTicker } from "@/components/ui/number-ticker"
import { EncryptedText } from "@/components/ui/encrypted-text";
import { FlipWords } from "@/components/ui/flip-words";
import bitconCryptocurrency from '../../../public/(Lotty_files)/(home-lotty)/Play_And_win_Section_sec_lotty/Bitcoin Cryptocurrency city.json'


export default function Hero() {
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");


    useEffect(() => {
        setColor(resolvedTheme === "white" ? "#ffffff" : "#ffffff");
    }, [resolvedTheme]);


    const words = ["Blockchain", "Oracal", "Openzeepline"];



    return (
        <div className="relative h-full md:h-[360px] lg:h-full pb-10  overflow-hidden max-w-[1596px] mx-auto ">
            {/* Background Effects */}
            <Meteors number={100} />
            <Particles className="absolute inset-0 z-0" quantity={100} color={color} refresh />

            {/* Foreground Content */}
            <div className="relative z-10 md:grid md:grid-cols-2 md:items-center md:justify-center px-5  md:px-8 lg:px-10 xl:px-20 2xl:px-28 md:gap-x-20 flex flex-col-reverse pb-10 md:pb-0 py-10 lg:py-0" >
                {/* Left Side */}
                <div className=" space-y-2 md:space-y-8">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-4xl xl:text-[56px] font-bold text-center md:text-start">
                        <EncryptedText
                            text="The Future of Lottery"
                            encryptedClassName="text-neutral-500"
                            className="text-white"
                            revealDelayMs={50} />
                    </h1>
                    <p className="text-[#D0CED5] font-light text-sm lg:text-lg xl:text-3xl text-center md:text-start">
                        - Powered by
                        <FlipWords words={words} className=" text-white font-semibold" />
                    </p>
                    <div className="flex gap-4 items-center justify-center md:items-start md:justify-start">
                        <div className="p-[1px] lg:p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                            <Button className="w-20 lg:w-28 xl:w-40 h-6.5 lg:h-9 xl:h-12 rounded-full text-center text-[10px] lg:text-[12px] xl:text-lg text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                Play Now
                            </Button>
                        </div>
                        <div className="p-[1px] lg:p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                            <Button className="w-20 lg:w-28 xl:w-40 h-6.5 lg:h-9 xl:h-12 rounded-full text-center text-[10px] lg:text-[12px] xl:text-lg text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className=" flex items-center justify-center md:flex-none md:items-start md:justify-start">
                        <div className="grid grid-cols-3 mt-5 md:mt-5 lg:mt-10 gap-x-5">
                            <div className=" space-y-2">
                                <div className="text-lg lg:text-2xl xl:text-4xl text-[#ffffff]">
                                    <span>
                                        <NumberTicker value={200} className="text-[#ffffff]" />
                                    </span>
                                    <span>
                                        +
                                    </span>
                                </div>
                                <div className="text-[10px] xl:text-sm text-[#FF5F1F]">Premium members</div>
                            </div>
                            <div className=" space-y-2">
                                <div className="text-lg lg:text-2xl xl:text-4xl text-[#ffffff]">
                                    <span>
                                        <NumberTicker value={5000} className="text-[#ffffff]" />
                                    </span>
                                    <span>
                                        +
                                    </span>
                                </div>
                                <div className="text-[10px] xl:text-sm text-[#FF5F1F]">Active Users</div>
                            </div>
                            <div className=" space-y-2">
                                <div className="text-lg lg:text-2xl xl:text-4xl text-[#ffffff]">
                                    <span>
                                        <NumberTicker value={200} className="text-[#ffffff]" />
                                    </span>
                                    <span>
                                        +
                                    </span>
                                </div>
                                <div className="text-[10px] xl:text-sm text-[#FF5F1F]">Winners Weekly</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="relative md:flex justify-center items-center hidden md:block">
                    <Lottie animationData={bitconCryptocurrency} loop={true} className="" />
                </div>
            </div>
        </div>
    );
}