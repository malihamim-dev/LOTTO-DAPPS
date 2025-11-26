import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
    return (
        <div className=' bg-[#120B1D] px-5 md:px-8 lg:px-28  pt-10 opacity-95'>

            <div className='max-w-[1596px] mx-auto'>
                {/* full footer div  */}
                <div className=' grid md:grid-cols-6 gap-x-5 pb-10'>

                    {/* div 1  */}
                    <div className=' md:col-span-2 space-y-5'>
                        <h3 className='text-2xl  lg:text-4xl font-medium text-[#FF5F1F]'>Universe Lotto</h3>
                        <p className=' text-white text-sm lg:text-[16px] font-normal '>
                            The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content. The original text comes from Cicero's philosophical work "De Finibus Bonorum et Malorum," written in 45 BC.
                        </p>
                        <div className=' flex gap-x-4'>
                            <div>
                                <FaTelegram className=' text-3xl lg:text-4xl text-[#FF5F1F]' />
                            </div>
                            <div>
                                <FaXTwitter className=' text-3xl lg:text-4xl text-[#FF5F1F]' />
                            </div>
                            <div>
                                <FaYoutube className=' text-3xl lg:text-4xl text-[#FF5F1F]' />
                            </div>
                            <div>
                                <IoLogoWhatsapp className=' text-3xl lg:text-4xl text-[#FF5F1F]' />
                            </div>
                        </div>
                    </div>
                    {/* div 2  */}
                    <div className=' md:col-span-4 grid grid-cols-2 md:grid-cols-4 space-y-5 md:space-y-0 mt-5 lg:mt-0'>
                        <div className=' col-span-1 space-y-4'>
                            <h3 className=' text-xl lg:text-2xl font-medium text-[#FF5F1F]'>Company</h3>
                            <ul className=' space-y-1  lg:space-y-4'>
                                <li className=' text-sm lg:text-[16px] text-white font-semibold'>About Us</li>
                                <li className=' text-sm lg:text-[16px] text-white font-semibold'>Contact Us</li>
                                <li className=' text-sm lg:text-[16px] text-white font-semibold'>Terms & Conditions</li>
                                <li className=' text-sm lg:text-[16px] text-white font-semibold'>Privacy Policy</li>
                                <li className=' text-sm lg:text-[16px] text-white font-semibold'>Refund Policy</li>
                            </ul>
                        </div>
                        <div className=' space-y-1  lg:space-y-4'>
                            <h3 className=' text-xl lg:text-2xl font-medium text-[#FF5F1F]'>Information</h3>
                            <ul className='  space-y-1  lg:space-y-4'>
                                <li className='  text-sm lg:text-[16px] text-white font-semibold'>FAQ</li>
                                <li className='  text-sm lg:text-[16px] text-white font-semibold'>How It Works</li>
                                <li className='  text-sm lg:text-[16px] text-white font-semibold'>Support</li>
                                <li className='  text-sm lg:text-[16px] text-white font-semibold'>Fair Play Policy</li>
                            </ul>
                        </div>
                        {/* div 3  */}
                        <div className=' space-y-1  lg:space-y-4'>
                            <h3 className=' text-xl lg:text-2xl font-medium text-[#FF5F1F]'>Legal</h3>
                            <ul className='  space-y-1  lg:space-y-4'>
                                <li className='  text-sm lg:text-[16px] text-white font-semibold'>Disclaimer</li>
                                <li className='  text-sm lg:text-[16px] text-white font-semibold'>License & Regulatory Info</li>
                                <li className='  text-sm lg:text-[16px] text-white font-semibold'>Security & Transparency</li>
                            </ul>
                        </div>
                        {/* div 4 */}
                        <div className=' space-y-1  lg:space-y-4'>
                            <h3 className=' text-xl lg:text-2xl font-medium text-[#FF5F1F]'>Trust</h3>
                            <ul className='  space-y-1  lg:space-y-4'>
                                <li className='  text-sm lg:text-[16px] text-white font-semibold'>Payment Partners</li>
                                <li className='  text-sm lg:text-[16px] text-white font-semibold'>Auditing & Blockchain</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
