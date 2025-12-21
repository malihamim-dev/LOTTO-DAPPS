'use client'

import { BorderBeam } from '@/components/ui/border-beam';
import Image from 'next/image';
import { ImSpinner9 } from "react-icons/im";
import bollimage from '@/public/(how-it-work-image)/Ticket_Purches_Calculation_Card/ball.png'
import { FaEthereum } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/stateful-button";


export default function Ticket_Purches_Calculation_Card() {

    const handleClick = () => {
        return new Promise((resolve) => {
            setTimeout(resolve, 4000);
        });
    };

    return (
        <div className=' px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28  max-w-[1596px] mx-auto opacity-95 pb-20'>
            <div className=' pb-10 '>
                <h1 className='text-xl md:text-3xl lg:text-[28px] xl:text-4xl font-semibold text-white text-center'>Compleate Your Jakopt Number Purches</h1>
            </div>
            <div className='flex items-center gap-x-4 border-b-2 pb-3'>
                <ImSpinner9 className='text-white font-semibold text-2xl' />
                <h4 className='text-white text-sm md:text-xs lg:text-lg xl:text-xl font-semibold'>Shopping Continue</h4>
            </div>
            <div className='flex items-center gap-x-4 pt-5 space-x-20'>
                <h4 className='text-white text-sm md:text-[10px] lg:text-sm xl:text-xl font-semibold'>Shopping cart</h4>
                <h4 className='text-[#D8D8D8] text-[8px] lg:text-[10px] md:text-sm font-semibold pt-2'>You have 3 items in your cart</h4>
            </div>
            <div className='grid md:grid-cols-2 mt-10 gap-x-7'>
                <div className=' space-y-3 lg:space-y-4 xl:space-y-3  col-span-1 grid grid-rows-3'>
                    <div className=' h-20 lg:h-24 xl:h-32 w-full bg-[#0C042C] px-5 lg:px-10 rounded-[10px] lg:rounded-2xl relative items-center justify-around grid grid-cols-5'>
                        <BorderBeam duration={8} size={100} />
                        <div>
                            <Image
                                src={bollimage}
                                alt='ball image'
                                className=' h-10 lg:h-16 w-10 lg:w-16 rounded-full' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h4 className='text-lg font-medium text-white'>50</h4>
                        </div>
                        <div className='flex items-center justify-center'>
                            <FaEthereum className=' text-4xl lg:text-5xl text-[#00ECE2]' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h5 className='text-lg font-medium text-white'>$100</h5>
                        </div>
                        <div className='flex items-center justify-end text-lg font-medium text-white'>
                            <MdDelete className='text-3xl text-[#BA3FEC]' />
                        </div>
                    </div>
                   <div className=' h-20 lg:h-24 xl:h-32 w-full bg-[#0C042C] px-5 lg:px-10 rounded-[10px] lg:rounded-2xl relative items-center justify-around grid grid-cols-5'>
                        <BorderBeam duration={8} size={100} />
                        <div>
                            <Image
                                src={bollimage}
                                alt='ball image'
                                className=' h-10 lg:h-16 w-10 lg:w-16 rounded-full' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h4 className='text-lg font-medium text-white'>50</h4>
                        </div>
                        <div className='flex items-center justify-center'>
                            <FaEthereum className=' text-4xl lg:text-5xl text-[#00ECE2]' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h5 className='text-lg font-medium text-white'>$100</h5>
                        </div>
                        <div className='flex items-center justify-end text-lg font-medium text-white'>
                            <MdDelete className='text-3xl text-[#BA3FEC]' />
                        </div>
                    </div>
                    <div className=' h-20 lg:h-24 xl:h-32 w-full bg-[#0C042C] px-5 lg:px-10 rounded-[10px] lg:rounded-2xl relative items-center justify-around grid grid-cols-5'>
                        <BorderBeam duration={8} size={100} />
                        <div>
                            <Image
                                src={bollimage}
                                alt='ball image'
                                className=' h-10 lg:h-16 w-10 lg:w-16 rounded-full' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h4 className='text-lg font-medium text-white'>50</h4>
                        </div>
                        <div className='flex items-center justify-center'>
                            <FaEthereum className=' text-4xl lg:text-5xl text-[#00ECE2]' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h5 className='text-lg font-medium text-white'>$100</h5>
                        </div>
                        <div className='flex items-center justify-end text-lg font-medium text-white'>
                            <MdDelete className='text-3xl text-[#BA3FEC]' />
                        </div>
                    </div>
                </div>
                <div className=' col-span-1'>
                    <div
                        className=' p-3 md:p-5 w-full rounded-2xl h-full bg-[#ffffff0f] backdrop-blur-lg mt-5 md:mt-0'>
                        <div className=' space-y-2 lg:p-2 p-5 xl:p-20'>
                            <h3 className=' text-sm lg:text-[16] xl:text-lg font-bold text-white leading-8 uppercase'>
                                Order Summary
                            </h3>
                            <div>
                                <div className=' space-y-3 lg:space-y-4 xl:space-y-6 pt-5'>
                                    <div className=' flex items-center justify-between'>
                                        <h3 className=' text-white font-bold text-xs xl:text-[16px]'>Order</h3>
                                        <p className=' text-[16px] font-medium text-[#BA3FEC]'>$.1123</p>
                                    </div>
                                    <div className=' flex items-center justify-between'>
                                        <h3 className=' text-white font-bold text-xs xl:text-[16px]'>Apply Cupon</h3>
                                        <p className=' text-[16px] font-medium text-[#BA3FEC]'>$.60</p>
                                    </div>
                                    <div className=' flex items-center justify-between'>
                                        <h3 className=' text-white font-bold text-xs xl:text-[16px]'>Total Ticket Price</h3>
                                        <p className=' text-[16px] font-medium text-[#00ECE2]'>$.1183</p>
                                    </div>
                                </div>
                                <div className=' mt-10 md:mt-5 lg:mt-10 '>
                                    <Button onClick={handleClick} className='flex text-center g-gradient-to-r from-[#dc838a] to-[#433281] shadow-2xl w-full text-[16px] md:text-sm lg:text-[16px] font-semibold md:h-8 h-10 lg:h-10 rounded-full bg-[#1B0C41] text-white'> Buy Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
