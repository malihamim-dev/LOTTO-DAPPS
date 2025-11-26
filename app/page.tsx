import Affiliate from "./(All-Components)/(Home-Page-Components)/Affiliate";
import Connecting_Section from "./(All-Components)/(Home-Page-Components)/Connecting-Section";
import Core_Concepts from "./(All-Components)/(Home-Page-Components)/Core-Concepts";
import Hero from "./(All-Components)/(Home-Page-Components)/Hero";
import Jackpot_Tickets_Card from "./(All-Components)/(Home-Page-Components)/Jackpot-Tickets-Card";
import Jackpots_Rounds from "./(All-Components)/(Home-Page-Components)/Jackpots-Rounds";
import Reviews from "./(All-Components)/(Home-Page-Components)/Reviews";
import Background2 from "./(All-Components)/(Shard-Component)/Background2";

export default function Home() {
  return (
    <div className=" ">
      <Hero></Hero>
      <Jackpot_Tickets_Card/>
      <Core_Concepts/>     
      <Jackpots_Rounds/>
      <Reviews/>
      <Affiliate/>
      <Connecting_Section/>
    </div>
  );
}
