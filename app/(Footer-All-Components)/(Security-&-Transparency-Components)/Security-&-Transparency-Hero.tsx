

import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"



const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
]
const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-[200px] lg:h-[220px] xl:h-[270px] w-fit cursor-pointer overflow-hidden rounded-xl p-4 border border-[#ff5f1f] bg-[#ffffff15] backdrop-blur-lg",

      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export default function Security_And_Transparency_Hero() {
  return (
    <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-10 md:pb-20 '>

      <div className=' grid md:grid-cols-6 lg:grid-cols-7 h-full lg:h-[85vh] xl:h-[70vh] items-center gap-x-5'>
        <div className=' col-span-3 lg:col-span-4'>
          <div className='space-y-2 pt-5 md:pt-10'>
            <h1 className='text-white font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center md:text-start '>Security & Transparency
            </h1>
            <h2 className='text-white font-semibold text-[16px] md:text-lg lg:text-xl xltext-[24px] text-center md:text-start'>passage its ten led hearted removal cordial</h2>
            <p className='text-white font-medium text-xs lg:text-sm xl:text-[16px] leading-4 xl:leading-7 text-center md:text-start'>Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. Warrant private blushes removed an in equally totally if. </p>
          </div>
          <div className='  md:flex gap-x-5 md:gap-x-2 lg:gap-x-5 py-10 space-y-3 md:space-y-0 '>
            <div className=' flex items-center justify-center'>
              <Button className=' bg-transparent rounded-full border border-[#FF5F1F] text-white text-xs lg:text-[16px] px-5 lg:px-10    md:py-3 font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                Official logo pack (Zip)
              </Button>
            </div>
            <div className=' flex items-center justify-center'>
              <Button className=' bg-transparent rounded-full border border-[#FF5F1F] text-white text-xs lg:text-[16px] px-5 lg:px-10 py-3 font-semibold hover:scale-110 hover:border-none hover:bg-[#ff5f1f]'>
                Brand guideline (PDF)
              </Button>
            </div>
          </div>
        </div>
        <div className=' col-span-3 lg:col-span-3 hidden md:block'>
          <div className="relative flex h-[70vh] w-full flex-row items-center justify-center overflow-hidden gap-x-2 ">
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className=" pointer-events-none absolute inset-x-0 top-0 h-1/10 shadow-2xl  -mt-16 shadow-background "></div>
            <div className="absolute inset-x-0 bottom-0 shadow-[0_-30px_40px_20px_rgba(0,0,0,0.7)] pointer-events-none mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

