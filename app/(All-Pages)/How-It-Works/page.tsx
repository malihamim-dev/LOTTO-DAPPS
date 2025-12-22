
import React from 'react'
import Affiliet from '@/app/(All-Components)/(How-It-Works-Components)/Affiliet'
import Automation_And_Transprency from '@/app/(All-Components)/(How-It-Works-Components)/Automation-And-Transprency'
import Hero_Work from '@/app/(All-Components)/(How-It-Works-Components)/Hero-Work'
import Ticket_Purches_Calculation_Card from '@/app/(All-Components)/(How-It-Works-Components)/Ticket-Purches-Calculation-Card'
import Ticket_Selection_Process from '@/app/(All-Components)/(How-It-Works-Components)/Ticket-Selection-Process'
import Referral from '@/app/(All-Components)/(How-It-Works-Components)/Referral'
import Work_Faq from '@/app/(All-Components)/(How-It-Works-Components)/Work-Faq'

export default function Page() {
    return (
        <div>
            <Hero_Work />
            <Automation_And_Transprency />
            <Ticket_Selection_Process />
            <Ticket_Purches_Calculation_Card />
            <Affiliet />
            <Referral />
            <Work_Faq/>
        </div>
    )
}
