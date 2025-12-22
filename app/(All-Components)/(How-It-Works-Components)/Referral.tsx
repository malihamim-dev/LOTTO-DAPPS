
'use client';

import { TextAnimate } from "@/components/ui/text-animate"
import React, { forwardRef, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import './(How-It-Works-Css)/Refferal.css'
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import refferalImage from '../../../public/(home-page-image)/Banner-Image/person.png'





const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "flex size-20 items-center justify-center   z-40 p-0 ",
                className
            )}>
            {children}
        </div>
    )
})
Circle.displayName = "Circle"




export default function Referral() {


    const [refferal, setPrefferal] = useState<any[]>([]);
    React.useEffect(() => {
        fetch("/json-Files/home_json/refferal.json")
            .then((res) => res.json())
            .then(data => (
                setPrefferal(data)
            ))
    }, []);


    const containerRef = useRef<HTMLDivElement>(null)
    const divRefs = Array.from({ length: 7 }, () => useRef<HTMLDivElement>(null))


    return (
        <div className=" pb-20">
            {/* refferal div  */}

            <div>
                {/* Header text */}
                <div className="text-center space-y-4 mb-10 px-4">
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-2xl xl:text-4xl opacity-95 text-white">
                        Referral Program - Boost Your Earnings
                    </h3>
                    <p className="text-[#ffffff] text-[12px] md:text-[16px] font-medium md:font-semibold max-w-2xl mx-auto w-full md:w-[65%] opacity-95">
                        <TextAnimate animation="blurIn" as="h1">
                            Start play with confidence. Our team is here to provide you with the guidance and support you need to make the most of your investments.
                        </TextAnimate>
                    </p>
                </div>
                {/* button section  */}
                <div className=' mx-auto mb-10 opacity-95 px-2'>
                    <div className=' w-full md:w-[70%] h-4 md:h-7 xl:h-14 mx-auto grid grid-cols-2  rounded-full bg-black/50 backdrop-blur-xl  shadow-sm shadow-[#ffffff]' >
                        <div>
                            <h3 className=' text-[6px] md:text-[12px] xl:text-[16px] flex items-center justify-center text-center w-full h-full text-white border-r-2'>Copy Referral Link & Send To Affiliate Partner</h3>
                        </div>
                        <div>
                            <h3 className=' text-[6px] md:text-[12px] xl:text-[16px] flex items-center justify-center text-center w-full h-full text-white'>Check Your Level Income From The Play</h3>

                        </div>
                    </div>
                </div>


                {/* refferal list mobile and tab responsive  */}

                {/* Diagram */}
                <div className=" block lg:hidden -mt-20">
                    <div className=' flex items-center justify-center opacity-95'>
                        <div className=' flex '>
                            {/* level section  */}
                            <div className=' -space-y-16 md:-space-y-[100px]'>
                                <div className=' flex items-center '>
                                    <div className=' flex pt-14 md:pt-10'>
                                        <div className=''>
                                            <h4 className=' text-[12px] md:text-lg lg:text-2xl font-bold px-5 text-[#FF5F1F]'>You</h4>
                                        </div>
                                        <div className=' flex items-center pl-0 md:pl-7'>
                                            <p className=' border-[#FF5F1F] border-t md:border-t w-10 md:w-20'></p>
                                            <p><IoMdArrowDropright className=' text-sm md:text-2xl -ml-1 md:-ml-3 text-[#FF5F1F]' /></p>
                                        </div>
                                    </div>
                                    <div className='-ml-1 items-center justify-center mx-auto mt-20'>
                                        <div className=" z-10">
                                            <p className=' h-7 w-7 md:h-16 md:w-16 opacity-95'><Image src={refferalImage} alt='image' className=' h-full w-full  rounded-full p-0 md:p-1  shadow-2xl inline-block ' /></p>
                                        </div>
                                        <div className=' items-center justify-center ml-3.5 md:ml-8'>
                                            <p className=' border-l md:border-l h-5 border-[#FF5F1F]'></p>
                                            <p className=' text-sm md:text-4xl  text-[#FF5F1F] -ml-[7px] md:-ml-[17px] -mt-2 md:-mt-4'><MdArrowDropDown /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex items-center mt-7 md:mt-1'>
                                    <div className='flex pt-14'>
                                        <div>
                                            <h4 className=' text-[12px] md:text-lg lg:text-2xl font-medium px-4 md:px-5 -mt-9 md:mt-0 text-white'>Level 1</h4>
                                        </div>
                                        <div className=' flex items-center -mt-12 md:mt-0'>
                                            <p className=' border-[#FF5F1F] border-t md:border-t w-10 md:w-20'></p>
                                            <p><IoMdArrowDropright className=' text-sm md:text-2xl -ml-2 md:-ml-3 text-[#FF5F1F]' /></p>
                                        </div>
                                    </div>
                                    <div className='-ml-2 items-center justify-center mx-auto mt-7 md:mt-20'>
                                        <div>
                                            <p className=' h-7 w-7 md:h-16 md:w-16'><Image src={refferalImage} alt='image' className=' h-full w-full  rounded-full p-0 md:p-1  shadow-2xl inline-block' /></p>
                                        </div>
                                        <div className=' items-center justify-center ml-3.5 md:ml-8'>
                                            <p className=' border-l md:border-l h-5 border-[#FF5F1F]'></p>
                                            <p className=' text-sm md:text-4xl  text-[#FF5F1F] -ml-1.5 md:-ml-[17px] -mt-2 md:-mt-4'><MdArrowDropDown /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex items-center mt-7 md:mt-0 '>
                                    <div className='flex pt-14'>
                                        <div>
                                            <h4 className=' text-[12px] md:text-lg lg:text-2xl font-medium px-4 md:px-5 -mt-9 md:mt-0 text-white'>Level 2</h4>
                                        </div>
                                        <div className=' flex items-center -mt-12 md:mt-0'>
                                            <p className=' border-[#FF5F1F] border-t md:border-t w-10 md:w-20'></p>
                                            <p><IoMdArrowDropright className=' text-sm md:text-2xl -ml-2 md:-ml-3 text-[#FF5F1F]' /></p>
                                        </div>
                                    </div>
                                    <div className='-ml-2.5 md:ml-0 items-center justify-center mx-auto mt-7 md:mt-20'>
                                        <div>
                                            <p className=' h-7 w-7 md:h-16 md:w-16'><Image src={refferalImage} alt='image' className=' h-full w-full  rounded-full p-0 md:p-1  shadow-2xl inline-block' /></p>
                                        </div>
                                        <div className=' items-center justify-center ml-3.5 md:ml-8'>
                                            <p className=' border-l md:border-l h-5 border-[#FF5F1F]'></p>
                                            <p className=' text-sm md:text-4xl  text-[#FF5F1F] -ml-1.5 md:-ml-[17px] -mt-2 md:-mt-4'><MdArrowDropDown /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex items-center mt-7 md:mt-0'>
                                    <div className='flex pt-14'>
                                        <div>
                                            <h4 className='text-[12px] md:text-lg lg:text-2xl font-medium px-4 md:px-5 -mt-9 md:mt-0 text-white'>Level 3</h4>
                                        </div>
                                        <div className=' flex items-center -mt-12 md:mt-0'>
                                            <p className=' border-[#FF5F1F] border-t md:border-t w-10 md:w-20'></p>
                                            <p><IoMdArrowDropright className=' text-sm md:text-2xl -ml-2 md:-ml-3 text-[#FF5F1F]' /></p>
                                        </div>
                                    </div>
                                    <div className='-ml-2.5 md:ml-0 items-center justify-center mx-auto mt-7 md:mt-20'>
                                        <div>
                                            <p className=' h-7 w-7 md:h-16 md:w-16'><Image src={refferalImage} alt='image' className=' h-full w-full  rounded-full p-0 md:p-1  shadow-2xl inline-block' /></p>
                                        </div>
                                        <div className=' items-center justify-center ml-3.5 md:ml-8'>
                                            <p className=' border-l md:border-l h-5 border-[#FF5F1F]'></p>
                                            <p className=' text-sm md:text-4xl  text-[#FF5F1F] -ml-1.5 md:-ml-[17px] -mt-2 md:-mt-4'><MdArrowDropDown /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex items-center mt-7 md:mt-0'>
                                    <div className='flex pt-14'>
                                        <div>
                                            <h4 className=' text-[12px] md:text-lg lg:text-2xl font-medium px-4 md:px-5 -mt-9 md:mt-0 text-white'>Level 4</h4>
                                        </div>
                                        <div className=' flex items-center -mt-12 md:mt-0'>
                                            <p className=' border-[#FF5F1F] border-t md:border-t w-10 md:w-20'></p>
                                            <p><IoMdArrowDropright className=' text-sm md:text-2xl -ml-2 md:-ml-3 text-[#FF5F1F]' /></p>
                                        </div>
                                    </div>
                                    <div className='-ml-2.5 md:ml-0 items-center justify-center mx-auto mt-7 md:mt-20'>
                                        <div>
                                            <p className=' h-7 w-7 md:h-16 md:w-16'><Image src={refferalImage} alt='image' className=' h-full w-full  rounded-full p-0 md:p-1  shadow-2xl inline-block' /></p>
                                        </div>
                                        <div className=' items-center justify-center ml-3.5 md:ml-8'>
                                            <p className=' border-l md:border-l h-5 border-[#FF5F1F]'></p>
                                            <p className=' text-sm md:text-4xl  text-[#FF5F1F] -ml-1.5 md:-ml-[17px] -mt-2 md:-mt-4'><MdArrowDropDown /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex items-center mt-8 md:mt-0'>
                                    <div className='flex pt-5 md:pt-20'>
                                        <div>
                                            <h4 className=' text-[12px] md:text-lg lg:text-2xl font-medium px-4 md:px-5 mt-0 md:mt-0 text-white'>Level 5</h4>
                                        </div>
                                        <div className=' flex items-center mt-0 md:mt-0'>
                                            <p className=' border-[#FF5F1F] border-t md:border-t w-10 md:w-20'></p>
                                            <p><IoMdArrowDropright className=' text-sm md:text-2xl -ml-2 md:-ml-3 text-[#FF5F1F]' /></p>
                                        </div>
                                    </div>
                                    <div className='-ml-2.5 md:ml-1 items-center justify-center mx-auto mt-5 md:mt-20'>
                                        <div>
                                            <p className=' h-7 w-7 md:h-16 md:w-16'><Image src={refferalImage} alt='image' className=' h-full w-full  rounded-full p-0 md:p-1  shadow-2xl inline-block' /></p>
                                        </div>
                                        <div className=' items-center justify-center ml-3.5 md:ml-8'>
                                            <p className=' border-l-2 md:border-l h-5 border-[#FF5F1F] hidden'></p>
                                            <p className=' text-sm md:text-4xl  text-[#FF5F1F] -ml-1.5 md:-ml-[17px] -mt-2 md:-mt-4 hidden'><MdArrowDropDown /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
 
                            {/* level div 2  */}

                            <div className="mt-24 md:mt-28 flex ml-0">
                                {/* Left border section */}
                                <div className=" border-t md:border-t border-r md:border-r w-14 md:w-14 lg:w-20 xl:w-20 rounded-tr-2xl  border-[#FF5F1F] -ml-4"></div>
                                {/* Right content section */}
                                <div className="flex flex-col justify-between mt-12 md:mt-32 ">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className="flex justify-center items-center">
                                            {/* Arrow line + icon */}
                                            <div className="flex items-center">
                                                <p className=" border-t md:border-t w-7  md:w-10 lg:w-20 xl:w-28 border-[#FF5F1F]"></p>
                                                <p className="text-sm md:text-2xl -ml-2 md:-ml-4 text-[#FF5F1F]">
                                                    <IoMdArrowDropright />
                                                </p>
                                            </div>
                                            {/* Box */}
                                            <div className="  border border-[#FF5F1F] bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block h-5 md:h-8 lg:h-10 w-full p-1 md:px-5 rounded-sm lg:rounded-md ml-2">
                                                <p className="text-white text-[6px] md:text-sm lg:text-lg xl:text-lg  h-full flex items-center justify-center leading-1.5">You will get 10% from level one</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* animated refferal beam laptop and desktop view  */}

                <div className=" hidden lg:block">
                    <div
                        className={cn(
                            "relative flex h-full w-full items-center justify-center overflow-hidden pl-28 pr-28 py-10  ",
                        )} ref={containerRef}>
                        <div className="flex size-full  items-stretch justify-between gap-10 pr-36">
                            <div className="flex flex-col justify-center relative ">
                                <Circle ref={divRefs[6]} className=" h-full w-full object-cover">
                                    <div
                                        style={{ backgroundImage: "url('/(home-page-image)/Refferal_Affiliate_Image/pngwing.com (7).png')", }}
                                        className="item-hints cursor-pointer  z-50 bg-cover bg-center h-60 w-60 rounded-xl bottom-80">
                                        <div className="hint relative z-40 " data-position="4">
                                        </div>
                                    </div>
                                </Circle>
                            </div>

                            <div className="flex flex-col justify-center -ml-28">
                                <div className=" relative z-40">
                                    <div className="relative z-40" data-position="4">
                                        <span className=" text-white">
                                            <Circle ref={divRefs[5]} className="size-24">
                                                <div className=" w-[100px] h-[100px] border-2 border-[#2155F9] rounded-[70%_30%_30%_70%/70%_70%_30%_30%] bg-linear-to-tl from-[#0143A9] to-[#091C7F] flex items-center justify-center opacity-100">
                                                    <h3 className=' text-3xl font-extrabold text-white pl-3'>21%</h3>
                                                </div>
                                            </Circle>
                                        </span>
                                        <div className="hint-content do--split-children w-80 absolute py-9 opacity-0 z-40">
                                            <p className="text-white">Use Navbar to navigate the website quickly and easily.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center gap-3 ">
                                {refferal.map((data, index) => (
                                    <div key={index}>
                                        <div className="item-hints cursor-pointer relative ">
                                            <div className="hint relative z-10" data-position="4">
                                                <span className="hint-do text-white z-50">
                                                    <Circle ref={divRefs[index]}>
                                                        <div className=" w-full h-full   border-2 border-[#2155F9] rounded-[70%_30%_30%_70%/70%_70%_30%_30%] bg-linear-to-tl from-[#0143A9] to-[#091C7F] flex items-center justify-center opacity-100">
                                                            <h3 className=' text-2xl font-extrabold text-white pl-3'>{data.Parcentage}</h3>
                                                        </div>
                                                    </Circle>
                                                </span>
                                                <div className="hint-content do--split-children w-80 absolute py-9 opacity-0 z-40">
                                                    <p className="text-white text-sm">{data.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* AnimatedBeams */}
                        {divRefs.slice(0, 5).map((fromRef, i) => (
                            <AnimatedBeam
                                key={i}
                                containerRef={containerRef}
                                fromRef={fromRef}
                                toRef={divRefs[5]} // 21% circle
                                duration={3}
                                gradientStartColor="#FF5F1F"
                                gradientStopColor="#FFE500"
                            />
                        ))}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={divRefs[5]}
                            toRef={divRefs[6]}
                            duration={3}
                            gradientStartColor="#FF5F1F"
                            gradientStopColor="#ffffff"
                        />
                    </div>
                </div>
            </div >
        </div>
    )
}
