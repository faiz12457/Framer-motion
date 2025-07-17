import React, { useRef } from "react";
import Parent from "./Parent";
import InternButton from "./InternButton";
import { motion,  easeInOut } from "framer-motion";
import BlurCircle from "./BlurCircle";
import CounterSec from "./CounterSec";
const color1 = "#06D597";
const color2 = "#0B6896";
function HeroSection() {
  const ref=useRef(null)

 
  return (
     <Parent  className="pt-[160px] flex justify-between   ">
        <LeftSec />
        <RightSec />
    </Parent>
    
   
  );
}

export default HeroSection;


function RightSec(){
    return (
        <div className=" flex justify-end  ">
         <img src="./hero.png" className="w-[510px]" />
        </div>
    )
}

function LeftSec(){
    return (
         
      <div className="w-[619px] py-3 bg-[#070707] flex flex-col gap-8">
        <AnimationText />
        <Info />
        <InternButton
          title={"Start now"}
          primaryBgColor={"black"}
          primaryBorderColor="#06D597"
          primaryTextColor={'#06D597'}
          animationTextColor={'#070707'}
          animationBgColor={'#27C5D9'}
          initialWidth={130}
          animationWidth={150}
        />
      </div>
    

    )
}
 

function AnimationText() {
  return (
    <div>
      <p
      style={{
        color:color1
      }}
      
       className={`font-extrabold text-5xl leading-16 tracking-wide`}>
        Your Epic Journey into Cybersecurity is about to begin.
      </p>
    </div>
  );
}

function Info() {
  return (
    <div className="text-white space-y-3.5">
      <p className=" ">
        Step into industry-ready roles through our elite internship programs. At
        EncryptEdge Labs, you’ll master in-demand skills through guided
        learning, hands-on labs, and <br /> expert mentorship — all mapped to
        real job titles and global certifications.
      </p>
      <p>No fluff. Just experience that gets you hired.</p>
    </div>
  );
}
