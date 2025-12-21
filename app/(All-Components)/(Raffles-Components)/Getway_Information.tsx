

'use client'

import React from 'react'
import Lottie from "lottie-react";
import { Button } from '@/components/ui/button';
import walletlotty from '@/public/(Lotty_files)/(Reffles-lotty)/Gatway-Indepth-lotty-json/Crypto Wallet.json'
import { RainbowButton } from '@/components/ui/rainbow-button';
import { IoArrowForward } from 'react-icons/io5';
import { BsCloudDownload } from "react-icons/bs";
import { BorderBeam } from '@/components/ui/border-beam';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"


const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];

export default function Getway_Information() {
    return (
        <div className=' px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20'>
            {/* header text section  */}
            <div className=' md:flex md:justify-between items-center'>
                <div>
                    <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                        <Button className=" h-10 rounded-full text-center text-xs md:text-sm xl:text-lg text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                            Your Gateway to In-Depth Information
                        </Button>
                    </div>
                    <div className=' pt-6'>
                        <h1 className=' text-xl md:text-2xl lg:text-3xl xl:text-5xl font-medium leading-6 md:leading-7 lg:leading-8 xl:leading-14 text-white w-[60%]'>
                            Unlock Mega Millions Jackpot with Universe Lotto
                        </h1>
                    </div>
                </div>
                <div>
                    <div className=' mt-5 md:mt-0'>
                        <RainbowButton variant="outline" className=' text-xs xl:text-[16px] font-semibold h-10 rounded-full'> View all Universe Lotto <span className=' text-lg'><IoArrowForward /></span></RainbowButton>
                    </div>
                </div>
            </div>

            {/* main section  */}

            <div className=' grid md:grid-cols-12 pt-10 gap-x-5 lg:gap-x-20 mt-5 md:mt-10 '>
                {/* left site  */}
                <div className=' md:col-span-5'>
                    <div className=' flex justify-start md:mx-10 '>
                        <Lottie animationData={walletlotty} className='h-20 lg:h-24 xl:h-32 ' loop={true} />;
                    </div>
                    <div>
                        <h1 className=' text-white text-2xl lg:text-3xl xl:text-[40px] font-semibold mt-5 md:mt-10'>Whitepapers</h1>
                    </div>
                    <div className=' mt-5 lg:mt-10'>
                        <p className=' text-[#98989A] text-xs lg:text-sm xl:text-lg font-medium'>Dive into comprehensive reports and analyses with our collection of whitepapers. </p>
                    </div>
                    <div className='mt-5 lg:mt-10'>
                        <RainbowButton variant="outline" className=' text-xs xl:text-[16px] font-semibold h-10 rounded-full'> Download Whitepapers Now <span className=' text-2xl gap-x-2'><BsCloudDownload /></span></RainbowButton>
                    </div>
                    <div className=' mt-7'>
                        <div className='h-32 w-full bg-[#0C042C] px-5 xl:px-10 rounded-2xl relative flex  items-center justify-between '>
                            <BorderBeam duration={8} size={100} />
                            <div className=' col-span-1'>
                                <p className=' text-[16px] xl:text-lg font-normal text-[#98989A]'>Downloaded By</p>
                                <h5 className='text-white font-semibold text-lg xl:text-2xl'>10k + Users</h5>
                            </div>
                            <div className=' col-span-2'>
                                <div className="flex  items-center justify-center w-full">
                                    <AnimatedTooltip items={people} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-3 md:mt-7'>
                        <div className='h-32 w-full bg-[#0C042C] px-5 xl:px-10 rounded-2xl relative flex  items-center justify-between '>
                            <BorderBeam duration={8} size={100} />
                            <div className=' col-span-1'>
                                <p className=' text-[16px] xl:text-lg font-normal text-[#98989A]'>Downloaded By</p>
                                <h5 className='text-white font-semibold text-lg xl:text-2xl'>10k + Users</h5>
                            </div>
                            <div className=' col-span-2'>
                                <div className="flex  items-center justify-center w-full">
                                    <AnimatedTooltip items={people} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right site  */}
                <div className=' md:col-span-7 mt-3 md:mt-0'>
                    <div className=' flex md:block lg:flex md:gap-x-3 lg:gap-x-10 items-center'>
                        <h3 className=' text-[10px] md:text-sm lg:text-lg xl:text-2xl font-semibold text-white'>Topics Coverage</h3>
                        <p className=' text-[7px] md:text-[10px] lg:text-sm xl:text-lg font-normal text-[#98989A] w-[70%]'>
                            Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).
                        </p>
                    </div>
                    {/* video section  */}
                    <div className="relative mt-10 block">
                        <HeroVideoDialog
                            className="block dark:hidden w-full h-full"
                            animationStyle="from-center"
                            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                            thumbnailAlt="Hero Video"
                        />
                        <HeroVideoDialog
                            className="hidden dark:block w-full h-full"
                            animationStyle="from-center"
                            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                            thumbnailAlt="Hero Video"
                        />
                    </div>
                    {/* button section  */}
                    <div className=' 2xl:flex items-center justify-between'>
                        <div className=' mt-3 xl:mt-10'>
                            <div className='h-32 w-full bg-[#0C042C] px-10 md:px-3 lg:px-5 xl:px-10 rounded-2xl relative flex  items-center justify-between '>
                                <BorderBeam duration={8} size={100} />
                                <div className=' col-span-1'>
                                    <p className=' text-xs lg:text-sm xl:text-[16px] 2xl:text-lg font-normal text-[#98989A]'>Total Whitepapers</p>
                                    <h5 className='text-white font-semibold text-sm lg:text-xl'>Over 50 whitepapers</h5>
                                </div>
                                <div className=' col-span-2'>
                                    <div className="flex md:flex-none lg:flex  items-center justify-center w-full">
                                        <AnimatedTooltip items={people} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' mt-3 xlt-10'>
                            <div className='h-32 w-full bg-[#0C042C] px-10 md:px-3 lg:px-5 xl:px-10 rounded-2xl relative flex  items-center justify-between '>
                                <BorderBeam duration={8} size={100} />
                                <div className=' col-span-1'>
                                    <p className=' text-xs lg:text-sm xl:text-[16px] 2xl:text-lg font-normal text-[#98989A]'>Total Whitepapers</p>
                                    <h5 className='text-white font-semibold text-sm lg:text-xl'>Over 50 whitepapers</h5>
                                </div>
                                <div className=' col-span-2'>
                                    <div className="flex md:flex-none lg:flex  items-center justify-center w-full">
                                        <AnimatedTooltip items={people} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
