

import { Button } from '@/components/ui/button'
import React from 'react'

export default function Auditing_Policy() {
  return (
    <div className=' max-w-[1596px] mx-auto px-5 md:px-8 lg:px-28 pt-10 opacity-95 pb-20'>
      <div className=' grid md:grid-cols-12 gap-x-6'>
        <div className=' md:col-span-3'>
          <div className=' space-y-3 grid grid-cols-3 md:grid-cols-none gap-x-3'>
            <Button className="text-white border border-[#ff5f1f] bg-transparent hover:bg-[#FF5F1F] hover:border-none px-10 h-8 lg:h-10 xl:h-12 rounded-lg text-[8px] lg:text-sm xl:text-[16px] hover:scale-110 w-full">
              Legal Information
            </Button>
           <Button className="text-white border border-[#ff5f1f] bg-transparent hover:bg-[#FF5F1F] hover:border-none px-10 h-8 lg:h-10 xl:h-12 rounded-lg text-[8px] lg:text-sm xl:text-[16px] hover:scale-110 w-full">
              Privacy Policy
            </Button>
           <Button className="text-white border border-[#ff5f1f] bg-transparent hover:bg-[#FF5F1F] hover:border-none px-10 h-8 lg:h-10 xl:h-12 rounded-lg text-[8px] lg:text-sm xl:text-[16px] hover:scale-110 w-full">
              Compliance
            </Button>
           <Button className="text-white border border-[#ff5f1f] bg-transparent hover:bg-[#FF5F1F] hover:border-none px-10 h-8 lg:h-10 xl:h-12 rounded-lg text-[8px] lg:text-sm xl:text-[16px] hover:scale-110 w-full">
              Information 
            </Button>
          </div>
        </div>
        <div className=' md:col-span-9 space-y-3 pt-10 md:pt-0'>
          <div className=' '>
            <h4 className='text-[22px] font-medium text-white'>Acceptions:</h4>
          </div>
          <div className=' pt-5'>
            <div className=' flex items-center gap-x-2'>
              <span>
                <p className=' text-white text-[16px] font-medium'>1.2</p>
              </span>
              <span>
                <p className=' text-white text-[16px] font-medium'>Acceptance of Term:</p>
              </span>
            </div>
            <div>
              <p className=' text-xs md:text-sm xl:text-[16px] font-normal text-white leading-6 pt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
          <div className=' pt-5'>
            <div className=' flex items-center gap-x-2'>
              <span>
                <p className=' text-white text-[16px] font-medium'>1.3</p>
              </span>
              <span>
                <p className=' text-white text-[16px] font-medium'>Acceptance of Term:</p>
              </span>
            </div>
            <div>
              <p className=' text-xs md:text-sm xl:text-[16px] font-normal text-white leading-6 pt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
          <div className=' pt-5'>
            <div className=' flex items-center gap-x-2'>
              <span>
                <p className=' text-white text-[16px] font-medium'>1.4</p>
              </span>
              <span>
                <p className=' text-white text-[16px] font-medium'>Acceptance of Term:</p>
              </span>
            </div>
            <div>
              <p className=' text-xs md:text-sm xl:text-[16px] font-normal text-white leading-6 pt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

