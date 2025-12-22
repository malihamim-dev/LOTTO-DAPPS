import React from 'react'

import image1 from "@/public/Advertisement-Image/Card-Imge/banner-D-IFsckL.webp"
import Image from 'next/image'

export default function Large_screen_Banner_lg_to_2xl() {
    return ( 
        <div className=' max-w-[1596px] mx-auto opacity-95'>
            <div className="w-full bg-[url('https://i.ibb.co.com/QjThBQqJ/image-1.jpg')] object-cover grid grid-cols-12 items-center rounded-2xl px-7 lg:px-10 gap-x-3 lg:gap-x-5 bg-contain bg-center">
               <div className=' col-span-8 xl:col-span-7 space-y-3 py-5'>
                 <h1 className=' md:text-3xl xl:text-4xl text-white font-bold'>The internets top rated crypto casino</h1>
                <p className=' text-white text-[14px] lg:text-[16px] xl:text-[18px] font-semibold'>
                    The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.
                </p>
               </div>
               <div className=' col-span-4 xl:col-span-5 flex items-center justify-center'>
                 <Image  src={image1} alt='image1' className=' h-[150px] lg:h-[200px]  lg:w-full'  />
               </div>
            </div>
        </div>
    )
}
