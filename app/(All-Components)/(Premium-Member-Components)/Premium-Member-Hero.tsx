
'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

import premium_member_hero_image from '@/public/(Premium-Member-Image)/Premium-Member-Hero-Images/licensed-image.jpg'
import logo from '@/public/(Premium-Member-Image)/Premium-Member-Hero-Images/429ebff0e0e2d2ae8dd53360dc43d4cb.webp'
import Image from 'next/image'
import Connect_Wallet from '../(Shard-Component)/Connect_Wallet'


export default function Premium_Member_Hero() {


    const [showWallet, setShowWallet] = useState(false);


    return (
        <div className=' px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28  max-w-[1596px] mx-auto opacity-95 pb-10  '>
            <div className=' grid md:grid-cols-2 gap-x-5 py-10 md:py-5 lg:py-10 items-center justify-between'>
                <div className=' space-y-3 md:space-y-5'>
                    <div className=' hidden md:block'>
                        <Image src={logo} alt='logo' className=' h-24 w-24' />
                    </div>
                    <div className='space-y-2 md:space-y-3'>
                        <h1 className=' text-xl lg:text-2xl xl:text-3xl font-medium text-white text-center md:text-start'>Kodedice</h1>
                        <h2 className=' text-[22px] md:text-[28px] lg:text-[32px] xl:text-[40px] leading-7 md:leading-9 lg:leading-10 font-medium text-white text-center md:text-start'>Unlock Exclusive Rewards with Premium Membership</h2>
                    </div>
                    <div className=' flex items-center justify-center md:justify-start gap-x-3 lg:gap-x-5 xl:gap-x-10'>
                        <div className='flex items-center gap-x-2 text-xs md:text-sm lg:text-[16px] xl:text-xl text-white'>
                            <span>3,982 </span>
                            <span>followers</span>
                        </div>
                        <div className='flex items-center gap-x-2 text-xs md:text-sm lg:text-[16px] xl:text-xl text-white'>
                            <span>1,8605</span>
                            <span>following</span>
                        </div>
                        <div className='flex items-center gap-x-2 text-xs md:text-sm lg:text-[16px] xl:text-xl text-white'>
                            <span>19,600</span>
                            <span> likes</span>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center md:justify-start gap-x-10 md:gap-x-5 lg:gap-x-10 pt-3 lg:pt-5 xl:pt-10'>
                        <div>
                            <Button
                                onClick={() => setShowWallet(true)}
                                className=' bg-transparent rounded-full border border-[#FF5F1F] text-white text-xs md:text-[16px] xl:text-lg px-5 md:px-7 lg:px-12 py-3 lg:py-5 xl:py-6 font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                Play Now
                            </Button>
                            {showWallet && <Connect_Wallet onClose={() => setShowWallet(false)} />}

                        </div>
                        <div>
                            <Button className=' bg-transparent rounded-full border border-[#FF5F1F] text-white text-xs md:text-[16px] xl:text-lg px-5 md:px-7 lg:px-12 py-3 lg:py-5 xl:py-6 font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                Get Premium
                            </Button>
                        </div>
                    </div>
                </div>
                {/* right site  */}
                <div className=' mt-14  hidden md:block'>
                    <Image src={premium_member_hero_image} alt='premium member hero image' className=' h-96 md:h-60 lg:h-80 xl:h-96 w-full rounded-2xl' />
                </div>
            </div>
        </div>
    )
}
