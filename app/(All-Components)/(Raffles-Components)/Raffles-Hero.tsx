
'use client'
import Image from 'next/image'
import React from 'react'
import ballimage from '@/public/Reffles-images/Raffles-hero-Images/hero-balls1.png'


export default function Raffles_Hero() {
    return (
        <div className=' px-2 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20 py-5 md:py-10'>
            <div className='h-full md:h-[300px] grid md:grid-cols-3 items-center justify-between bg-[url("/Reffles-images/Raffles-hero-Images/raffles-hero-bg.jpg")] bg-cover mt-3 px-3 md:px-10 py-5 rounded-2xl shadow-md shadow-white'>
                <div className=' md:col-span-2 space-y-4'>
                    <h1 className=' text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-9 lg:leading-10 xl:leading-12 text-center md:text-start'>
                        Walcome Two The Ultimage Casino Expriance
                    </h1>
                    <h5 className='text-lg lg:text-xl xl:text-2xl text-white font-medium text-center md:text-start'>
                        Expore The Best Casino Games, Win Games And Money
                    </h5>
                </div>
                <div className=' md:col-span-1 hidden md:block'>
                    <div className='flex items-center justify-center'>
                        <Image src={ballimage} alt='ballimage' className=' h-64 w-72' />
                    </div>
                </div>
            </div>
        </div> 
    )
}
