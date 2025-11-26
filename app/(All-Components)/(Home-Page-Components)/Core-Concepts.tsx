"use client";
import React, { useState } from 'react'
import { TextAnimate } from "@/components/ui/text-animate"
import ailotty from '../../../public/(Lotty_files)/(home-lotty)/Core_Concept_Lotty/AI data.json'
import { GoArrowUpRight } from 'react-icons/go';

import logo from '../../../public/(home-page-image)/Core_Concept_Section_Image/lottoball.png'
import Image from 'next/image';

export default function Core_Concepts() {


    const [coreConcept, setCoreConcept] = useState<any[]>([]);


    // fetch all core concept json 

    React.useEffect(() => {

        fetch('/json-Files/home_json/core_concept.json')
            .then(res => res.json())
            .then((data) => {
                setCoreConcept(data)
            });

    }, [])

    // console.log('this is core concept data', coreConcept)

    const Step = ({ title }: { title: string }) => {
        return (
            <li className="flex gap-2 items-start">
                <p className="text-white">{title}</p>
            </li>
        );
    };



    return (
     
            <div className='  px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 pb-10 max-w-[1596px] mx-auto'>
                <div>
                    <div className=' opacity-95 bg-none'>
                        <div className=' flex gap-x-16 items-center justify-between '>
                            <div className=' space-y-5'>
                                <p className=' text-sm font-medium text-white bg-[#333333] inline-block px-3 py-0.5 rounded-sm'>Learn, Connect, and Innovate</p>
                                <h3 className=' font-medium text-4xl text-white'>Be Part of the Future Lotto Revolution</h3>
                                <p className=' text-sm font-normal text-[#7E7E81]'>
                                    Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
                                </p>
                            </div>
                             <div>
                                <Image src={logo} alt='logo' className=' h-full w-full' />
                            </div>
                        </div>
                        <div className=' grid grid-cols-3 gap-5  rounded-[12px] mt-3 py-5  backdrop-blur-sm'>
                            <div className=' p-5 space-y-5 bg-[#262626]/30 rounded-[12px] backdrop-blur-lg'>
                                <div className=' flex justify-between items-center '>
                                    <h4 className=' text-lg font-semibold text-white'>Smart Contact Automation</h4>
                                    <span className=' h-10 w-10 rounded-full bg-[#FF5F1F] opacity-95 flex items-center justify-center'>
                                        <GoArrowUpRight className=' text-white text-2xl' />
                                    </span>
                                </div>
                                <div>
                                    <p className=' text-[12px] font-medium text-[#ffffff]'>All operations - ticket sales, draw triggers, prize payouts, affiliate commissions, are revenue allocations.</p>
                                </div>
                            </div>
                           
                            <div className=' p-5 space-y-5 bg-[#262626]/30 rounded-[12px] backdrop-blur-lg'>
                                <div className=' flex justify-between items-center '>
                                    <h4 className=' text-lg font-semibold text-white'>Verifiable Random Draws</h4>
                                    <span className=' h-10 w-10 rounded-full bg-[#FF5F1F] opacity-95 flex items-center justify-center'>
                                        <GoArrowUpRight className=' text-white text-2xl' />
                                    </span>
                                </div>
                                <div>
                                    <p className=' text-[12px] font-medium text-[#ffffff]'>The winner is selected using blockchain-based Verifiable Random Functions .</p>
                                </div>
                            </div>
                           
                            <div className=' p-5 space-y-5 bg-[#262626]/30 rounded-[12px] backdrop-blur-lg'>
                                <div className=' flex justify-between items-center '>
                                    <h4 className=' text-lg font-semibold text-white'>Immutable Transparency</h4>
                                    <span className=' h-10 w-10 rounded-full bg-[#FF5F1F] opacity-95 flex items-center justify-center'>
                                        <GoArrowUpRight className=' text-white text-2xl' />
                                    </span>
                                </div>
                                <div>
                                    <p className=' text-[12px] font-medium text-[#ffffff]'>Every transaction, from ticket purchase is permanently recorded on blockchain ledger.</p>
                                </div>
                            </div>
                           
                            <div className=' p-5 space-y-5 bg-[#262626]/30 rounded-[12px] backdrop-blur-lg'>
                                <div className=' flex justify-between items-center '>
                                    <h4 className=' text-lg font-semibold text-white'>Wallet-Based Ownership</h4>
                                    <span className=' h-10 w-10 rounded-full bg-[#FF5F1F] opacity-95 flex items-center justify-center'>
                                        <GoArrowUpRight className=' text-white text-2xl' />
                                    </span>
                                </div>
                                <div>
                                    <p className=' text-[12px] font-medium text-[#ffffff]'>Each ticket purchase is tied directly to the user’s blockchain wallet address, ensuring secure, private and verifiable ownership.</p>
                                </div>
                            </div>
                           
                            <div className=' p-5 space-y-5 bg-[#262626]/30 rounded-[12px] backdrop-blur-lg'>
                                <div className=' flex justify-between items-center '>
                                    <h4 className=' text-lg font-semibold text-white'>Security and Auditability</h4>
                                    <span className=' h-10 w-10 rounded-full bg-[#FF5F1F] opacity-95 flex items-center justify-center'>
                                        <GoArrowUpRight className=' text-white text-2xl' />
                                    </span>
                                </div>
                                <div>
                                    <p className=' text-[12px] font-medium text-[#ffffff]'>All Smart Contracts undergo independent code result for security and accuracy.</p>
                                </div>
                            </div>
                           
                            <div className=' p-5 space-y-5 bg-[#262626]/30 rounded-[12px] backdrop-blur-lg'>
                                <div className=' flex justify-between items-center '>
                                    <h4 className=' text-lg font-semibold text-white'>Decentralized Draw Mechanics</h4>
                                    <span className=' h-10 w-10 rounded-full bg-[#FF5F1F] opacity-95 flex items-center justify-center'>
                                        <GoArrowUpRight className=' text-white text-2xl' />
                                    </span>
                                </div>
                                <div>
                                    <p className=' text-[12px] font-medium text-[#ffffff]'>Smart contracts manage ticket sales. allocations are distributed instantly and transparently.</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
    
    )
}

