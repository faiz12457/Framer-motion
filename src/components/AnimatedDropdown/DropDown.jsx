import { motion,AnimatePresence } from "framer-motion";

import React, { useState } from 'react'

function DropDown() {
  return (
    <div className= " flex justify-center w-full h-screen bg-neutral-900 px-3 py-12">
        <FlyoutLink FlyoutContent={PricingContent}>Pricing</FlyoutLink>
    </div>
  )
}

export default DropDown


function FlyoutLink({children,href,FlyoutContent}){
    const [open,setOpen]=useState(false);

 const showFlyout=open&&FlyoutContent
    return (
        <div 
        onMouseEnter={()=>setOpen(true)} 
        onMouseLeave={()=>{setOpen(false)}}
        
        className="h-fit relative group  cursor-pointer ">
             <a className="relative text-white">{children}
             <span
             style={{transform:showFlyout?"scaleX(1)":"scaleX(0)"}}
              className="absolute rounded-full cursor-pointer h-1 bg-indigo-300 
             -bottom-2 -left-2 -right-2 origin-left transition-transform duration-300 ease-out
             " />
             
             </a>
             <AnimatePresence>
             {
                showFlyout&& 
          

                <motion.div
                initial={{opacity:0,y:15}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0}}
                transition={{duration:0.3,ease:'easeOut' }}
                
                style={{x:"-50%"}}
                 className="absolute top-12 left-1/2">
                <div className="absolute -top-6 left-0 right-0  h-6 "></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white -top-2 rotate-45" ></div>
                <FlyoutContent />
                </motion.div>
               
             }
             </AnimatePresence>
        </div>
       
    )
}


function PricingContent(){
    return(
        <div className=" w-64  bg-white p-6 shadow-xl">
            <div className="mb-3  space-y-3  ">
                <h3 className="font-bold ">For Individuals</h3>
                <a className="text-sm block  hover:underline">Introduction</a>
                <a className="text-sm  block hover:underline">Pay as you go</a>
            </div>
            <div className="mb-3  space-y-3  ">
                <h3 className="font-bold ">For Companies</h3>
                <a className="text-sm block  hover:underline">Startups</a>
                <a className="text-sm block  hover:underline">SMBS</a>
                <a className="text-sm block  hover:underline">Enterprise</a>
            </div>

            <button className="w-full rounded-lg cursor-pointer border-black border-2 px-4 py-2 font-semibold" >Contact Sales</button>
            

          
        </div>
    )
}