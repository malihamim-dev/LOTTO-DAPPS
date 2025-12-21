import React from 'react'
import "./Progress-bar.css"

export default function Progress_Bar() {


    return (
        <div>
            <div className="skills-section m-auto font-xl  w-full space-y-5">
              <div className=' space-y-2'>
                  <h4 className="what font-bold text-[#FF5F1F] text-[10px] md:text-[16px]">Metamask Withdrow</h4>
                <div className="skill-container bg-white rounded-2xl h-9">
                    <div className="skill s1 load h-full text-lg lg:text-xl xl:text-2xl rounded-2xl flex w-[75%] bg-[#ff5f1f]"><span className=' m-auto'>75%</span></div>
                </div>
              </div>
                <div className=' space-y-2'>
                    <h4 className="what font-bold text-[#FF5F1F] text-[10px] md:text-[16px]">Binance Withdrow</h4>
                    <div className="skill-container bg-white rounded-2xl h-9">
                        <div className="skill s1 load h-full text-lg lg:text-xl xl:text-2xl rounded-2xl flex w-[65%] bg-[#ff5f1f]"><span className=' m-auto'>55%</span></div>
                    </div>
                </div>

            </div>

        </div>
    )
}
