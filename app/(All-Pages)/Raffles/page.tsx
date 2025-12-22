import React from 'react'

import Choose_Your_Ticket from '@/app/(All-Components)/(Raffles-Components)/Choose-Your-Ticket'
import Getway_Information from '@/app/(All-Components)/(Raffles-Components)/Getway_Information'
import Raffles_Hero from '@/app/(All-Components)/(Raffles-Components)/Raffles-Hero'
import Ticket_Packages from '@/app/(All-Components)/(Raffles-Components)/Ticket-Packages'
import Ticket_Purches_Calculation_Card from '@/app/(All-Components)/(Raffles-Components)/Ticket-Purches-Calculation-Card'


export default function Page() {
  return (
    <div>
        <Raffles_Hero/>
        <Ticket_Packages/>
        <Choose_Your_Ticket/>
        <Ticket_Purches_Calculation_Card/>
        <Getway_Information/>
    </div>
  )
}
