'use client'

import React, { useState } from 'react'
import { RainbowButton } from "@/components/ui/rainbow-button"
import { IoArrowForward } from "react-icons/io5";
import { FaEyeLowVision } from "react-icons/fa6";
import { useTheme } from "next-themes"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/stateful-button";
import { SplittingText } from "@/components/ui/shadcn-io/splitting-text/index";


export default function Ticket_Selection_Process() {

    // this state use in button theme working 
    const { theme } = useTheme()
    const [colors, setColors] = useState<Record<number, string>>({});
    const [matrixcolors, setmetrixColors] = useState<Record<number, string>>({});
    const [jackpotcolors, setjackpotColors] = useState<Record<number, string>>({});

    // common color set 

    const color = [
        "#34D399", "#FBBF24", "#1E3A8A", "#EC4899", "#8B5CF6",
        "#F87171", "#4ADE80", "#06B6D4", "#F97316", "#0EA5E9",
        "#A855F7", "#10B981", "#EAB308", "#2563EB", "#D946EF",
        "#FB7185", "#14B8A6", "#3B82F6", "#FACC15", "#7C3AED"
    ]


    const Rendomcomoncolor = () => color[Math.floor(Math.random() * color.length)]


    const handleCommonNumberSelect =
        (setColorFn: React.Dispatch<React.SetStateAction<Record<number, string>>>) =>
            (num: number) => {
                setColorFn(prev => ({
                    ...prev,
                    [num]: Rendomcomoncolor(),
                }));
            };


    const handleSimpleNumberSelect = handleCommonNumberSelect(setColors)
    const handleMatrixNumberSelect = handleCommonNumberSelect(setmetrixColors)
    const handleJackpotNumberSelect = handleCommonNumberSelect(setjackpotColors)


    // this array using number for count ticket number 
    const circles = Array.from({ length: 48 }, (_, i) => i + 1)
    console.log(circles)



    // get rendom number 


    const getRandomNumbers = (count : number, max : number) =>{
        const shuffled = [...Array(max)].map((_, i) => i + 1).sort(()=> 0.5 - Math.random())
        return shuffled.slice(0, count)
    }


    // random multiple ticket select 


    const handleRandomSelect =
    (setColorFn: React.Dispatch<React.SetStateAction<Record<number, string>>>) => () => {
        const randomNumbers = getRandomNumbers(7, 42);

        const newColors: Record<number, string> = {};
        randomNumbers.forEach(num => {
            newColors[num] = Rendomcomoncolor();
        });

        setColorFn(newColors); // 🔥 replace previous selection
    };


    const handleSimpleRandom = handleRandomSelect(setColors);
const handleMatrixRandom = handleRandomSelect(setmetrixColors);
const handleJackpotRandom = handleRandomSelect(setjackpotColors);




    return (

        <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28  max-w-[1596px] mx-auto opacity-95 pb-20'>
            {/* text section  */}
            <div className=' pb-10 border-b'>
                <h1 className='text-xl md:text-3xl lg:text-[28px] xl:text-4xl font-semibold text-white text-center'>
                    <SplittingText
                        text="Ticket Selection Process"
                        type="words"
                        inView={true}
                        motionVariants={{
                            initial: { opacity: 0, x: 100 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.5 },
                            stagger: 0.1
                        }} />
                </h1>
            </div>
            <div className=' md:flex md:justify-between items-center pt-10'>
                {/* left site  */}
                <div className=' space-y-2 md:space-y-4 lg:space-y-2.5 xl:space-x-4 '>
                    <h1 className=' text-lg md:text-xl lg:text-[22px] xl:text-3xl font-bold text-white text-center md:text-start'>Choose your tickets</h1>
                    <p className=' text-xs md:text-sm lg:text-[16px] font-normal text-[#A5A3A8] text-center md:text-start'>Choose your luckiest numbers by clicking</p>
                </div>
                {/* right site  */}
                <div className=' opacity-95 flex items-center justify-center mt-3 md:mt-0'>
                    <RainbowButton variant="outline" className=' text-[8px] md:text-sm lg:text-[16px] lg:text-xs xl:text-[16px] font-semibold h-8 md:h-10 rounded-full'> View all tickets <span className=' text-lg'><IoArrowForward /></span></RainbowButton>
                </div>
            </div>

            {/* ticket package section  */}

            <div className=' grid md:grid-cols-3 py-10 gap-x-6 md:gap-x-3 lg:gap-x-6 gap-y-5'>
                {/* card section 1 */}
                <div className=' p-5 w-full rounded-2xl lg:rounded-3xl xl:rounded-4xl bg-[#ececec0f] backdrop-blur-md '>
                    <div className=' space-y-2 pt-0 md:pt-3 md:space-y-4'>
                        <h3 className='text-lg md:text-[16px] lg:text-lg xl:text-2xl font-medium   text-white text-center leading-8 uppercase'>
                         Smart Play
                        </h3>
                        <div className=' lg:flex justify-center lg:justify-between items-center'>
                            <div>
                                <p className=' text-[12px] lg:text-[9px] xl:text-sm font-semibold text-[#BA3FEC] text-center '>
                                    Choose 7 Luckiest Number
                                </p>
                            </div>
                            <div className=' flex items-center justify-center mt-3 lg:mt-0'>
                                <RainbowButton
                                variant="outline"
                                onClick={handleSimpleRandom}
                                className='text-[8px] xl:text-[10px] font-semibold h-8 rounded-full'>
                                Random Number Select
                            </RainbowButton>

                            </div>
                        </div>
                    </div>
                    {/* lottery number section  */}
                    <div>
                        <div className=' grid grid-cols-7 md:grid-cols-8 items-center gap-x-2 gap-y-2 py-5'>
                            {
                                circles.map((num, index) => (
                                    <div key={index}
                                        onClick={() => handleSimpleNumberSelect(num)}

                                        className=' h-7 lg:h-9 xl:h-7 w-7 lg:w-9 xl:w-7 p-2  rounded-full items-center flex justify-center bg-[#1b0c413e] backdrop-blur-lg border border-[#FF5F1F]'
                                        style={{
                                            backgroundColor: colors[num] ?? "rgba(27, 12, 65, 0.24)",
                                        }}>
                                        <div className=''>
                                            <p className=' text-xs lg:text-sm xl:text-[12px] text-[#ffffff] font-bold '>
                                                {num.toString().padStart(2, "0")}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className=' flex items-center justify-between  xl:px-5'>
                        <div className=' opacity-95'>
                            <RainbowButton variant="outline" className='text-xs md:text-[8px] lg:text-[10px] xl:text-[16px] font-semibold h-8 xl:h-10 rounded-full'>Add to cart </RainbowButton>
                        </div>
                        <div className=''>
                            <RainbowButton variant="outline" className='text-xs md:text-[8px] lg:text-[10px] xl:text-[16px] font-semibold h-8 xl:h-10 rounded-full'>Buy now  </RainbowButton>
                        </div>
                    </div>
                </div>
                {/* card section 2 */}

                <div className=' p-5 w-full rounded-2xl lg:rounded-3xl xl:rounded-4xl bg-[#ececec0f] backdrop-blur-md '>
                    <div className=' space-y-2 pt-0 md:pt-3 md:space-y-4'>
                        <h3 className='text-lg md:text-[16px] lg:text-lg xl:text-2xl font-medium   text-white text-center leading-8 uppercase'>
                         Matrix Play
                        </h3>
                        <div className=' lg:flex justify-center lg:justify-between items-center'>
                            <div>
                                <p className=' text-[12px] lg:text-[9px] xl:text-sm font-semibold text-[#BA3FEC] text-center '>
                                    Choose 7 Luckiest Number
                                </p>
                            </div>
                            <div className=' flex items-center justify-center mt-3 lg:mt-0'>
                               <RainbowButton
                                variant="outline"
                                onClick={handleMatrixRandom}
                                className='text-[8px] xl:text-[10px] font-semibold h-8 rounded-full'>
                                Random Number Select
                            </RainbowButton>

                            </div>
                        </div>
                    </div>
                    {/* lottery number section  */}
                    <div>
                        <div className=' grid grid-cols-7 md:grid-cols-8 items-center gap-x-2 gap-y-2 py-5'>
                            {
                                circles.map((num, index) => (
                                    <div key={index}
                                        onClick={() => handleMatrixNumberSelect(num)}
                                        className='  h-7 lg:h-9 xl:h-7 w-7 lg:w-9 xl:w-7 p-2  rounded-full items-center flex justify-center bg-[#1b0c413e] backdrop-blur-lg border border-[#FF5F1F]'
                                        style={{
                                            backgroundColor: matrixcolors[num] || "rgba(27, 12, 65, 0.24)"
                                        }}>
                                        <div className=''>
                                            <p className=' text-xs lg:text-sm xl:text-[12px] text-[#ffffff] '>
                                                {num.toString().padStart(2, "0")}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className=' flex items-center justify-between  xl:px-5'>
                        <div className=' opacity-95'>
                            <RainbowButton variant="outline" className='text-xs md:text-[8px] lg:text-[10px] xl:text-[16px] font-semibold h-8 xl:h-10 rounded-full'>Add to cart </RainbowButton>
                        </div>
                        <div className=''>
                            <RainbowButton variant="outline" className='text-xs md:text-[8px] lg:text-[10px] xl:text-[16px] font-semibold h-8 xl:h-10 rounded-full'>Buy now  </RainbowButton>
                        </div>
                    </div>
                </div>

                {/* card section 3 */}

                <div className=' p-5 w-full rounded-2xl lg:rounded-3xl xl:rounded-4xl bg-[#ececec0f] backdrop-blur-md '>
                    <div className=' space-y-2 pt-0 md:pt-3 md:space-y-4'>
                        <h3 className='text-lg md:text-[16px] lg:text-lg xl:text-2xl font-medium   text-white text-center leading-8 uppercase'>
                             Jackpot Play
                        </h3>
                        <div className=' lg:flex justify-center lg:justify-between items-center'>
                            <div>
                                <p className=' text-[12px] lg:text-[9px] xl:text-sm font-semibold text-[#BA3FEC] text-center '>
                                    Choose 7 Luckiest Number
                                </p>
                            </div>
                            <div className=' flex items-center justify-center mt-3 lg:mt-0'>
                              <RainbowButton
                                variant="outline"
                                onClick={handleJackpotRandom}
                                className='text-[8px] xl:text-[10px] font-semibold h-8 rounded-full'>
                                Random Number Select
                            </RainbowButton>

                            </div>
                        </div>
                    </div>
                    {/* lottery number section  */}
                    <div>
                        <div className=' grid grid-cols-7 md:grid-cols-8 items-center gap-x-2 gap-y-2 py-5'>
                            {
                                circles.map((num, index) => (
                                    <div key={index}
                                        onClick={() => handleJackpotNumberSelect(num)}
                                        className='  h-7 lg:h-9 xl:h-7 w-7 lg:w-9 xl:w-7 p-2  rounded-full items-center flex justify-center bg-[#1b0c413e] backdrop-blur-lg border border-[#FF5F1F]'
                                        style={{
                                            backgroundColor: jackpotcolors[num] || "rgba(27, 12, 65, 0.24)"
                                        }}>
                                        <div className=''>
                                            <p className=' text-xs lg:text-sm xl:text-[12px] text-[#ffffff] '>
                                                {num.toString().padStart(2, "0")}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className=' flex items-center justify-between  xl:px-5'>
                        <div className=' opacity-95'>
                            <RainbowButton variant="outline" className='text-xs md:text-[8px] lg:text-[10px] xl:text-[16px] font-semibold h-8 xl:h-10 rounded-full'>Add to cart </RainbowButton>
                        </div>
                        <div className=''>
                            <RainbowButton variant="outline" className='text-xs md:text-[8px] lg:text-[10px] xl:text-[16px] font-semibold h-8 xl:h-10 rounded-full'>Buy now  </RainbowButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* total tickeet select section  */}
            <div className=' hidden md:block h-12 lg:h-14 xl:h-20 w-full bg-[#0C042C] md:px-7 xl:px-10 rounded-lg lg:rounded-xl xl:rounded-2xl relative  items-center justify-around md:grid md:grid-cols-3 '>
                <BorderBeam duration={8} size={100} />
                <div className=' text-[10px] xl:text-[16px] font-semibold text-white'>
                    <span>Ticket Price</span>
                    <span>(3 tickets X $ 4.99)</span>
                    <span>=$</span>
                    <span>14.50</span>
                </div>
                <div className=' text-[10px] xl:text-[16px] font-semibold text-white'>
                    <span>Ticket Price</span>
                    <span>(3 tickets X $ 4.99)</span>
                    <span>=$</span>
                    <span>14.50</span>
                </div>
                <div className=' flex justify-end'>

                    <Button className=' bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-flex text-[16px] font-semibold h-7 lg:h-8 xl:h-10 rounded-full bg-[#1B0C41] text-white '>
                        <div className='flex items-center gap-x-4'>
                            <span className=' text-[10px] xl:text-[16px]'>
                                Buy Tickets
                            </span>
                            <span>
                                <FaEyeLowVision className=' text-lg md:text-2xl lg:text-lg xl:text-2xl ' />
                            </span>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}
