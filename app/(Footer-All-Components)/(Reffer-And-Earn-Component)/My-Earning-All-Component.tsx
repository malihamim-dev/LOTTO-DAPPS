import React from 'react'
import Refer_Code_card from './Refer-Code-card'
import My_Earning_FAQ from './My-Earning-FAQ'
import My_Earning_Comition_Payout_History from './My-Earning-Commition-Payout-History'

export default function My_Earning_All_Component() {
  return (
    <div>
        <My_Earning_Comition_Payout_History/>
        <Refer_Code_card/>
        <My_Earning_FAQ/>
    </div>
  )
}
