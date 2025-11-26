"use client"

import React from 'react'
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from 'next/image';
import astorateimage from '../../../public/(home-page-image)/Core_Concept_Section_Image/astorateimage.png'
import { TextAnimate } from "@/components/ui/text-animate"
import man1 from '../../../public/(home-page-image)/Winner_Speach_Section_image/man1.jpg'
import { IoMdStar } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";



export default function Reviews() {
    return (
        <div className='  px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto pb-16'>

            <div>
                <div className=' py-7 lg:pb-12 space-y-2.5'>
                    <h3 className=' text-[#ffffff] text-xl lg:text-2xl xl:text-4xl font-medium  text-center md:text-start opacity-95'>
                        <TextAnimate animation="scaleUp" by="text">
                            What Our Winners Say
                        </TextAnimate>
                    </h3>
                </div>
                {/* card section  */}
                <div className=' grid md:grid-cols-2 mt-5 gap-4 xl:gap-10'>

                    {/* card 1 */}
                    <BackgroundGradient className=" rounded-[22px] lg:p-10 p-5 bg-[#180A3C] dark:bg-zinc-900">
                        <div className=' w-full rounded-2xl'>
                            {/* image section  */}
                            <div className='  flex items-center gap-x-4'>
                                <div>
                                    <Image src={man1} alt='man1 image' className=' h-7 w-7 md:h-9 md:w-9 xl:h-16 xl:w-16 rounded-full border-4 border-[#FF5F1F]' />
                                </div>
                                <div>
                                    <h3 className=' text-white font-medium text-[12px] lg:text-sm xl:text-2xl pb-1'>John Doe</h3>
                                    <p className=' text-[#FF5F1F] font-normal text-[8px] xl:text-sm'>New York, USA</p>
                                </div>
                            </div>
                            {/* text and image section  */}

                            <div className='  grid grid-cols-3 items-center gap-x-0.5 mt-2'>
                                <div className=' col-span-2'>
                                    <div className='  flex items-center gap-x-0.5 mt-1 pb-2'>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className='text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                    </div>
                                    <p className=' flex gap-x-3'>
                                        <span>
                                            <FaQuoteLeft className=' text-lg md:text-2xl text-[#FF5F1F]' />
                                        </span>
                                        <span className='  text-[8px] lg:text-[10px] xl:text-[16px] leading-2.5 md:leading-3.5 lg:leading-4 xl:leading-6 font-normal text-white'>
                                            When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.
                                        </span>
                                    </p>
                                </div>
                                <div className=' col-span-1'>
                                    <Image src={astorateimage} alt='astro image' className=' w-16 h-28 xl:w-full xl:h-[260px]' />
                                </div>
                            </div>
                        </div>
                    </BackgroundGradient>

                    <BackgroundGradient className=" rounded-[22px] lg:p-10 p-5 bg-[#180A3C] dark:bg-zinc-900">
                        <div className=' w-full rounded-2xl'>
                            {/* image section  */}
                            <div className='  flex items-center gap-x-4'>
                                <div>
                                    <Image src={man1} alt='man1 image' className=' h-7 w-7 md:h-9 md:w-9 xl:h-16 xl:w-16 rounded-full border-4 border-[#FF5F1F]' />
                                </div>
                                <div>
                                    <h3 className=' text-white font-medium text-[12px] lg:text-sm xl:text-2xl pb-1'>John Doe</h3>
                                    <p className=' text-[#FF5F1F] font-normal text-[8px] xl:text-sm'>New York, USA</p>
                                </div>
                            </div>
                            {/* text and image section  */}

                            <div className='  grid grid-cols-3 items-center gap-x-0.5 mt-2'>
                                <div className=' col-span-2'>
                                    <div className='  flex items-center gap-x-0.5 mt-1 pb-2'>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className='text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                    </div>
                                    <p className=' flex gap-x-3'>
                                        <span>
                                            <FaQuoteLeft className=' text-lg md:text-2xl text-[#FF5F1F]' />
                                        </span>
                                        <span className='  text-[8px] lg:text-[10px] xl:text-[16px] leading-2.5 md:leading-3.5 lg:leading-4 xl:leading-6 font-normal text-white'>
                                            When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.
                                        </span>
                                    </p>
                                </div>
                                <div className=' col-span-1'>
                                    <Image src={astorateimage} alt='astro image' className=' w-16 h-28 xl:w-full xl:h-[260px]' />
                                </div>
                            </div>
                        </div>
                    </BackgroundGradient>

                    <BackgroundGradient className=" rounded-[22px] lg:p-10 p-5 bg-[#180A3C] dark:bg-zinc-900">
                        <div className=' w-full rounded-2xl'>
                            {/* image section  */}
                            <div className='  flex items-center gap-x-4'>
                                <div>
                                    <Image src={man1} alt='man1 image' className=' h-7 w-7 md:h-9 md:w-9 xl:h-16 xl:w-16 rounded-full border-4 border-[#FF5F1F]' />
                                </div>
                                <div>
                                    <h3 className=' text-white font-medium text-[12px] lg:text-sm xl:text-2xl pb-1'>John Doe</h3>
                                    <p className=' text-[#FF5F1F] font-normal text-[8px] xl:text-sm'>New York, USA</p>
                                </div>
                            </div>
                            {/* text and image section  */}

                            <div className='  grid grid-cols-3 items-center gap-x-0.5 mt-2'>
                                <div className=' col-span-2'>
                                    <div className='  flex items-center gap-x-0.5 mt-1 pb-2'>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className='text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                    </div>
                                    <p className=' flex gap-x-3'>
                                        <span>
                                            <FaQuoteLeft className=' text-lg md:text-2xl text-[#FF5F1F]' />
                                        </span>
                                        <span className='  text-[8px] lg:text-[10px] xl:text-[16px] leading-2.5 md:leading-3.5 lg:leading-4 xl:leading-6 font-normal text-white'>
                                            When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.
                                        </span>
                                    </p>
                                </div>
                                <div className=' col-span-1'>
                                    <Image src={astorateimage} alt='astro image' className=' w-16 h-28 xl:w-full xl:h-[260px]' />
                                </div>
                            </div>
                        </div>
                    </BackgroundGradient>
                   
                    <BackgroundGradient className=" rounded-[22px] lg:p-10 p-5 bg-[#180A3C] dark:bg-zinc-900">
                        <div className=' w-full rounded-2xl'>
                            {/* image section  */}
                            <div className='  flex items-center gap-x-4'>
                                <div>
                                    <Image src={man1} alt='man1 image' className=' h-7 w-7 md:h-9 md:w-9 xl:h-16 xl:w-16 rounded-full border-4 border-[#FF5F1F]' />
                                </div>
                                <div>
                                    <h3 className=' text-white font-medium text-[12px] lg:text-sm xl:text-2xl pb-1'>John Doe</h3>
                                    <p className=' text-[#FF5F1F] font-normal text-[8px] xl:text-sm'>New York, USA</p>
                                </div>
                            </div>
                            {/* text and image section  */}

                            <div className='  grid grid-cols-3 items-center gap-x-0.5 mt-2'>
                                <div className=' col-span-2'>
                                    <div className='  flex items-center gap-x-0.5 mt-1 pb-2'>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className='text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                        <div>
                                            <IoMdStar className=' text-sm lg:text-lg xl:text-4xl text-[#FFD700]' />
                                        </div>
                                    </div>
                                    <p className=' flex gap-x-3'>
                                        <span>
                                            <FaQuoteLeft className=' text-lg md:text-2xl text-[#FF5F1F]' />
                                        </span>
                                        <span className='  text-[8px] lg:text-[10px] xl:text-[16px] leading-2.5 md:leading-3.5 lg:leading-4 xl:leading-6 font-normal text-white'>
                                            When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.
                                        </span>
                                    </p>
                                </div>
                                <div className=' col-span-1'>
                                    <Image src={astorateimage} alt='astro image' className=' w-16 h-28 xl:w-full xl:h-[260px]' />
                                </div>
                            </div>
                        </div>
                    </BackgroundGradient>
                </div>
            </div>
        </div>
    )
}
