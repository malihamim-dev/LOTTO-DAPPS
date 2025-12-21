

'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Cover } from "@/components/ui/cover";
import metamask from '@/public/(home-page-image)/Navbar-image/Metamask2.png'
import binance from '@/public/(home-page-image)/Navbar-image/binance.png'
import trustwallet from '@/public/(home-page-image)/Navbar-image/Trust-Wallet.png'
import chainlink from '@/public/(home-page-image)/Navbar-image/chainlink.png'

import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";


export default function Affiliate_Hero() {

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Products",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Aceternity UI",
            icon: (
                <img
                    src="https://assets.aceternity.com/logo-dark.png"
                    width={20}
                    height={20}
                    alt="Aceternity Logo"
                />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

    ];

    return (
        <div className=' px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20'>
            <div className=' pt-5 md:pb-10 lg:pb-5 lg:pt-20'>
                <div className='space-y-5'>
                    <h1 className=' text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-medium text-white text-center '>EARN  <Cover className=' font-semibold  mx-auto text-center mt-0 relative z-20 py-0 bg-clip-text text-transparent bg-linear-to-b from-[#ff5f1f]  to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white'>GENERATIONAL</Cover>  INCOME </h1>
                    <p className=' text-[12px] md:text-sm xl:text-[16px] font-medium text-white text-center w-full md:w-[70%] mx-auto'>Modi dicta varius ea ac suscipit, potenti? Ad. Provident delectus nostrud impedit dolores totam voluptatem totam imperdiet ullamco natus incidunt tristique. Cumque.</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-x-10 gap-y-3 mt-5">
                        <Button className="text-white border border-[#ff5f1f] bg-transparent hover:bg-[#FF5F1F] hover:border-none px-4 md:px-10 h-6 md:h-8 lg:h-10 xl:h-12 rounded-full text-[10px] lg:text-sm xl:text-[16px] hover:scale-110">
                            Join now & get your referral link
                        </Button>
                        <Button className="text-white border border-[#ff5f1f] bg-transparent hover:bg-[#FF5F1F] hover:border-none px-4 md:px-10 h-6 md:h-8 lg:h-10 xl:h-12 rounded-full text-[10px] lg:text-sm xl:text-[16px] hover:scale-110">
                            Join now & get your referral link
                        </Button>
                    </div>
                </div>
            </div>
            <div className=' mt-5'>
                <h2 className='text-[12px] md:text-lg lg:text-[16px] xl:text-lg py-5 text-[#ff5f1f] text-center md:text-start'>Up to 21% Commission on 5 Levels</h2>
                <div className=' grid md:grid-cols-2 items-centerjustify-between spcac-y-5 gap-x-10 lg:gap-x-0'>
                    <div className="flex-none inline-block lg:w-[75%] xl:w-[68%] ">
                        <FloatingDock
                            desktopClassName=" h-16 w-[355px] gap-4 rounded-2xl bg-gray-50 px-4 pb-3 flex-none bg-[#f1ebe90f] backdrop-blur-xl"
                            mobileClassName="p-2 rounded-xl"
                            items={links} />
                    </div>
                    <div className=' flex w-full gap-x-5 mx-auto'>
                        <div className='hover:scale-110 cursor-pointer lg:flex items-center gap-x-1.5'>
                            <div className=' flex items-center justify-center hover:scale-110'>
                                <Image src={metamask} alt='metamask' className=' h-10 w-10 ' />
                            </div>
                            <div>
                                <p className='text-white font-semibold text-[10px]'>Metamask</p>
                            </div>
                        </div>
                        <div className='hover:scale-110 cursor-pointer  lg:flex  items-center gap-x-1.5'>
                            <div className=' flex items-center justify-center '>
                                <Image src={binance} alt='binance' className='  h-10 w-10 ' />
                            </div>
                            <div>
                                <p className='text-white font-semibold text-[10px]'>Binance</p>
                            </div>
                        </div>
                        <div className=' hover:scale-110 cursor-pointer  lg:flex  items-center gap-x-1.5'>
                            <div className=' flex items-center justify-center'>
                                <Image src={trustwallet} alt='trustwallet' className='  h-10 w-10 ' />
                            </div>
                            <div>
                                <p className='text-white font-semibold text-[10px]'>Trustwallet</p>
                            </div>
                        </div>
                        <div className=' hover:scale-110 cursor-pointer lg:flex items-center gap-x-1.5'>
                            <div className=' flex items-center justify-center'>
                                <Image src={chainlink} alt='chainlink' className='  h-10 w-10' />
                            </div>
                            <div>
                                <p className='text-white font-semibold text-[10px]'>Chainlink</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

