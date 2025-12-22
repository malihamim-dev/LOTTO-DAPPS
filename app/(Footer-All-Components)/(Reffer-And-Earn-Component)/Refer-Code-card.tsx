import Image from 'next/image'
import React from 'react'
import refferimage from '@/public/(Reffer-And-Earn-image)/(All-Image)/reffer-and-earn-image (5).png'
import { FiEdit } from 'react-icons/fi'
import { Button } from '@/components/ui/button'

export default function Refer_Code_card() {
    return (
        <div className=' px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 py-20 hidden lg:block'>
            <div className=' bg-black/40 backdrop-blur-lg  p-10 rounded-[12px]'>
                <div className=' flex items-center justify-center'>
                    <Image src={refferimage} alt='refferimage' className=' h-72 w-[450px]' />
                </div>
                <div className=' px-10 py-8 space-y-7'>
                    <div className='text-center'>
                        <h3 className=' text-[22px] text-white'>Invite your friends and earn up to $200</h3>
                        <p className='text-white '>They'll get a 10% discount too.</p>
                    </div>
                    <div className=' flex gap-x-4 px-[15%]'>
                        <div className=' bg-white rounded-sm grid grid-cols-12 items-center justify-between py-3 px-5 gap-x-2'>
                            <div className=' col-span-11'>
                                <span className=' scroll-auto'>
                                    <p className=' text-[12px] truncate'>https://honolulu.com?REFERRALCODE=7TCORIONSUTU https://honolulu.com?REFERRALCODE=7TCORIONSUTU</p>
                                </span>
                            </div>
                            <div className=' col-span-1 flex items-center justify-center'>
                                <FiEdit className='text-2xl text-[#FF5F1F] flex items-center justify-center cursor-pointer' />
                            </div>
                        </div>
                        <div className=' flex items-center justify-center'>
                            <Button className=' bg-transparent  w-36 h-12 border border-[#ff5f1f] backdrop-blur-lg text-[#ff5f1f] hover:border-none hover:bg-[#ff5f1f] hover:text-white hover:scale-110 cursor-pointer'>
                                Copy
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
