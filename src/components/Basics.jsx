import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

function Basics() {
    const [isVisible,setIsVisible]=useState(true);
  return (
    <div className='flex flex-col h-screen items-center justify-center w-full bg-gray-500'
    >

<button onClick={()=>setIsVisible(!isVisible)} className=' cursor-pointer p-3 rounded-2xl mb-2.5 bg-blue-400 text-center'>Show/Hide</button>
<AnimatePresence>
{
  isVisible&&<motion.div className='w-32 h-32 bg-amber-300'
  layout
     initial={{rotate:'0deg', scale:0}}

     animate={{
      rotate:'180deg',
      scale:1,
      y:[0,150,-150,-150,0]

      }}
     transition={{
        duration:1,
        ease:'easeIn',
        times:[0,0.25,0.55,0.90,1]
        }}

    exit={{
          scale:0,
          rotate:'0deg'

        }}
         
     
    >

    </motion.div> 
}
</AnimatePresence>
    </div>
  )
}

export default Basics