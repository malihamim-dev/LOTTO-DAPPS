import React from 'react'
import { IoIosWallet } from "react-icons/io";
import { FaRegQuestionCircle, FaUsers } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GoGift } from "react-icons/go";
import { FaSackDollar } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import Progress_Bar from './(Reffer-And-Earn-Component-Css)/Progress-bar';



export default function My_Earning_Comition_Payout_History() {
  return (
    <div className="relative w-full px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95">
      {/* Balance Check div */}
      <div className="absolute -top-10 md:-top-16 xl:-top-20 md:right-8 xl:right-28 flex items-center justify-center mx-auto">
        <div className=" bg-black/40 backdrop-blur-lg flex items-center justify-center gap-x-5 px-5 py-3 rounded-[12px]">
          <span>
            <IoIosWallet className=" text-lg lg:text-xl xl:text-2xl text-[#ff5f1f]" />
          </span>
          <span>
            <p className="text-white text-[10px] md:text-[16px] xl:text-lg 2xl:text-[22px]">Universe balance:</p>
          </span>
          <span>
            <h5 className="text-[10px] md:text-[16px] xl:text-lg 2xl:text-[22px] text-[#ff5f1f] font-semibold">US$ 500.00</h5>
          </span>
          <span>
            <FaRegQuestionCircle className="text-lg md:text-2xl text-[#ff5f1f]" />
          </span>
        </div>
      </div>

      {/* Referrals commission payout status div  */}

      <div className=' grid lg:grid-cols-12 h-full lg:h-96 gap-x-3 mt-10 pt-10'>
        {/* left site  */}
        <div className=' lg:col-span-10 bg-black/40 backdrop-blur-lg rounded-2xl p-5 md:p-7'>
          <div className=' flex items-center gap-x-3.5'>
            <span><h3 className='text-xs md:text-[22px] lg:text-[16px] xl:text-[22px] text-white'>Referrals commission payout</h3></span>
            <span><AiOutlineExclamationCircle className=' text-2xl text-[#FF5F1F]' /></span>
          </div>
          <div className=' lg:grid lg:grid-cols-12 gap-x-5 flex flex-col-reverse'>
            <div className=' lg:col-span-9 space-y-6 '>
              <div className=' pt-4'>
                <h4 className=' text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-[#ff5f1f]'>US$ 0</h4>
              </div>
              <div className=''>
                <div className=' w-full'>
                  <Progress_Bar />
                </div>
              </div>
            </div>
            <div className='h-full w-full border border-[#ff5f1f] rounded-md lg:col-span-3 p-5 lg:p-3 xl:p-5 mt-10 lg:mt-0 
            flex flex-col justify-between'>
              <div>
                <FaSackDollar className='text-3xl text-[#ff5f1f]' />
                <p className='text-[8px] md:text-sm lg:text-xs xl:text-sm font-medium text-white mt-2'>
                  Get paid automatically when you earn the minimum amount for your chosen payout method.
                </p>
              </div>

              <Button className='text-[8px] md:text-sm lg:text-[10px] xl:text-sm text-white border border-[#ff5f1f] bg-[#ff5f1f] mt-3'>
                Add Payout Method
              </Button>
            </div>
          </div>
          <div>
          </div>
        </div>

        {/* right site  */}
        <div className=' lg:col-span-2  grid grid-cols-2 lg:grid-cols-none gap-x-2 md:grid-rows-2 gap-y-2.5 pt-5 lg:pt-0'>
          <div className=' row-span-1 bg-black/40 backdrop-blur-lg rounded-2xl flex lg:flex-none xl:flex items-center justify-center p-3 gap-x-2'>
            <div>
              <GoGift className=' text-5xl text-[#ff5f1f]' />
            </div>
            <div>
              <h6 className=' text-lg text-white'>$10</h6>
              <p className=' text-white text-[12px]'>Total paid out</p>
            </div>
          </div>
          <div className=' row-span-1 bg-black/40 backdrop-blur-lg rounded-2xl flex items-center justify-center p-3 gap-x-2'>
            <div>
              <FaUsers className=' text-5xl text-[#ff5f1f]' />
            </div>
            <div>
              <h6 className=' text-lg text-white'>$20</h6>
              <p className=' text-white text-[12px]'>Total referrals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
