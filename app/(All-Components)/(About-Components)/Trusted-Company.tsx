import React from 'react'

import binance from '@/public/(About-Us-Image)/Trusted-Company-Image/binance.png'
import chainlink from '@/public/(About-Us-Image)/Trusted-Company-Image/chainlink.png'
import certik from '@/public/(About-Us-Image)/Trusted-Company-Image/certik.png'
import metamask from '@/public/(About-Us-Image)/Trusted-Company-Image/Metamask2.png'
import ploygon from '@/public/(About-Us-Image)/Trusted-Company-Image/polygon-removebg-preview.png'
import Image from 'next/image'

export default function Trusted_Company() {
    return (
        <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20 '>
            <h1 className='text-xl md:text-[26px] lg:text-3xl xl:text-[40px] font-bold text-white text-center'>Trusted by Industry Leaders</h1>
            <div>
                <div className=' space-y-4 pt-3 md:pt-9'>
                    <h3 className=' text-lg lg:text-2xl xl:text-3xl text-white font-bold hidden md:block'>Trusted by Industry Leaders</h3>
                    <p className=' text-center md:text-start text-[16px] text-white'>Collaborating with pioneers shaping the blockchain future.</p>
                </div>
                <div className=' grid md:grid-cols-3 lg:grid-cols-3 pt-8 gap-3 lg:gap-6'>
                    <div className=' h-72 md:h-64 lg:h-72 flex flex-col border border-[#FF5F1F] rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg'>
                        <div>
                            <Image src={binance} alt='binance' className=' h-20 w-20' />
                        </div>
                        <div className=' space-y-2.5'>
                            <h4 className=' text-[16px] lg:text-[22px] font-medium text-white text-center'>Binance Smart Chain</h4>
                            <h4 className=' text-xs md:text-sm lg:text-[16px] font-medium text-white text-center'>Blockchain Network</h4>
                        </div>
                    </div>
                    <div className='h-72 md:h-64 lg:h-72 flex flex-col border border-[#FF5F1F] rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg'>
                        <div>
                            <Image src={metamask} alt='metamask' className=' h-20 w-20' />
                        </div>
                        <div className=' space-y-2.5'>
                            <h4 className=' text-[16px] lg:text-[22px] font-medium text-white text-center'>Metamask Smart Chain</h4>
                            <h4 className=' text-xs md:text-sm lg:text-[16px] font-medium text-white text-center'>Wallet Provider</h4>
                        </div>
                    </div>
                    <div className='h-72 md:h-64 lg:h-72 flex flex-col border border-[#FF5F1F] rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg'>
                        <div>
                            <Image src={certik} alt='certik' className=' h-20 w-20 rounded-lg' />
                        </div>
                        <div className=' space-y-2.5'>
                            <h4 className=' text-[16px] lg:text-[22px] font-medium text-white text-center'>Certik</h4>
                            <h4 className=' text-xs md:text-sm lg:text-[16px] font-medium text-white text-center'>Smart Contract Audit</h4>
                        </div>
                    </div>
                    <div className='h-72 md:h-64 lg:h-72 flex flex-col border border-[#FF5F1F] rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg'>
                        <div>
                            <Image src={chainlink} alt='chainlink' className=' h-20 w-20' />
                        </div>
                        <div className=' space-y-2.5'>
                            <h4 className=' text-[16px] lg:text-[22px] font-medium text-white text-center'>Chainlink</h4>
                            <h4 className=' text-xs md:text-sm lg:text-[16px] font-medium text-white text-center'>Oracle Intogration</h4>
                        </div>
                    </div>
                    <div className='h-72 md:h-64 lg:h-72 flex flex-col border border-[#FF5F1F] rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg'>
                        <div>
                            <Image src={ploygon} alt='ploygon' className=' h-20 w-20' />
                        </div>
                        <div className=' space-y-2.5'>
                            <h4 className=' text-[16px] lg:text-[22px] font-medium text-white text-center'>Polygon</h4>
                            <h4 className=' text-xs md:text-sm lg:text-[16px] font-medium text-white text-center'>Layer-2 Partner</h4>
                        </div>
                    </div>
                    <div className='h-72 md:h-64 lg:h-72 flex flex-col border border-[#FF5F1F] rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg'>
                        <div>
                            <Image src={ploygon} alt='ploygon' className=' h-20 w-20' />
                        </div>
                        <div className=' space-y-2.5'>
                            <h4 className=' text-[16px] lg:text-[22px] font-medium text-white text-center'>CoinMarketCap</h4>
                            <h4 className=' text-xs md:text-sm lg:text-[16px] font-medium text-white text-center'>Ecosystem Collaboration</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
