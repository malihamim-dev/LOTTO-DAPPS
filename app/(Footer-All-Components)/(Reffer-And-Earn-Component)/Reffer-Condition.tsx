import React from 'react'
import { GiWallet } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import heroimage from '@/public/(Reffer-And-Earn-image)/(All-Image)/reffer-and-earn-image (4).png'
import { AiOutlineExclamationCircle } from "react-icons/ai";


export default function Reffer_Condition() {
    return (
        <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20 '>
            <div className=' grid  md:grid-cols-3 gap-x-5 space-y-6 md:space-y-0'>
                {/* left site */}
                <div className=' md:col-span-2'>
                    {/* Header title  */}
                    <h3 className=' text-[12px] lg:text-lg xl:text-xl 2xl:text-2xl text-white font-medium'>Know what your friend needs? Refer the exact service.</h3>
                    <div className=''>
                        <div className=' grid md:grid-cols-2 mt-7 bg-black/35 backdrop-blur-md p-4 lg:p-5 xl:p-8 rounded-t-[6px] lg:rounded-t-2xl'>
                            <div className=' md:col-span-2 md:grid grid-cols-2 items-center justify-center'>
                                <div className=' '>
                                    <h4 className='text-[12px] lg:text-lg xl:text-[22px] text-white font-medium pb-3'>Secure, speedy, and reliable</h4>
                                    <p className=' text-[8px] lg:text-xs xl:text-[16px] text-white pb-4'>
                                        Web hosting is ideal for personal, business, and eCommerce sites. A free domain, business email, and site migration are included. Enjoy weekly auto backups for easy data recovery.
                                    </p>
                                    <div className=' flex items-center gap-x-2 pb-2.5' >
                                        <span>
                                            <GiWallet className=' text-white text-[12px] lg:text-sm xl:text-xl' />
                                        </span>
                                        <span>
                                            <h6 className=' text-[8px] lg:text-xs xl:text-[16px] text-white'>Earn 10% per referral - up to $30</h6>
                                        </span>
                                    </div>
                                    <div className=' flex items-center gap-x-2 pb-5'>
                                        <span>
                                            <FaGift className=' text-white text-[12px] lg:text-sm xl:text-xl' />
                                        </span>
                                        <span>
                                            <h6 className='text-[8px] lg:text-xs xl:text-[16px] text-white'>Your friend gets 10% discount too</h6>
                                        </span>
                                    </div>
                                    <div className=' '>
                                        <Button className=' bg-transparent text-[8px] lg:text-xs xl:text-lg border border-[#ff5f1f] backdrop-blur-lg text-[#ff5f1f] hover:border-none hover:bg-[#ff5f1f] hover:text-white hover:scale-110 cursor-pointer  h-6 lg:h-8 xl:h-12 w-20 lg:w-40'>
                                            Refer to play
                                        </Button>
                                    </div>
                                </div>
                                <div className=' hidden md:block'>
                                    <Image src={heroimage} alt='heroimage' className=' h-full w-full' />
                                </div>
                            </div>
                        </div>
                        <div className=' px-4 py-3 bg-black/70 backdrop-blur-md rounded-b-[6px] lg:rounded-b-2xl'>
                            <div className=' flex items-center gap-x-3 '>
                                <span>
                                    <AiOutlineExclamationCircle className=' text-[12px] md:text-lg lg:text-lg xl:text-2xl text-[#FF5F1F]' />
                                </span>
                                <span className=' text-white text-[6px] lg:text-[8px] xl:text-[12px] leading-2 lg:leading-2.5 xl:leading-4'>
                                    Rewards apply if your friend buys their first ever lottery.  Commissions are confirmed after 45 days and paid once your payout threshold is met. <span className=' border-b'>Read our terms of service</span>.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right site  */}
                <div className=' md:col-span-1 '>
                    {/* Header title  */}
                    <h3 className='text-[12px] lg:text-lg xl:text-xl 2xl:text-2xl text-white font-medium'>Blog Posts</h3>
                    <div className=''>
                        <div className=' mt-7'>
                            <div className=' space-y-4 md:space-y-1.5 lg:space-y-3 xl:space-y-4'>
                                <p className=' text-[11px] xl:text-[16px] text-white border-b pb-1 hover:text-[#FF5F1F] line-clamp-1'>
                                    This election is not conventional, rather, it is a vote to save the country
                                </p>
                               <p className=' text-[11px] xl:text-[16px] text-white border-b pb-1 hover:text-[#FF5F1F] line-clamp-1'>
                                    Directing the deputy commissioners to perform their duties with utmost honesty, neutrality
                                </p>
                               <p className=' text-[11px] xl:text-[16px] text-white border-b pb-1 hover:text-[#FF5F1F] line-clamp-1'>
                                    Speaking at the chief adviser's office, Professor Yunus addressed 50 newly appointed                                </p>
                                <p className=' text-[11px] xl:text-[16px] text-white border-b pb-1 hover:text-[#FF5F1F] line-clamp-1'>
                                    He emphasised that the election would be particularly significant as it includes a national referendum                                </p>
                                <p className=' text-[11px] xl:text-[16px] text-white border-b pb-1 hover:text-[#FF5F1F] line-clamp-1'>
                                    Professor Yunus also noted the interest of international observers, who are closely monitoring                                </p>
                               <p className=' text-[11px] xl:text-[16px] text-white border-b pb-1 hover:text-[#FF5F1F] line-clamp-1'>
                                    This election is not conventional, rather, it is a vote to save the country: CA                                </p>
                               <p className=' text-[11px] xl:text-[16px] text-white border-b pb-1 hover:text-[#FF5F1F] line-clamp-1'>
                                    Directing the deputy commissioners to perform their duties with utmost honesty, neutrality
                                </p>
                                <p className=' text-[11px] xl:text-[16px] text-white border-b pb-1 hover:text-[#FF5F1F] line-clamp-1'>
                                    Directing the deputy commissioners to perform their duties with utmost honesty, neutrality
                                </p>
                              <p className=' text-[11px] xl:text-[16px] text-white border-b pb-1 hover:text-[#FF5F1F] line-clamp-1'>
                                    Directing the deputy commissioners to perform their duties with utmost honesty, neutrality
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
