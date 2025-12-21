import Benefits_Overview from '@/app/(All-Components)/(Premium-Member-Components)/Benefits-Overview'
import Premium_Member_Hero from '@/app/(All-Components)/(Premium-Member-Components)/Premium-Member-Hero'
import Premium_Membership_Process from '@/app/(All-Components)/(Premium-Member-Components)/Premium-Membership-Process'
import React from 'react'

export default function Page() {
  return (
    <div>
        <Premium_Member_Hero/>
        <Benefits_Overview/>
        <Premium_Membership_Process/>
    </div>
  )
}
