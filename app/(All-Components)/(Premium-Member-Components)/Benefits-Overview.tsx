

import React from 'react'
import { FcCurrencyExchange } from "react-icons/fc";
import { ImPower } from "react-icons/im";
import { ImLifebuoy } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";


export default function Benefits_Overview() {
  return (
    <div className=' px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20 space-y-11'>
      <h1 className=' text-xl md:text-3xl lg:text-[28px] xl:text-4xl text-white font-bold text-center capitalize'>
        Benefits Overview
      </h1>
      <div className=' grid md:grid-cols-4 gap-x-7 md:gap-x-4 lg:gap-x-7 gap-y-5 '>
        <div className=' h-[280px] md:h-full lg:h-full xl:h-[280px] border border-[#ff5f1f] rounded-4xl md:rounded-[20px] lg:rounded-4xl items-center justify-center flex flex-col space-y-3 bg-[#ffffff10] backdrop-blur-lg md:p-5 lg:p-5 xl:p-0'>
          <div>
            <FcCurrencyExchange className=' text-[42px] md:text-7xl ' />
          </div>
          <div className=' space-y-2 px-[20%] md:px-0 lg:px-0 xl:px-0'>
            <h4 className=' text-white text-[22px] md:text-[16px] lg:text-[22px] font-medium text-center'>Special Access</h4>
            <p className=' text-sm md:text-[10px] lg:text-sm font-semibold text-white text-center'>Double your prize calling instartly</p>
          </div>
        </div>
        <div className=' h-[280px] md:h-full lg:h-full xl:h-[280px] border border-[#ff5f1f] rounded-4xl md:rounded-[20px] lg:rounded-4xl items-center justify-center flex flex-col space-y-3 bg-[#ffffff10] backdrop-blur-lg md:p-5 lg:p-5 xl:p-0'>
          <div>
            <ImPower className=' text-[42px] md:text-7xl text-[#ff5f1f]' />
          </div>
          <div className=' space-y-2 px-[20%] md:px-0 lg:px-0 xl:px-0'>
            <h4 className=' text-white text-[22px] md:text-[16px] lg:text-[22px] font-medium text-center'>Revenue Share</h4>
            <p className=' text-sm md:text-[10px] lg:text-sm font-semibold text-white text-center'>Gat your wrinings fester</p>
          </div>
        </div>
        <div className=' h-[280px] md:h-full lg:h-full xl:h-[280px] border border-[#ff5f1f] rounded-4xl md:rounded-[20px] lg:rounded-4xl items-center justify-center flex flex-col space-y-3 bg-[#ffffff10] backdrop-blur-lg md:p-5 lg:p-5 xl:p-0'>
          <div>
            <ImLifebuoy className=' text-[42px] md:text-7xl text-[#ff5f1f]' />
          </div>
          <div className=' space-y-2 px-[20%] md:px-0 lg:px-0 xl:px-0'>
            <h4 className=' text-white text-[22px] md:text-[16px] lg:text-[22px] font-medium text-center'>Lifetime Access</h4>
            <p className=' text-sm md:text-[10px] lg:text-sm font-semibold text-white text-center'>Access to spedial prentum and initeties</p>
          </div>
        </div>
        <div className=' h-[280px] md:h-full lg:h-full xl:h-[280px] border border-[#ff5f1f] rounded-4xl md:rounded-[20px] lg:rounded-4xl items-center justify-center flex flex-col space-y-3 bg-[#ffffff10] backdrop-blur-lg md:p-5 lg:p-5 xl:p-0'>
          <div>
            <FaHandshake className=' text-[42px] md:text-7xl text-[#ff5f1f] ' />
          </div>
          <div className=' space-y-2 px-[20%] md:px-0 lg:px-0 xl:px-0'>
            <h4 className=' text-white text-[22px] md:text-[16px] lg:text-[22px] font-medium text-center'>Hybrid Deals</h4>
            <p className=' text-sm md:text-[10px] lg:text-sm font-semibold text-white text-center'>Earn mare from your refertals</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
