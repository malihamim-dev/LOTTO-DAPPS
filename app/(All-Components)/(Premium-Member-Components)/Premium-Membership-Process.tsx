"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaChessQueen } from "react-icons/fa";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig



// earn and trands chart data 

export const description = "A stacked bar chart with a legend"
const chartDatas = [
    { date: "2024-07-15", running: 450, swimming: 300 },
    { date: "2024-07-16", running: 380, swimming: 420 },
    { date: "2024-07-17", running: 520, swimming: 120 },
    { date: "2024-07-18", running: 140, swimming: 550 },
    { date: "2024-07-19", running: 600, swimming: 350 },
    { date: "2024-07-20", running: 480, swimming: 400 },
]
const chartConfigs = {
    running: {
        label: "Running",
        color: "var(--chart-1)",
    },
    swimming: {
        label: "Swimming",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig


export default function Premium_Membership_Process() {
    return (
        <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28 max-w-[1596px] mx-auto opacity-95 pb-20 space-y-11'>
            <div className=' grid grid-cols-2 items-center justify-between'>
                <div className=' space-y-4'>
                    <h1 className=' text-xl md:text-3xl lg:text-[28px] xl:text-4xl text-white font-bold '>How to become a premium member</h1>
                    <p className=' text-white text-[8px] md:text-[16px] lg:text-xs xl:text-[16px] leading-2.5 md:leading-6 lg:leading-4 xl:leading-6 hidden md:block'>You can become a premium menber by receiving an invitation from an admin or by qualifying through our criteria.</p>
                </div>
                <div className=' flex items-center justify-end '>
                    <Button className=' text-xs md:text-[16px] '>
                        Upgrade Now →
                    </Button>
                </div>
            </div>
            <div className=' pt-3 lg:pt-10 grid md:grid-cols-3 gap-x-6 space-y-10'>
                <div className=' space-y-5 lg:space-y-12'>
                    <h3 className=' text-[22px] md:text-lg lg:text-2xl xl:text-3xl text-white font-medium'>Exclusive Dashboard for Premium Users</h3>
                    <div className=' grid grid-cols-2 gap-x-6 border border-[#ff5f1f] rounded-[12px] md:rounded-2xl py-2 px-3 items-center justify-center mt-5 lg:mt-12 xl:mt-20'>
                        <div className=' py-2'>
                            <div className=' flex items-center justify-center'>
                                <FaChessQueen className=' text-4xl xl:text-5xl text-yellow-500' />
                            </div>
                            <div className='space-y-2 pt-3'>
                                <h5 className=' text-white text-[16px] xl:text-lg font-medium text-center'>PREMIUM USER</h5>
                                <p className='text-[10px] lg:text-xs xl:text-sm font-semibold text-white text-center'>Share of premium pool</p>
                            </div>
                        </div>
                        <div className='space-y-2.5 pt-8'>
                            <h3 className=' text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-white text-center'>$2,450</h3>
                            <p className=' text-white text-[10px] lg:text-xs xl:text-sm font-semibold text-center'>Share of premium pool</p>
                        </div>
                    </div>
                </div>
                <div className=' space-y-5 md:space-y-16 lg:spcae-y-24 xl:space-y-16 2xl:space-y-5'>
                    <h3 className='text-[22px] md:text-lg lg:text-2xl xl:text-3xl text-white font-medium'>Exclusive Chart for Premium Eraning</h3>
                    <div>
                        <ChartContainer config={chartConfig} className=" w-full">
                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </div>
                </div>
                <div className=' space-y-5 md:space-y-16 xl:space-y-16 2xl:space-y-5'>
                    <h3 className=' text-[22px] md:text-lg lg:text-2xl xl:text-3xl text-white font-medium'>Exclusive Chart for Premium Joining</h3>
                    <div className='mt-14'>
                        <ChartContainer config={chartConfigs}>
                            <BarChart accessibilityLayer data={chartDatas}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent hideIndicator />}
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
