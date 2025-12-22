
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegArrowAltCircleDown } from 'react-icons/fa';



export default function All_Faq() {
    return (
        <div className=' rounded-3xl px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28  max-w-[1596px] mx-auto opacity-95 pb-20 pt-10' >
            <h1 className='text-xl md:text-3xl lg:text-[28px] xl:text-4xl font-semibold text-white text-center pb-10'>Frequently Asked Questions</h1>
            <div className=' space-y-3 '>
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full bg-[#0C042C] rounded-2xl md:rounded-lg lg:rounded-2xl px-5"
                        defaultValue="item-1">
                        <AccordionItem value="item-1" className="group">
                            <AccordionTrigger
                                className="flex justify-between items-center text-white text-[12px] md:text-lg lg:text-xl 2xl:text-2xl font-medium hover:border-none hover:border-b-none py-3 lg:py-7 px-2 lg:px-4 xl:px-7
                            [&>svg:not(.custom-arrow)]:hidden ">
                                Which services are applicable for referral commissions?  Which services are applicable for referral commissions?
                                <FaRegArrowAltCircleDown
                                    className=" text-[#ff5f1f] custom-arrow text-5xl md:text-4xl xl:text-5xl transition-transform duration-300 group-data-[state=open]:rotate-180 " />
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance px-5 lg:px-7 xl:px-10">
                                <p className="text-white text-[8px] md:text-xs lg:text-sm xl:text-[16px]">
                                    Irure facilisis adipiscing magnis rhoncus pellentesque cillum nibh? Soluta laudantium odio excepteur. Sagittis praesentium lectus quidem, iaculis beatae autem laoreet ligula nihil laudantium dapibus sapien! Facere, suscipit laoreet, volutpat accusantium.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full bg-[#0C042C] rounded-2xl md:rounded-lg lg:rounded-2xl px-5"
                        defaultValue="item-1">
                        <AccordionItem value="item-1" className="group">
                            <AccordionTrigger
                                className="flex justify-between items-center text-white text-[12px] md:text-lg lg:text-xl 2xl:text-2xl font-medium hover:border-none hover:border-b-none py-3 lg:py-7 px-2 lg:px-4 xl:px-7
                            [&>svg:not(.custom-arrow)]:hidden">
                                Which services are applicable for referral commissions?
                                <FaRegArrowAltCircleDown
                                    className=" text-[#ff5f1f] custom-arrow text-5xl md:text-4xl xl:text-5xl transition-transform duration-300 group-data-[state=open]:rotate-180" />
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance px-5 lg:px-7 xl:px-10">
                                <p className="text-white text-[8px] md:text-xs lg:text-sm xl:text-[16px]">
                                    Irure facilisis adipiscing magnis rhoncus pellentesque cillum nibh? Soluta laudantium odio excepteur. Sagittis praesentium lectus quidem, iaculis beatae autem laoreet ligula nihil laudantium dapibus sapien! Facere, suscipit laoreet, volutpat accusantium.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full bg-[#0C042C] rounded-2xl md:rounded-lg lg:rounded-2xl px-5"
                        defaultValue="item-1">
                        <AccordionItem value="item-1" className="group">
                            <AccordionTrigger
                                className="flex justify-between items-center text-white text-[12px] md:text-lg lg:text-xl 2xl:text-2xl font-medium hover:border-none hover:border-b-none py-3 lg:py-7 px-2 lg:px-4 xl:px-7
                            [&>svg:not(.custom-arrow)]:hidden">
                                Which services are applicable for referral commissions?
                                <FaRegArrowAltCircleDown
                                    className=" text-[#ff5f1f] custom-arrow text-5xl md:text-4xl xl:text-5xl transition-transform duration-300 group-data-[state=open]:rotate-180" />
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance px-5 lg:px-7 xl:px-10">
                                <p className="text-white text-[8px] md:text-xs lg:text-sm xl:text-[16px]">
                                    Irure facilisis adipiscing magnis rhoncus pellentesque cillum nibh? Soluta laudantium odio excepteur. Sagittis praesentium lectus quidem, iaculis beatae autem laoreet ligula nihil laudantium dapibus sapien! Facere, suscipit laoreet, volutpat accusantium.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full bg-[#0C042C] rounded-2xl md:rounded-lg lg:rounded-2xl px-5"
                        defaultValue="item-1">
                        <AccordionItem value="item-1" className="group">
                            <AccordionTrigger
                                className="flex justify-between items-center text-white text-[12px] md:text-lg lg:text-xl 2xl:text-2xl font-medium hover:border-none hover:border-b-none py-3 lg:py-7 px-2 lg:px-4 xl:px-7
                            [&>svg:not(.custom-arrow)]:hidden">
                                Which services are applicable for referral commissions?
                                <FaRegArrowAltCircleDown
                                    className=" text-[#ff5f1f] custom-arrow text-5xl md:text-4xl xl:text-5xl transition-transform duration-300 group-data-[state=open]:rotate-180" />
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance px-5 lg:px-7 xl:px-10">
                                <p className="text-white text-[8px] md:text-xs lg:text-sm xl:text-[16px]">
                                    Irure facilisis adipiscing magnis rhoncus pellentesque cillum nibh? Soluta laudantium odio excepteur. Sagittis praesentium lectus quidem, iaculis beatae autem laoreet ligula nihil laudantium dapibus sapien! Facere, suscipit laoreet, volutpat accusantium.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
