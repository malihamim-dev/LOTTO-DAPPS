'use client'
import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {



    const pathname = usePathname();

    return (
        <div className=' bg-[#120B1D] px-5 md:px-8 lg:px-28  pt-10 opacity-95'>
            <div className='max-w-[1596px] mx-auto'>
                {/* full footer div  */}
                <div className=' grid md:grid-cols-6 gap-x-5 pb-10'>
                    {/* section 1  */}
                    <div className=' md:col-span-2 space-y-5'>
                        <h3 className='text-2xl  lg:text-4xl font-medium text-[#BA3FEC]'>Universe Lotto</h3>
                        <p className=' text-white text-sm lg:text-[16px] font-normal '>
                            The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content. The original text comes from Cicero's philosophical work "De Finibus Bonorum et Malorum," written in 45 BC.
                        </p>
                        <div className=' flex gap-x-4'>
                            <div>
                                <FaTelegram className=' text-3xl lg:text-4xl text-[#00ECE2]' />
                            </div>
                            <div>
                                <FaXTwitter className=' text-3xl lg:text-4xl text-[#00ECE2]' />
                            </div>
                            <div>
                                <FaYoutube className=' text-3xl lg:text-4xl text-[#00ECE2]' />
                            </div>
                            <div>
                                <IoLogoWhatsapp className=' text-3xl lg:text-4xl text-[#00ECE2]' />
                            </div>
                        </div>
                    </div>
                    {/* section 2  */}
                    <div className=' md:col-span-4 grid grid-cols-2 md:grid-cols-4 space-y-5 md:space-y-0 mt-5 lg:mt-0'>
                        <div className=' col-span-1 space-y-4'>
                            <h3 className=' text-xl lg:text-2xl font-medium text-[#00ECE2]'>Company</h3>
                            <ul className=' space-y-1  lg:space-y-4'>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Affiliate-Program' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Affiliate-Program'}> Affiliet</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Reffer-And-Earn' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Reffer-And-Earn'}> Reffer And Earn</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Contact-Us' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Contact-Us'}> Contact Us</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Terms-&-Conditions' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Terms-&-Conditions'}> Terms & Conditions</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Privacy-Policy' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Privacy-Policy'}> Privacy Policy</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Refund-Policy' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Refund-Policy'}> Refund Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className=' space-y-1  lg:space-y-4'>
                            <h3 className=' text-xl lg:text-2xl font-medium text-[#00ECE2]'>Information</h3>
                            <ul className='  space-y-1  lg:space-y-4'>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/FAQ' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/FAQ'}> FAQ</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Support' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Support'}> Support</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Fair-Play-Policy' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Fair-Play-Policy'}> Fair Play Policy</Link>
                                </li>
                            </ul>
                        </div>
                        {/* section 3  */}
                        <div className=' space-y-1  lg:space-y-4'>
                            <h3 className=' text-xl lg:text-2xl font-medium text-[#00ECE2]'>Legal</h3>
                            <ul className='  space-y-1  lg:space-y-4'>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Disclaimer' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Disclaimer'}> Disclaimer</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/License-&-Regulatory-Info' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/License-&-Regulatory-Info'}>License & Regulatory Info</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Security-&-Transparency' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Security-&-Transparency'}>Security & Transparency</Link>
                                </li>
                            </ul>
                        </div>
                        {/* section 4 */}
                        <div className=' space-y-1  lg:space-y-4'>
                            <h3 className=' text-xl lg:text-2xl font-medium text-[#00ECE2]'>Trust</h3>
                            <ul className='  space-y-1  lg:space-y-4'>
                                 <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Payment-Partners' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Payment-Partners'}>Payment Partners</Link>
                                </li>
                                <li className={`text-sm lg:text-[16px] font-semibold ${pathname === '/Auditing-&-Blockchain' ? "text-[#00ECE2]" : "text-white"}`}>
                                    <Link href={'/Auditing-&-Blockchain'}>Auditing & Blockchain</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
