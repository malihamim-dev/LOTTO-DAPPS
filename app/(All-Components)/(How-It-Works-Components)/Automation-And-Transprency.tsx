


'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { SplittingText } from "@/components/ui/shadcn-io/splitting-text/index";


export default function Automation_And_Transprency() {

  const [AutomationData, setallAutomationData] = React.useState<any[]>([]);

  // fetch all how it work banner hero card json data
  useEffect(() => {
    fetch('/json-Files/How_it_work_Json/Automations_and_Transparancy.json')
      .then((res) => res.json())
      .then((data) => setallAutomationData(data))
  }, [])



  console.log("AutomationData:", AutomationData);

  return (
    <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28  max-w-[1596px] mx-auto opacity-95 pb-20'>

      <div className=' pb-10 border-b'>
        <h1 className='text-xl md:text-3xl lg:text-[28px] xl:text-4xl font-semibold text-white text-center'>
          <SplittingText
            text=" Automation & Transparency"
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
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper">
          {
            AutomationData.map((item, index) => (
              <SwiperSlide key={index} className=' px-5 md:px-10 lg:px-20 py-16'>
                <div className=' grid grid-cols-2 items-center justify-center gap-x-2 md:gap-x-10'>
                  <div>
                    <img src={item.image} alt='automation' className=' h-[200px] lg:h-[230px] xl:h-[300px] w-full rounded-lg md:rounded-2xl' />
                  </div>
                  <div className=' space-y-1.5'>
                    <p className=' text-[8px] md:text-xs lg:text-[16px] xl:text-lg text-white'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}
