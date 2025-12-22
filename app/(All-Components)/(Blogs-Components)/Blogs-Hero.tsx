'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import cardimage4 from '@/public/(Blogs-Images)/Blogs-Hero-Images/Gemini_Generated_Image_8slxpt8slxpt8slx 1.png'
import Image from 'next/image'

export default function Blogs_Hero() {
    return (
        <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28  max-w-[1596px] mx-auto opacity-95 pb-20 h-full xl:h-[90vh]'>
            <div className=' grid md:grid-cols-12 py-10 md:py-20 items-center justify-between'>
                <div className=' md:col-span-4'>
                    <div className=' space-y-2.5'>
                        <h1 className=' text-3xl md:text-2xl lg:text-3xl xl:text-[56px] font-semibold text-white leading-12 md:leading-7 lg:leading-9 xl:leading-[65px] text-center md:text-start'>Your Guide to the Future of Lottery</h1>
                        <h3 className=' text-xs md:text-[8px] lg:text-[12px] xl:text-[16px] text-white leading-5 md:leading-3.5   lg:leading-4 xl:leading-6 text-center md:text-start'>A visually appealing hero banner featuring a captivating image related to luck, technology, or community.</h3>
                    </div>
                    <div className=' pt-4 flex items-center justify-center md:items-start md:justify-start'>
                        <Button className=' bg-transparent rounded-full border border-[#FF5F1F] text-white text-xs md:text-[8px] lg:text-xs xl:text-lg px-7 lg:px-7 xl:px-12 py-3 md:py-1.5 lg:py-2 xl:py-6 font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                            Explore Your Latest Article
                        </Button>
                    </div>
                </div>
                <div className=' md:col-span-8   hidden md:block'>
                    <div className=' flex gap-x-5 items-center justify-center'>
                        <div className=' md:w-[132px]  lg:w-64 bg-[#ffffff13] backdrop-blur-lg md:p-2.5 lg:p-5 rounded-[6px] lg:rounded-lg xl:rounded-xl'>
                            <div>
                                <Image src={cardimage4} alt='card image 1' className=' h-20 lg:h-32 xl:h-40 w-full rounded-[6px] lg:rounded-xl' />
                            </div>
                            <div className=' space-y-1.5 pt-1.5'>
                                <h3 className=' text-[8px] lg:text-xs xl:text-[16px] font-semibold text-white'>Unlocking the power of decentralized Jackpot</h3>
                                <p className=' text-[6px] lg:text-[8px] xl:text-xs leading-2 lg:leading-4 font-semibold text-white'>A stylized digital hand holding a glowing 3D secure wallet transaction.</p>
                            </div>
                            <div className=' pt-3'>
                                <Button className=' text-[6px] lg:text-xs bg-transparent rounded-full border border-[#FF5F1F] text-white h-3 lg:h-8 w-[100px] lg:w-[120px] font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                        <div className=' h-[170px] lg:h-[250px] xl:h-[300px] w-28 lg:w-56 bg-[#ffffff13] backdrop-blur-lg md:p-2 lg:p-4 rounded-lg lg:rounded-[7px]'>
                            <div>
                                <Image src={cardimage4} alt='card image 1' className=' h-[70px] lg:h-24 xl:h-36 w-full rounded-[7px]' />
                            </div>
                            <div className=' space-y-0.5 lg:space-y-1.5 pt-1.5'>
                                <h3 className=' text-[8px] lg:text-xs xl:text-[14px] font-semibold text-white'>Unlocking the power of decentralized Jackpot</h3>
                                <p className=' text-[6px] lg:text-[8px] xl:text-[10px] leading-2 lg:leading-4 font-semibold text-white'>A stylized digital hand holding a glowing 3D secure wallet transaction.</p>
                            </div>
                            <div className=' p-0.5 lg:pt-3'>
                                <Button className=' text-[6px] lg:text-[10px] bg-transparent rounded-full border border-[#FF5F1F] text-white h-4 lg:h-7 w-[70px] lg:w-[100px] font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                        <div className=' h-[122px] lg:h-[210px] xl:h-[255px] w-[100px] lg:w-48 bg-[#ffffff13] backdrop-blur-lg p-1.5 lg:p-4 rounded-[3px] lg:rounded-[7px]'>
                            <div>
                                <Image src={cardimage4} alt='card image 1' className='h-12 lg:h-24 xl:h-28 w-full rounded-[7px]' />
                            </div>
                            <div className=' space-y-0.5 lg:space-y-1.5 pt-1.5'>
                                <h3 className=' text-[5px] lg:text-[8px] xl:text-[11px] font-semibold text-white'>Unlocking the power of decentralized Jackpot</h3>
                                <p className='text-[3px] lg:text-[6px] xl:text-[8px] leading-1 lg:leading-2 xl:leading-4 font-semibold text-white'>A stylized digital hand holding a glowing 3D secure wallet transaction.</p>
                            </div>
                            <div className=' p-1.5 xl:pt-3'>
                                <Button className='text-[5px] lg:text-[8px] bg-transparent rounded-full border border-[#FF5F1F] text-white h-2 lg:h-4 xl:h-6 w-[70px] lg:w-[90px] font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
