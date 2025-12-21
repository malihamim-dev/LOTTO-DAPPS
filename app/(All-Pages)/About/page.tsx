import About_Hero from '@/app/(All-Components)/(About-Components)/About-Hero'
import Last_Section from '@/app/(All-Components)/(About-Components)/Last-Section'
import Our_Story from '@/app/(All-Components)/(About-Components)/Our-Story'
import Trusted_Company from '@/app/(All-Components)/(About-Components)/Trusted-Company'
import React from 'react'

export default function Page() {
    return (
        <div>
            <About_Hero />
            <Our_Story />
            <Trusted_Company />
            <Last_Section />
        </div>
    )
}
