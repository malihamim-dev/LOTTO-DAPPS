import React from 'react'

import image1 from "@/public/Advertisement-Image/Card-Imge/tire2.png"
import image2 from "@/public/Advertisement-Image/Card-Imge/tire1.png"
import Image from 'next/image'

export default function Large_screen_Banner_Divider_image_lg_to_2xl() {
    return (
        <div className=' max-w-[1596px] mx-auto px-5 md:px-8 lg:px-28 opacity-95'>
            <div className=' grid grid-cols-2 gap-x-5 my-5'>
                <div className="bg-[#2fa1de56] h-64 rounded-xl w-full backdrop-blur-lg p-5 grid grid-cols-2">
                    <div className='flex flex-col space-y-3'>
                        <div>
                            <button className="py-0.5 px-3 rounded-sm border border-[#ff5f1f] text-black font-semibold bg-white">
                                only one stack
                            </button>

                            <h4 className="text-2xl font-semibold text-white mt-2">
                                Dany and Dany
                            </h4>

                            <p className="text-white text-[16px]">
                                spin big with hackway cash king
                            </p>
                        </div>
                        <div className="mt-auto ">
                            <button className="py-2 px-5 rounded-sm border border-[#ff5f1f] text-black font-semibold bg-white -mt-10">
                                Play Now
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image src={image1} alt='iamge1' className=' h-52' />
                    </div>
                </div>
                
               <div className="bg-[#2fa1de56] h-64 rounded-xl w-full backdrop-blur-lg p-5 grid grid-cols-2 ">
                    <div className='flex flex-col space-y-3'>
                        <div>
                            <button className="py-0.5 px-3 rounded-sm border border-[#ff5f1f] text-black font-semibold bg-white">
                                only one stack
                            </button>

                            <h4 className="text-2xl font-semibold text-white mt-2">
                                Dany and Dany
                            </h4>

                            <p className="text-white text-[16px]">
                                spin big with hackway cash king
                            </p>
                        </div>
                        <div className="mt-auto ">
                            <button className="py-2 px-5 rounded-sm border border-[#ff5f1f] text-black font-semibold bg-white -mt-10">
                                Play Now
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image src={image2} alt='iamge1' className=' h-52' />
                    </div>
                </div>
            </div>

        </div>
    )
}
