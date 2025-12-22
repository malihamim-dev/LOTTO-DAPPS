'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { SplittingText } from "@/components/ui/shadcn-io/splitting-text/index";
import { TextAnimate } from "@/components/ui/text-animate"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Hero_Work() {

    const [allBannerCardData, setallBannerCardData] = React.useState<any[]>([]);

    // fetch all how it work banner hero card json data
    useEffect(() => {
        fetch('/json-Files/How_it_work_Json/how_it_work_banner.json')
            .then((res) => res.json())
            .then((data) => setallBannerCardData(data))
    }, [])


    // Aos animation initialize
    useEffect(() => {
        AOS.init(({
            duration: 1000,
            once: true
        }))
    }, [])


    return (
        <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28  max-w-[1596px] mx-auto opacity-95 pb-20'>
            <div className='pt-5 md:pt-10'>
                <div className='flex items-center justify-center pb-5 md:pb-10'>
                    <Button className=' bg-transparent rounded-full border border-[#ff5f1f] text-white text-sm md:text-[16px] lg:text-lg  py-2 px-5 md:px-7 lg:px-10'>
                        How It Work
                    </Button>
                </div>
                <div className=' space-y-3 lg:space-y-5'>
                    <h1 className=' text-xl md:text-3xl lg:text-[28px] xl:text-4xl font-semibold text-white text-center'>

                        <SplittingText
                            text="How To Work Our Site"
                            type="words"
                            inView={true}
                            motionVariants={{
                                initial: { opacity: 0, x: 100 },
                                animate: { opacity: 1, x: 0 },
                                transition: { duration: 0.5 },
                                stagger: 0.1
                            }}
                        />
                    </h1>
                    <p className='text-[8px] md:text-[16px] lg:text-xs xl:text-[16px] leading-2.5 md:leading-6 lg:leading-4 xl:leading-6 font-normal text-center w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-white'>
                        <TextAnimate animation="slideUp" by="word">
                            Blockchain ensures secure and automated lottery draws using smart contracts that execute transparently, record all actions immutably, and instantly distribute winnings. This removes human control, ensures fairness, and guarantees tamper-proof payments.
                        </TextAnimate>

                    </p>
                </div>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-3 xl:gap-x-5 gap-y-5 pt-14 px-[10%] lg:px-0'>

                {
                    allBannerCardData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-[#ff5f1f] rounded-2xl px-3 py-3 backdrop-blur-lg"
                            data-aos="fade-up"
                            data-aos-delay={index * 300}
                        >
                            <div className="flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-40 w-full rounded-2xl"
                                />
                            </div>

                            <div className="pt-3 space-y-1.5">
                                <h4 className="text-lg font-bold text-[#ff5f1f]">
                                    Step {index + 1}
                                </h4>

                                <h3 className="text-sm font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="text-[10px] text-white text-left">
                                    {item.p}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
