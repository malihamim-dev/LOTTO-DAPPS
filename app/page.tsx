'use client'
import { useState } from "react";
import Affiliate from "./(All-Components)/(Home-Page-Components)/Affiliate";
import Connecting_Section from "./(All-Components)/(Home-Page-Components)/Connecting-Section";
import Core_Concepts from "./(All-Components)/(Home-Page-Components)/Core-Concepts";
import Hero from "./(All-Components)/(Home-Page-Components)/Hero";
import Jackpot_Tickets_Card from "./(All-Components)/(Home-Page-Components)/Jackpot-Tickets-Card";
import Jackpots_Rounds from "./(All-Components)/(Home-Page-Components)/Jackpots-Rounds";
import Reviews from "./(All-Components)/(Home-Page-Components)/Reviews";
import Connect_Wallet from "./(All-Components)/(Shard-Component)/Connect_Wallet";

export default function Home() {


  const [showWallet, setShowWallet] = useState(false);

  return (
    <div className=" ">
      <Hero></Hero>
      <Jackpot_Tickets_Card />
      <Core_Concepts />
      <Jackpots_Rounds /> 
      <Reviews />
      <Affiliate />
      <Connecting_Section />

      {/* connect wallet show when i am click play button in navbar */}
      <button onClick={() => setShowWallet(true)}></button>
      {
        showWallet && (
          <Connect_Wallet onClose={() => setShowWallet(false)} />
        )
      }

    </div>
  );
}
