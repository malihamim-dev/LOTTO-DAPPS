
import React from 'react'
import Large_screen_Banner_lg_to_2xl from '@/app/(All-Components)/(Advartisement-Components)/large_screen_Banner_lg_to_2xl'
import Affiliate from '@/app/(Footer-All-Components)/(Affiliate-Program-Components)/Affiliate'
import Affiliate_Hero from '@/app/(Footer-All-Components)/(Affiliate-Program-Components)/Affiliate-Hero'
import Join_our_affiliet_Program from '@/app/(Footer-All-Components)/(Affiliate-Program-Components)/Join-our-affiliet-Program'
import Refferal from '@/app/(Footer-All-Components)/(Affiliate-Program-Components)/Refferal'

export default function Page() {
    return (
        <div>
            <Affiliate_Hero />
            <Join_our_affiliet_Program />
            <Affiliate />
            <Refferal />
            <div className='px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28  max-w-[1596px] mx-auto opacity-95 pb-20'>
                <Large_screen_Banner_lg_to_2xl />
            </div>
        </div>
    )
}
