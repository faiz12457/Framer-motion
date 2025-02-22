import React, { useRef } from 'react'
import { motion, AnimatePresence, useInView } from "framer-motion";

function ViewBasedAnimations() {
    const ref=useRef(null);
    const isView=useInView(ref)
    
  return (
    <div className='flex items-end h-[200vh] w-full bg-gray-400'>
  <motion.div className='h-screen bg-black w-full'
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  transition={{duration:5}}
  
  >

  </motion.div>

    </div>
  )
}

export default ViewBasedAnimations