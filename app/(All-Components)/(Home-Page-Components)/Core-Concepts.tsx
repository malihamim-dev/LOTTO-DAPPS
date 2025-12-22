"use client";
import React, { useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import logo from '../../../public/(home-page-image)/Core_Concept_Section_Image/Logo.png'
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

    const Step = ({ title }: { title: string }) => {
        return (
            <li className="flex gap-2 items-start">
                <p className="text-white">{title}</p>
            </li>
        );
    };

    return (
        <div className='  px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 pb-10 md:pb-20 max-w-[1596px] mx-auto'>
            <div>
                <div className=' opacity-95 bg-none'>
                    <div className=' grid md:grid-cols-12 md:gap-x-6 xl:gap-x-16 items-center justify-between '>
                        <div className=' space-y-5 md:col-span-9'>
                            <p className=' text-sm font-medium text-white bg-[#333333] md:inline-block px-3 py-0.5 rounded-sm text-center '>Learn, Connect, and Innovate</p>
                            <h3 className=' font-bold text-2xl md:text-3xl xl:text-4xl text-white text-center md:text-start'>Be Part of the Future Lotto Revolution</h3>
                            <p className=' text-[12px] md:text-sm text-center md:text-start font-normal text-[#ffffff]'>
                                Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
                            </p>
                        </div>
                        <div className=' md:col-span-3 hidden md:block'>
                            <div className=' flex items-center justify-center'>
                                <Image src={logo} alt='logo' className=' md:h-20 md:w-20 xl:h-24 xl:w-24 ' />
                            </div>
                        </div>
                    </div>
                    <div className=' grid  grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 rounded-[12px] mt-3 py-5 backdrop-blur-sm '>
                        {
                            coreConcept.map((concepts, index) => (
                                <div key={index} className=' p-2 md:p-5 space-y-2 md:space-y-5 bg-[#262626]/30 rounded-[12px] backdrop-blur-lg'>
                                    <div className=' flex justify-between items-center '>
                                        <h4 className=' text-xs md:text-lg lg:text-[16px] xl:text-lg font-semibold text-white'>{concepts?.title}</h4>
                                        <span className=' p-1 md:p-0 md:h-10 md:w-10 lg:h-8 lg:w-8 xl:h-10 xl:w-10 rounded-full bg-[#FF5F1F] opacity-95 flex items-center justify-center'>
                                            <GoArrowUpRight className=' text-white text-sm md:text-2xl' />
                                        </span>
                                    </div>
                                    <div>
                                        <p className=' text-[8px] md:text-[12px] font-medium text-[#ffffff]'>{concepts?.summary}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

