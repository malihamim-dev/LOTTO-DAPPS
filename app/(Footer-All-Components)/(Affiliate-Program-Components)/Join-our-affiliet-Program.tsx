

import React from 'react'
import { BsFillQuestionSquareFill, BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaInfinity } from 'react-icons/fa';
import { VscGraph } from "react-icons/vsc";


export default function Join_our_affiliet_Program() {
  return (
    <div className=' px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20 space-y-7'>
      {/* heading tetle text div */}
      <div className=' flex gap-x-2 lg:gap-x-3 md:gap-x-5'>
        <span>
          <BsFillQuestionSquareFill className=' text-lg lg:text-2xl  xl:text-3xl text-white' />
        </span>
        <span>
          <h3 className=' text-sm  lg:text-[16px] xl:text-xl text-white font-medium'>Why Join Our Affiliate Program?</h3>
        </span>
      </div>
      {/* card div section  */}
      <div className=' grid md:grid-cols-3 gap-x-2 lg:gap-x-6 space-y-2.5 md:space-y-0'>
        <div className='bg-black/35 backdrop-blur-sm py-5 px-4 md:px-8 space-y-4 rounded-lg'>
          <h3 className=' text-sm lg:[16px] xl:text-[22px] font-medium text-white'>Lucrative Income Potential</h3>
          <div className=' flex gap-x-4 items-center'>
            <span>
              <VscGraph className='text-lg md:text-2xl lg:text-4xl text-[#ff5f1f]' />
            </span>
            <span>
              <p className='text-white text-[7px] md:text-[9px] lg:text-[12px]'>Earn up to 21%  <br />commission.</p>
            </span>
          </div>
        </div>
        <div className='bg-black/35 backdrop-blur-sm py-5 px-4 md:px-8 space-y-4 rounded-lg'>
          <h3 className=' text-sm lg:[16px] xl:text-[22px] font-medium text-white'>Lucrative Income Potential</h3>
          <div className=' flex gap-x-4 items-center'>
            <span>
              <FaInfinity className='text-lg md:text-2xl lg:text-4xl text-[#ff5f1f]' />
            </span>
            <span>
              <p className='text-white text-[7px] md:text-[9px] lg:text-[12px]'>Refer as Many People as You Like</p>
            </span>
          </div>
        </div>
        <div className='bg-black/35 backdrop-blur-sm py-5 px-4 md:px-8 space-y-4 rounded-lg'>
          <h3 className=' text-sm lg:[16px] xl:text-[22px] font-medium text-white'>Lucrative Income Potential</h3>
          <div className=' flex gap-x-4 items-center'>
            <span>
              <BsFillRocketTakeoffFill className='text-lg md:text-2xl lg:text-4xl text-[#ff5f1f]' />
            </span>
            <span>
              <p className='text-white text-[7px] md:text-[9px] lg:text-[12px]'>All You Need is a Unique Referral link to Begin Sharing & Earning.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
