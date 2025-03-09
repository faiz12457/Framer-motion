import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import { SiSpacex } from "react-icons/si";
import React, { useRef } from 'react'

function ScrollParallex() {
  return (
    <div className="bg-zinc-950 w-full">
    <ReactLenis root>
        <Nav />
        <Hero />
        <div className="h-screen " />
        </ReactLenis>
    </div>
  )
}

export default ScrollParallex



function Nav(){
    return(
        <div className="fixed left-0 right-0 top-0 z-50 flex items-center px-6 py-3 justify-between text-white">
<SiSpacex className="text-3xl" />
        </div>
    )
}


const SectionHeight=1500

function Hero(){
    return (
        <div className="relative w-full " style={{
            height:`calc(${SectionHeight}px + 100vh)`
        }}>
            <CenterImage />
            <ParallexImages />

            <div className="absolute bottom-0 left-0 right-0  h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>
    )
}

function CenterImage(){
   
    const ref=useRef(null);
    const {scrollY}=useScroll({
        target:ref
    });
     const clip1=useTransform(scrollY,[0,SectionHeight],[25,0])
     const clip2=useTransform(scrollY,[0,SectionHeight],[75,100])
    const clipPath=useMotionTemplate`polygon(${clip1}% ${clip1}%,${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}% )`
    const opacity=useTransform(scrollY,[SectionHeight,SectionHeight+500],[1,0])
    const backgroundSize=useTransform(scrollY,[0,SectionHeight+500],["170%","100%"])
    return(
     <motion.div ref={ref} className="top-0 w-full sticky h-screen z-0 " style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundImage:

        "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
     }} />
    )
 }


 function ParallexImages(){
    return (
        <div className="mx-auto  relative z-50 max-w-5xl px-4  pt-[200px] ">
            <ParallexImg
            className="w-1/3  rounded-2xl"
            alt="random"
            start={-200}
            end={200}
            src={'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww'} 
             />

              <ParallexImg
            className="w-2/3 mx-auto  rounded-2xl"
            alt="random"
            start={200}
            end={-250}
            src={'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww'}
             />
              <ParallexImg
            className="w-1/3 ml-auto  rounded-2xl"
            alt="random"
            start={-200}
            end={200}
            src={'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww'}
             />
              <ParallexImg
            className="w-5/12 ml-24  rounded-2xl"

            alt="random"
            start={0}
            end={-500}
            src={'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww'}
             />
        </div>
    )
 }


 function ParallexImg({className ,start,end,alt,src}){
    
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:[`${start}px end`,`end ${end*-1}px`]
    });

    const y=useTransform(scrollYProgress,[0,1],[start,end])
    const opacity=useTransform(scrollYProgress,[0.75,1],[1,0])
    const scale=useTransform(scrollYProgress,[0.75,1],[1,0.85])
    const transform=useMotionTemplate` translateY(${y}px) scale(${scale})`

   
    return (
        <motion.img ref={ref} src={src} alt={alt} className={className} style={{transform,opacity}} />
    )
 }








