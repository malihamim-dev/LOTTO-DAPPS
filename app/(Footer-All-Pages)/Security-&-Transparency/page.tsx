import Autometed_Transprancy_Card from '@/app/(Footer-All-Components)/(Security-&-Transparency-Components)/Autometed-Transprancy-Card'
import Data_and_User_Security_Card from '@/app/(Footer-All-Components)/(Security-&-Transparency-Components)/Data-and-User-Security-Card'
import Security_And_Transparency_Hero from '@/app/(Footer-All-Components)/(Security-&-Transparency-Components)/Security-&-Transparency-Hero'
import React from 'react'

export default function Page() {
  return (
    <div>
        <Security_And_Transparency_Hero/>
        <Autometed_Transprancy_Card/>
        <Data_and_User_Security_Card/>
    </div>
  )
}
