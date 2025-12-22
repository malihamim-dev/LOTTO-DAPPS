'use client'
import React, { useState } from 'react'
import Reffer_And_Earn from './Reffer-And-Earn-All-Component';
import My_Earning_All_Component from './My-Earning-All-Component';

export default function Reffer_And_Earn_Swaip_Component() {

    const [switchTab, setSwitchTab] = useState('referAndearn');

    return (
        <div className='  opacity-95 pb-10 pt-10 md:pt-5'>
            <div className='  px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-5 md:pb-10'>
                <div className=' flex items-center justify-center md:items-start md:justify-start '>
                    <span
                        onClick={() => setSwitchTab('referAndearn')}
                        className=' '>
                        <h3 className={` hover:text-[#ff5f1f] text-[12px] md:text-[12px] lg:text-sm xl:text-lg font-semibold hover:scale-110 px-2 border-b-2 pb-2 cursor-pointer transition-all duration-400 ${switchTab === 'referAndearn' ? "border-[#ff5f1f] text-[#ff5f1f]" : "border-transparent text-white"}  `}>Refer & Earn</h3>
                    </span>
                    <span
                        onClick={() => setSwitchTab('myEarning')}
                        className=' '>
                        <h3 className={`text-white hover:text-[#ff5f1f] text-[12px] md:text-[12px] lg:text-sm xl:text-lg font-semibold hover:scale-110 px-2 border-b-2 pb-2 cursor-pointer transition-all duration-400  ${switchTab === 'myEarning' ? "border-[#ff5f1f] text-[#ff5f1f]" : "border-transparent text-white"}`}>My Earnings</h3>
                    </span>
                </div>
            </div>

            {/* switch tab  */}
            <div>
                {switchTab === "referAndearn" && <Reffer_And_Earn />}
                {switchTab === "myEarning" && <My_Earning_All_Component />}
            </div>
        </div>
    )
}
