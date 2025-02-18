import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

function Genstures() {
  return (
    <div className='grid place-content-center h-screen w-full bg-gray-400'>
   <motion.button className='w-[150px] h-[50px] bg-purple-500 text-center text-white font-bold rounded-3xl cursor-pointer'
   whileHover={{scale:1.1}}
   whileTap={{scale:0.9,rotate:'2.5deg'}}
   
   
   >Click me!</motion.button>

    </div>
  )
}

export default Genstures