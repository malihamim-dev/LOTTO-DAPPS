'use client'
import React from 'react'
import { TextAnimate } from "@/components/ui/text-animate"
import universe_image from '../../../public/(home-page-image)/Universe_Result_Image/universe_image.png'
import Image from 'next/image'
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { GoArrowUpRight } from 'react-icons/go'


export default function Jackpots_Rounds() {
    return (
        <div className='  px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 gap-x-5 pb-10  max-w-[1596px] space-y-5 md:space-y-0'>
            {/* heading title  */}
            <div className=''>
                <h1 className='text-[#ffffff] text-center text-3xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium leading-9 md:leading-7 lg:leading-14 pb-5 opacity-95'>
                    <TextAnimate animation="slideLeft" by="character">
                        Win Big. Win Fair. Win Instantly
                    </TextAnimate>
                </h1>
                <p className='text-[#ffffff] text-center font-semibold text-[12px] lg:text-[12px] xl:text-[16px]  leading-6 md:leading-3 lg:leading-6 opacity-95'>
                    <TextAnimate animation="slideUp" by="word">
                        Join thousands of players already winning with transparent blockchain draws.
                    </TextAnimate>
                </p>
            </div>
            <div className='grid md:grid-cols-3 items-center justify-center mx-auto gap-x-5'>

                {/* left div  */}
                <div className='pt-3.5'>
                    <div>
                        <h3 className=' text-[#ffffff] text-lg md:text-[16px] lg:text-lg xl:text-3xl text-center md:text-start font-medium pt-5 opacity-95'>Next Draw</h3>
                        <div className=' text-white text-center md:text-start font-medium text-2xl pt-2 flex items-center justify-center md:items-start md:justify-start opacity-95'>
                            <div className=' pr-3'>
                                <p>121 </p>
                                <p className=' text-[12px] text-[#FF5F1F]'>Days</p>
                            </div> |
                            <div className=' px-3'>
                                <p>21 </p>
                                <p className=' text-[12px] text-[#FF5F1F]'>Hours</p>
                            </div>|
                            <div className=' px-3'>
                                <p>05 </p>
                                <p className=' text-[12px] text-[#FF5F1F]'>Minutes</p>
                            </div>|
                            <div className=' px-3'>
                                <p>24</p>
                                <p className=' text-[12px] text-[#FF5F1F]'>Seconds</p>
                            </div>

                        </div>
                    </div>
                    <div className=' mt-10'>
                        <div>
                            <div className=' flex gap-x-5 items-center justify-center md:items-start md:justify-start'>
                                <div>
                                    <h1 className='text-xl md:text-lg lg:text-xl xl:text-[24px] font-medium  text-white   opacity-95'> Smart Play Results</h1>
                                </div>
                                <div className=' h-8 w-8 md:h-7 md:w-7 rounded-full bg-[#FF5F1F] opacity-95 flex items-center justify-center'>
                                    <GoArrowUpRight className=' text-white text-lg' />
                                </div>
                            </div>
                            <div className=' mt-5'>
                                <BackgroundGradient className="relative rounded-[22px]  bg-[#180A3C] dark:bg-zinc-900 overflow-hidden   p-7 md:p-4 lg:p-7 space-y-1">
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                                </BackgroundGradient>
                            </div>
                        </div>
                    </div>
                </div>

                {/* middle div  */}
                <div className=' opacity-95'>
                    <Image
                        src={universe_image}
                        alt="universe image"
                        className=' h-44 w-ful md:h-full' />
                </div>
                {/* right div  */}
                <div className='pt-3.5'>
                    <div>
                        <h3 className=' text-[#ffffff] text-lg md:text-[16px] lg:text-lg xl:text-3xl text-center md:text-start font-medium pt-5 opacity-95'>Next Draw</h3>
                        <div className=' text-white text-center md:text-start font-medium text-2xl pt-2 flex items-center justify-center md:items-start md:justify-start opacity-95'>
                            <div className=' pr-3'>
                                <p>121 </p>
                                <p className=' text-[12px] text-[#FF5F1F]'>Days</p>
                            </div> |
                            <div className=' px-3'>
                                <p>21 </p>
                                <p className=' text-[12px] text-[#FF5F1F]'>Hours</p>
                            </div>|
                            <div className=' px-3'>
                                <p>05 </p>
                                <p className=' text-[12px] text-[#FF5F1F]'>Minutes</p>
                            </div>|
                            <div className=' px-3'>
                                <p>24</p>
                                <p className=' text-[12px] text-[#FF5F1F]'>Seconds</p>
                            </div>

                        </div>
                    </div>
                    <div className=' mt-10'>
                        <div>
                            <div className=' flex gap-x-5 items-center justify-center md:items-start md:justify-start'>
                                <div>
                                    <h1 className='text-xl md:text-lg lg:text-xl xl:text-[24px] font-medium  text-white   opacity-95'> Smart Play Results</h1>
                                </div>
                                <div className=' h-8 w-8 md:h-7 md:w-7 rounded-full bg-[#FF5F1F] opacity-95 flex items-center justify-center'>
                                    <GoArrowUpRight className=' text-white text-lg' />
                                </div>
                            </div>
                            <div className=' mt-5'>
                                <BackgroundGradient className="relative rounded-[22px]  bg-[#180A3C] dark:bg-zinc-900 overflow-hidden   p-7 md:p-4 lg:p-7 space-y-1">
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                                    <p className='text-[12px] md:text-[10px] lg:text-[12px] xl:text-[16px] font-medium space-x-3 text-center'>
                                        <span className=' text-[#FF5F1F]'>
                                            #425 Round
                                        </span>
                                        <span className=' text-[#ffffff]'>
                                            11,387,444.75
                                        </span>
                                        <span className=' text-[#FF5F1F]'>
                                            USDT
                                        </span>
                                    </p>
                     </BackgroundGradient>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
