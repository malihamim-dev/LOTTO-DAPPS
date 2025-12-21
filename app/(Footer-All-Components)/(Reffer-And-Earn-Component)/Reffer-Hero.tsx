import Image from 'next/image'
import React from 'react'
import heroimage from '@/public/(Reffer-And-Earn-image)/(All-Image)/reffer-and-earn-image.png'

export default function Reffer_Hero() {
  return (
    <div className=' px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 border-b-4 border-[#ff5f1f] rounded-b-[50px] lg:rounded-b-[100px] '>
      <div className=' grid md:grid-cols-2 gap-x-10 items-center justify-center lg:h-[350px] xl:h-[400px] opacity-95  pb-10 md:pb-0 2xl:pb-20'>
        <div className=' space-y-1.5 lg:space-y-2 xl:space-y-3 mt-7 md:mt-0 lg:mt-4 xl:mt-0'>
          <h1 className=' text-[34px] md:text-2xl lg:text-3xl xl:text-5xl text-center md:text-start font-medium text-white pb-0 mb:pb-1 lg:pb-3'>Refer & Earn - </h1>
          <h3 className=' text-2xl md:text-[16px] lg:text-[22px] xl:text-3xl text-center md:text-start text-white'>Share the luck & win together!</h3>
          <h6 className=' text-[16px] md:text-[12px] lg:text-lg 2xl:text-2xl text-center md:text-start text-white'>Invite friends, earn rewards, play more</h6>
          <p className=' text-white text-[12px] md:text-[8px] lg:text-xs 2xl:text-[16px] text-center md:text-start '>Share your unique referral code and earn bonuses every time a friend signs up and plays.</p>
        </div>
        <div className=' hidden md:block overflow-hidden'>
          <Image src={heroimage} alt='hero-image' className=' h-full w-full pt-12 overflow-hidden' />
        </div>
      </div>
    </div>
  )
}
