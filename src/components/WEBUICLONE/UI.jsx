import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import CounterSec from "./CounterSec";
import OurIntershipsSec from "./OurIntershipsSec";
import InternshipJourneySec from "./InternshipJourneySec";
import BlurCircle from "./BlurCircle";
import SuccessStories from "./SuccessStories";
import AboutUs from "./AboutUs";
import WhyUSsEC from "./WhyUSsEC";

function UI() {
  return (
    <div className="relative w-full">
      {/* <BlurCircle  top={300} radius={450} position="left"  /> */}
      {/* <BlurCircle  top={300} radius={450} position="right"  /> */}
    
        <NavBar />
        <HeroSection />
        <CounterSec />
        <OurIntershipsSec />
        <InternshipJourneySec />
        <SuccessStories />
        <AboutUs />
        <WhyUSsEC />
      </div>
    
  );
}


export default UI;
