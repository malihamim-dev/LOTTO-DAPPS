'use client'

import React from 'react'
import { FaListAlt } from "react-icons/fa";
import cardimage4 from '@/public/(Blogs-Images)/Blogs-Hero-Images/Gemini_Generated_Image_8slxpt8slxpt8slx 1.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


export default function All_Blogs() {
    return (
        <div className='px-5 md:px-5 lg:px-10 xl:px-20 2xl:px-28  max-w-[1596px] mx-auto opacity-95 pb-20 '>
            <div className=' grid md:grid-cols-4 md:gap-x-5'>
                <div className=' md:col-span-1 xl:px-10'>
                    <div className=' '>
                        <div className=' space-y-2 grid grid-cols-2 md:grid-cols-none items-center justify-between'>
                            <div>
                                <h1 className=' text-sm lg:text-lg xl:text-[22px] font-medium text-white'>Filters/ Categories</h1>
                            </div>
                            <div>
                                <h2 className=' text-xs text-center md:text-start lg:text-[16px] text-white  border border-[#ff5f1f] px-2 py-1 rounded-sm'>All Posts</h2>
                            </div>
                        </div>
                        <div className=' pt-3 xl:px-3'>
                            <ul className=' space-y-2.5 grid grid-cols-2 md:grid-cols-none gap-x-3'>
                                <li className=' flex items-center gap-x-2 border-b border-white pb-0.5 md:pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                                <li className=' flex items-center gap-x-2 border-b border-white pb-0.5 md:pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                                <li className=' flex items-center gap-x-2 border-b border-white pb-0.5 md:pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                                <li className=' flex items-center gap-x-2 border-b border-white pb-0.5 md:pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                                <li className=' flex items-center gap-x-2 border-b border-white pb-0.5 md:pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' md:col-span-2'>
                    <div>
                        <h1 className='text-lg lg:text-2xl xl:text-3xl text-center md:text-start font-medium text-white pb-7 pt-10 md:pt-0'>Featured Articles</h1>
                    </div>
                    <div className=' grid grid-cols-2  lg:grid-cols-3 gap-3 md:gap-6 lg:gap-3 xl:gap-3'>
                        <div className=' w-full bg-[#ffffff13] backdrop-blur-lg p-3 xl:p-4 rounded-[7px]'>
                            <div>
                                <Image src={cardimage4} alt='card image 1' className=' h-[90px] lg:h-[100px] xl:h-[120px] w-full rounded-[7px]' />
                            </div>
                            <div className=' space-y-1.5 pt-1.5'>
                                <h3 className='text-[9px] xl:text-[12px] font-semibold text-white'>Unlocking the power of decentralized Jackpot</h3>
                                <p className=' text-[6px] md:text-[8px] leading-2.5 md:leading-3 font-semibold text-white'>A stylized digital hand holding a glowing 3D secure wallet transaction.</p>
                            </div>
                            <div className=' pt-1.5 md:pt-2'>
                                <Button className=' text-[8px] md:text-[10px] bg-transparent rounded-full border border-[#FF5F1F] text-white h-6 md:h-7 w-[100px] font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                        <div className=' w-full bg-[#ffffff13] backdrop-blur-lg p-3 xl:p-4 rounded-[7px]'>
                            <div>
                                <Image src={cardimage4} alt='card image 1' className=' h-[90px] lg:h-[100px] xl:h-[120px] w-full rounded-[7px]' />
                            </div>
                            <div className=' space-y-1.5 pt-1.5'>
                                <h3 className='text-[9px] xl:text-[12px] font-semibold text-white'>Unlocking the power of decentralized Jackpot</h3>
                                <p className=' text-[6px] md:text-[8px] leading-2.5 md:leading-3 font-semibold text-white'>A stylized digital hand holding a glowing 3D secure wallet transaction.</p>
                            </div>
                            <div className=' pt-1.5 md:pt-2'>
                                <Button className=' text-[8px] md:text-[10px] bg-transparent rounded-full border border-[#FF5F1F] text-white h-6 md:h-7 w-[100px] font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                        <div className=' w-full bg-[#ffffff13] backdrop-blur-lg p-3 xl:p-4 rounded-[7px]'>
                            <div>
                                <Image src={cardimage4} alt='card image 1' className=' h-[90px] lg:h-[100px] xl:h-[120px] w-full rounded-[7px]' />
                            </div>
                            <div className=' space-y-1.5 pt-1.5'>
                                <h3 className='text-[9px] xl:text-[12px] font-semibold text-white'>Unlocking the power of decentralized Jackpot</h3>
                                <p className=' text-[6px] md:text-[8px] leading-2.5 md:leading-3 font-semibold text-white'>A stylized digital hand holding a glowing 3D secure wallet transaction.</p>
                            </div>
                            <div className=' pt-1.5 md:pt-2'>
                                <Button className=' text-[8px] md:text-[10px] bg-transparent rounded-full border border-[#FF5F1F] text-white h-6 md:h-7 w-[100px] font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                        <div className=' w-full bg-[#ffffff13] backdrop-blur-lg p-3 xl:p-4 rounded-[7px]'>
                            <div>
                                <Image src={cardimage4} alt='card image 1' className=' h-[90px] lg:h-[100px] xl:h-[120px] w-full rounded-[7px]' />
                            </div>
                            <div className=' space-y-1.5 pt-1.5'>
                                <h3 className='text-[9px] xl:text-[12px] font-semibold text-white'>Unlocking the power of decentralized Jackpot</h3>
                                <p className=' text-[6px] md:text-[8px] leading-2.5 md:leading-3 font-semibold text-white'>A stylized digital hand holding a glowing 3D secure wallet transaction.</p>
                            </div>
                            <div className=' pt-1.5 md:pt-2'>
                                <Button className=' text-[8px] md:text-[10px] bg-transparent rounded-full border border-[#FF5F1F] text-white h-6 md:h-7 w-[100px] font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                    Read More
                                </Button>
                            </div>
                        </div>



                    </div>
                </div>
                <div className=' md:col-span-1 pl-3 hidden md:block'>
                    <div className=' space-y-3'>
                        <h1 className=' text-white font-medium text-sm lg:text-lg xl:text-[22px]'>Stay Updated</h1>
                        <h4 className=' text-white font-medium text-xs lg:text-sm xl:text-[16px]'>Newsletter</h4>
                    </div>
                    <div className=' pt-3'>
                        <h1 className=' text-white font-medium text-sm lg:text-lg xl:text-[22px]'>Trending Topics</h1>
                        <div className=' pt-3 px-3'>
                            <ul className=' space-y-2.5'>
                                <li className=' flex items-center gap-x-2 pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                                <li className=' flex items-center gap-x-2 pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                                <li className=' flex items-center gap-x-2 pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                                <li className=' flex items-center gap-x-2 pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                                <li className=' flex items-center gap-x-2 pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                                <li className=' flex items-center gap-x-2 pb-2 '>
                                    <span>
                                        <FaListAlt className=' text-lg text-white' />
                                    </span>
                                    <span>
                                        <p className=' text-white text-[8px] md:text-[10px] lg:text-sm xl:text-[16px]'>Educational Articles</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' pt-10  flex items-center'>
                <div className=' flex items-center gap-x-5 mx-auto'>
                    <div>
                        <h5 className=' text-white text-xs md:text-sm lg:text-[16px] font-semibold cursor-prointer'>Previous</h5>
                    </div>
                    <div className=' flex items-center gap-x-3'>
                        <div className=' text-lg font-semibold h-10 w-10 flex items-center justify-center border border-[#ff5f1f] rounded-full hover:border-none hover:bg-[#ff5f1f] hover:scale-110 cursor-pointer'>
                            <p className=' text-white hover:scale-110'>1</p>
                        </div>
                        <div className=' text-lg font-semibold h-10 w-10 flex items-center justify-center border border-[#ff5f1f] rounded-full hover:border-none hover:bg-[#ff5f1f] hover:scale-110 cursor-pointer'>
                            <p className=' text-white hover:scale-110'>2</p>
                        </div>
                        <div className=' text-lg font-semibold h-10 w-10 flex items-center justify-center border border-[#ff5f1f] rounded-full hover:border-none hover:bg-[#ff5f1f] hover:scale-110 cursor-pointer'>
                            <p className=' text-white hover:scale-110'>3</p>
                        </div>
                    </div>
                    <div>
                        <h5 className=' text-white text-xs md:text-sm lg:text-[16px] font-semibold cursor-prointer'>Next</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
