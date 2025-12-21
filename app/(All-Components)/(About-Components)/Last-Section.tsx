
import Image from 'next/image'
import React from 'react'

import image2 from '@/public/(About-Us-Image)/Last-Section-Image/techcrunch-logo-png_seeklogo-297965 1.png'
import ploygon from '@/public/(About-Us-Image)/Trusted-Company-Image/polygon-removebg-preview.png'
import { Button } from '@/components/ui/button'


export default function Last_Section() {
    return (
        <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20 '>
            {/* first section  */}
            <section>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 border border-[#ff5f1f] rounded-2xl lg:rounded-4xl p-3 md:px-5 lg:px-8 xl:px-12 py-5 md:py-8 gap-y-5 md:gap-y-0 gap-x-10 items-center justify-between'>
                    <div className=' md:col-span-1 lg:col-span-2 space-y-2.5' >
                        <h3 className=' text-white font-medium text-2xl md:text-3xl xl:text-[45px] leading-7 md:leading-9 xl:leading-[52px] '>Press & Media Resources</h3>
                        <p className=' text-[10px] md:text-xs lg:text-sm xl:text-[16px] font-medium text-white leading-4 md:leading-4 xl:leading-6 '>
                            Welcome to our media hub. Here, you'll find everything you need to learn more about [Your Company Name], including our latest announcements, significant media coverage, and strategic partnerships. We're dedicated to transparency and providing accurate information.
                        </p>
                    </div>
                    <div className=' md:col-span-1 space-y-2'>
                        <h5 className=' text-white font-medium text-[16px] lg:text-lg xl:text-[22px] '>About Universe Lotto</h5>
                        <div className=' space-y-3'>
                            <p className=' text-white font-medium text-[10px] md:text-xs lg:text-sm xl:text-[16px] leading-4 md:leading-4 xl:leading-6 '>
                                - Founded: December 2017 - Headquarters: New    York, USA
                            </p>
                            <p className=' text-white font-medium text-[10px] md:text-xs lg:text-sm xl:text-[16px] leading-4 md:leading-4 xl:leading-6 '>
                                - Mission: To secure the Web3 world through formal verification and AI.
                            </p>
                            <p className=' text-white font-medium text-[10px] md:text-xs lg:text-sm xl:text-[16px] leading-4 md:leading-4 xl:leading-6 '>
                                - Core Business: Web3 Security Auditing and Monitoring
                            </p>
                            <p className=' text-white font-medium text-[10px] md:text-xs lg:text-sm xl:text-[16px] leading-4 md:leading-4 xl:leading-6 '>
                                - Leadership: Dr. Chenfeng Hong (CEO)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* second section  */}

            <section className=' mt-14'>
                <div className=' grid  md:grid-cols-3 gap-y-5 md:gap-y-0 md:gap-x-2 lg:gap-x-5 xl:gap-x-9'>
                    <div className=' rounded-2xl lg:rounded-3xl xl:rounded-4xl p-5 xl:p-9 space-y-4 border border-[#ff5f1f]'>
                        <div>
                            <h3 className=' text-white text-lg md:text-lg xl:text-2xl font-medium'>Media Features</h3>
                        </div>
                        <div className=' grid grid-cols-2 bg-[#bdbdbd1b] backdrop-blur-lg gap-x-2.5 items-center justify-center p-2.5 lg:p-5 rounded-lg md:rounded-lg xl:rounded-2xl'>
                            <div >
                                <Image src={image2} alt='image2' className=' h-[100px] md:h-20 xl:h-[140px] w-[140px]' />
                            </div>
                            <div className=' space-y-1.5'>
                                <h4 className=' text-xs lg:text-sm xl:text-[16px] text-white font-semibold'>Tech Crunch</h4>
                                <p className=' text-white font-medium text-[8px] lg:text-[10px] xl:text-xs'>Lorem ipsum sit amet.</p>
                                <p className=' text-white font-medium text-[8px] lg:text-[10px] xl:text-xs'>1923 - 2008</p>
                                <div>
                                    <p className=' font-bold text-xs lg:text-sm xl:text-lg text-[#ff5f1f]'>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className=' grid grid-cols-2 bg-[#bdbdbd1b] backdrop-blur-lg gap-x-2.5 items-center justify-center p-2.5 lg:p-5 rounded-lg md:rounded-lg xl:rounded-2xl'>
                            <div >
                                <Image src={image2} alt='image2' className=' h-[100px] md:h-20 xl:h-[140px] w-[140px]' />
                            </div>
                            <div className=' space-y-1.5'>
                                <h4 className=' text-xs lg:text-sm xl:text-[16px] text-white font-semibold'>Tech Crunch</h4>
                                <p className=' text-white font-medium text-[8px] lg:text-[10px] xl:text-xs'>Lorem ipsum sit amet.</p>
                                <p className=' text-white font-medium text-[8px] lg:text-[10px] xl:text-xs'>1923 - 2008</p>
                                <div>
                                    <p className=' font-bold text-xs lg:text-sm xl:text-lg text-[#ff5f1f]'>Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' rounded-2xl lg:rounded-3xl xl:rounded-4xl p-5 xl:p-9 space-y-4 border border-[#ff5f1f]'>
                        <div>
                            <h3 className=' text-white text-lg md:text-lg xl:text-2xl font-medium'>Latest Press Release</h3>
                        </div>
                        <div className='space-y-3 '>
                            <div >
                                <h5 className=' text-xs lg:text-sm xl:text-[16px] font-semibold text-white'>Hurricane Melissa Makes Landfall</h5>
                            </div>
                            <div className=' flex items-center justify-between'>
                                <div className=' space-y-1.5'>
                                    <p className=' text-[8px] lg:text-sm xl:text-[16px] text-xs font-normal text-white'>texas  jekde hfbje - 2017</p>
                                    <p className='  text-[8px] lg:text-sm xl:text-[16px] font-normal text-white'>20rs 30:34</p>
                                </div>
                                <div className=' space-y-1.5'>
                                    <p className='  text-[8px] lg:text-sm xl:text-[16px] font-bold text-[#ff5f1f]'>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-3 '>
                            <div >
                                <h5 className=' text-xs lg:text-sm xl:text-[16px] font-semibold text-white'>Hurricane Melissa Makes Landfall</h5>
                            </div>
                            <div className=' flex items-center justify-between'>
                                <div className=' space-y-1.5'>
                                    <p className=' text-[8px] lg:text-sm xl:text-[16px] text-xs font-normal text-white'>texas  jekde hfbje - 2017</p>
                                    <p className='  text-[8px] lg:text-sm xl:text-[16px] font-normal text-white'>20rs 30:34</p>
                                </div>
                                <div className=' space-y-1.5'>
                                    <p className='  text-[8px] lg:text-sm xl:text-[16px] font-bold text-[#ff5f1f]'>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-3 '>
                            <div >
                                <h5 className=' text-xs lg:text-sm xl:text-[16px] font-semibold text-white'>Hurricane Melissa Makes Landfall</h5>
                            </div>
                            <div className=' flex items-center justify-between'>
                                <div className=' space-y-1.5'>
                                    <p className=' text-[8px] lg:text-sm xl:text-[16px] text-xs font-normal text-white'>texas  jekde hfbje - 2017</p>
                                    <p className='  text-[8px] lg:text-sm xl:text-[16px] font-normal text-white'>20rs 30:34</p>
                                </div>
                                <div className=' space-y-1.5'>
                                    <p className='  text-[8px] lg:text-sm xl:text-[16px] font-bold text-[#ff5f1f]'>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-3 block md:hidden lg:block'>
                            <div >
                                <h5 className=' text-xs lg:text-sm xl:text-[16px] font-semibold text-white'>Hurricane Melissa Makes Landfall</h5>
                            </div>
                            <div className=' flex items-center justify-between'>
                                <div className=' space-y-1.5'>
                                    <p className=' text-[8px] lg:text-sm xl:text-[16px] text-xs font-normal text-white'>texas  jekde hfbje - 2017</p>
                                    <p className='  text-[8px] lg:text-sm xl:text-[16px] font-normal text-white'>20rs 30:34</p>
                                </div>
                                <div className=' space-y-1.5'>
                                    <p className='  text-[8px] lg:text-sm xl:text-[16px] font-bold text-[#ff5f1f]'>Read More</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className=' rounded-2xl lg:rounded-3xl xl:rounded-4xl p-5 xl:p-9 space-y-4 border border-[#ff5f1f] lg:px-7 xl:px-12 py-3 lg:py-8 gap-x-10 items-center justify-between'>
                            <div>
                                <h3 className=' text-white text-lg xl:text-2xl font-medium'>Strategic Partnerships </h3>
                            </div>
                            <div className=' grid grid-cols-2 pt-5 md:pt-0 lg:pt-3 xl:pt-12 gap-3 xl:gap-5'>
                                <div className=' rounded-2xl lg:rounded-3xl xl:rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg p-6 '>
                                    <div>
                                        <Image src={ploygon} alt='ploygon' className=' h-16 w-16 lg:h-20 lg:w-20' />
                                    </div>
                                    <div className=' space-y-2.5'>
                                        <h4 className=' text-[16px] font-medium text-white text-center'>Polygon</h4>
                                    </div>
                                </div>
                                <div className=' rounded-2xl lg:rounded-3xl xl:rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg p-6  '>
                                    <div>
                                        <Image src={ploygon} alt='ploygon' className=' h-16 w-16 lg:h-20 lg:w-20' />
                                    </div>
                                    <div className=' space-y-2.5'>
                                        <h4 className=' text-[16px] font-medium text-white text-center'>Polygon</h4>
                                    </div>
                                </div>
                                <div className=' rounded-2xl lg:rounded-3xl xl:rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg p-6 '>
                                    <div>
                                        <Image src={ploygon} alt='ploygon' className=' h-16 w-16 lg:h-20 lg:w-20' />
                                    </div>
                                    <div className=' space-y-2.5'>
                                        <h4 className=' text-[16px] font-medium text-white text-center'>Polygon</h4>
                                    </div>
                                </div>
                                <div className=' rounded-2xl lg:rounded-3xl xl:rounded-4xl space-y-2.5 items-center justify-center bg-[#ffffff13] backdrop-blur-lg p-6  '>
                                    <div>
                                        <Image src={ploygon} alt='ploygon' className=' h-16 w-16 lg:h-20 lg:w-20' />
                                    </div>
                                    <div className=' space-y-2.5'>
                                        <h4 className=' text-[16px] font-medium text-white text-center'>Polygon</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* third section  */}

            <section className=' mt-14 '>
                <div className=' px-5 lg:px-12 py-8 gap-x-10 items-center justify-between  rounded-2xl lg:rounded-3xl xl:rounded-4xl p-5 xl:p-9 space-y-4 border border-[#ff5f1f]'>
                    <div className='space-y-2.5' >
                        <h3 className=' text-white font-medium text-lg xl:text-2xl '>Brand Assets & Guidelines</h3>
                    </div>
                    <div className=' md:flex gap-x-5 py-6 space-y-3 md:space-y-0' >
                        <div className=' flex items-center justify-center'>
                            <Button className=' bg-transparent rounded-full border border-[#FF5F1F] text-white text-xs lg:text-[16px] px-5 lg:px-10    md:py-3 font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                Official logo pack (Zip)
                            </Button>
                        </div>
                        <div className=' flex items-center justify-center'>

                            <Button className=' bg-transparent rounded-full border border-[#FF5F1F] text-white text-xs lg:text-[16px] px-5 lg:px-10    md:py-3 font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                                Brand guideline (PDF)
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h4 className=' text-white font-semibold text-[16px] pb-2'>Media Inquiries</h4>
                        <div>
                            <ul className=' space-y-1.5'>
                                <li className=' flex gap-x-1 items-center'>
                                    <span className=' text-white text-[16px] font-semibold'>Name :  </span>
                                    <span className=' text-white text-[12px] font-medium'> Jone Doe</span>
                                </li>
                                <li className=' flex gap-x-1 items-center'>
                                    <span className=' text-white text-[16px] font-semibold'>Email :  </span>
                                    <span className=' text-white text-[12px] font-medium'> JoneDoe@gmail.com</span>
                                </li>
                                <li className=' flex gap-x-1 items-center'>
                                    <span className=' text-white text-[16px] font-semibold'>Phone :  </span>
                                    <span className=' text-white text-[12px] font-medium'> +1 (555) 123-4567</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
