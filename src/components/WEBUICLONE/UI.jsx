import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import CounterSec from "./CounterSec";
import OurIntershipsSec from "./OurIntershipsSec";
import InternshipJourneySec from "./InternshipJourneySec";
import BlurCircle from "./BlurCircle";

function UI() {
  return (
    <div className="relative w-full">
      {/* This wrapper ensures layout is based on content */}
      {/* <BlurCircle  top={300} radius={450} position="left"  /> */}
      {/* <BlurCircle  top={300} radius={450} position="right"  /> */}
    
        <NavBar />
        <HeroSection />
        <CounterSec />
        <OurIntershipsSec />
        <InternshipJourneySec />
      </div>
    
  );
}


export default UI;
