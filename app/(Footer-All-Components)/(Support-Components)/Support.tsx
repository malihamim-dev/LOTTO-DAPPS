


import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'

export default function Support() {
  return (
    <div className='max-w-[1596px] mx-auto px-5 md:px-8 lg:px-28 opacity-95 my-20'>
      <div className=' border border-[#ff5f1f] rounded-2xl p-5 md:p-10 bg-[#ffffff17] backdrop-blur-lg'>
        <div className='space-y-2'>
          <h1 className='text-white font-medium text-2xl xl:text-3xl text-center md:text-start'> Get In Touch</h1>
          <p className=' text-xs xl:text-sm text-center md:text-start font-medium text-white md:leading-5'>We’re here to help you with any qustions about playing, your account or general inquiries</p>
        </div>
        <div className='  gap-6 items-center justify-center'>
          <div className=' md:col-span-5  '>
            <div className='border border-[#ff5f1f] rounded-2xl p-4 md:p-7  bg-[#0C042C] backdrop-blur-lg mt-6'>
              <div>
                <h4 className=' text-[16px] xl:text-[22px] font-medium text-white'>Send Us a Message</h4>
              </div>
              <div className=' space-y-3 md:space-y-5 pt-3 md:pt-5'>
                <Input type="text" placeholder="Wallet Address" className='h-8 md:h-10 xl:h-12 border-none bg-white active:border active:border-[#ff5f1f] text-xs xl:text-[16px] placeholder:text-xs xl:placeholder:text-lg font-medium xl:font-semibold' />

              

               <Input type="text" placeholder="Subject" className='h-8 md:h-10 xl:h-12 border-none bg-white active:border active:border-[#ff5f1f] text-xs xl:text-[16px] placeholder:text-xs xl:placeholder:text-lg font-medium xl:font-semibold' />


                <Textarea placeholder="Message Details...." className=' h-40 md:h-48  border-none bg-white active:border active:border-[#ff5f1f] text-xs xl:text-[16px] placeholder:text-xs xl:placeholder:text-lg font-medium xl:font-semibold' />

                <div className=' flex items-center justify-center'>
                  <Button className="text-white w-48 border border-[#ff5f1f] bg-transparent hover:bg-[#FF5F1F] hover:border-none px-4 md:px-10 h-6 md:h-8 lg:h-10 xl:h-12  text-[10px] lg:text-sm xl:text-[16px] hover:scale-110 rounded-full">
                    Send Message
                  </Button>
                </div>
                <div className=' text-center'>
                  <p className=' text-white text-xs font-medium'>Note: We aim to respond within 03 business day</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
