import { motion,AnimatePresence } from "framer-motion";

import React, { useState } from 'react'



export function FlyoutLink({children,href,FlyoutContent=null}){
    const [open,setOpen]=useState(false);

 const showFlyout=open&&FlyoutContent
    return (
        <div 
        onMouseEnter={()=>setOpen(true)} 
        onMouseLeave={()=>{setOpen(false)}}
        
        className="h-fit relative group  cursor-pointer ">
             <motion.a 
             className="relative text-white transition-colors duration-500  hover:text-[#1FB1C3] text-[1.2rem] font-semibold">{children} </motion.a>
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


