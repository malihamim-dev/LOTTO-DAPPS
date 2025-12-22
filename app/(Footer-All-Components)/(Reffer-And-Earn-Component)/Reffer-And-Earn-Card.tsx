import { Button } from '@/components/ui/button';
import React from 'react'
import { FiEdit } from "react-icons/fi";
import heroimage3 from '@/public/(Reffer-And-Earn-image)/(All-Image)/reffer-and-earn-image (3).png'
import Image from 'next/image';

export default function Reffer_And_Earn_Card() {
  return (
    <div className=' px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20'>
      <div className='bg-[#1e0e5e] rounded-[12px] lg:rounded-2xl xl:rounded-3xl grid md:grid-cols-2 h-full lg:h-[150px] xl:h-[200px]'>
        <div className=' px-5 lg:px-10 py-4  xl:py-8 space-y-3 lg:space-y-7'>
          <div>
            <h3 className=' text-[12px] lg:text-[16px] xl:text-[22px] text-white'>Invite your friends and earn up to $200</h3>
          </div>
          <div>
            <div className=' bg-white rounded-sm grid grid-cols-12 items-center justify-between py-2 xl:py-4 px-2.5 md:px-5 gap-x-2'>
              <div className=' col-span-7 md:col-span-8 '>
                <span className=' scroll-auto'>
                  <p className=' text-[6px] lg:text-[8px] xl:text-[16px] truncate'>https://honolulu.com?REFERRALCODE=7TCORIONSUTU https://honolulu.com?REFERRALCODE=7TCORIONSUTU</p>
                </span>
              </div>
              <div className=' col-span-2 flex items-center justify-center'>
                <FiEdit className=' text-[12px] lg:text-2xl text-[#FF5F1F] flex items-center justify-center cursor-pointer' />
              </div>
              <div className=' col-span-3 md:col-span-2 flex items-center justify-center'>
                <Button className=' bg-transparent text-[8px] lg:text-[10px] xl:text-sm w-10 lg:w-14 border border-[#ff5f1f] backdrop-blur-lg text-[#ff5f1f] hover:border-none hover:bg-[#ff5f1f] hover:text-white hover:scale-110 cursor-pointer'>
                  Copy
                </Button>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className="h-full w-full overflow-hidden rounded-r-3xl hidden md:block">
          <Image
            src={heroimage3}
            alt="hero image 3"
            className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}
