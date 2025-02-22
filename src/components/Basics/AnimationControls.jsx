import React from 'react'
import { motion, useAnimationControls} from "framer-motion";


function AnimationControls() {

    const controls=useAnimationControls();

    function handleClick(){
        controls.start('flip')

    }
  return (
    <div className='grid place-content-center h-screen w-full bg-gray-400'>
    <button className='p-3 mb-2 cursor-pointer bg-purple-600 text-white font-bold font-mono rounded-3xl' onClick={handleClick}>Flip it</button>
      <motion.div className='w-[150px] h-[150px] bg-black'
      variants={{
        initial:{
            rotate:'0deg'
        },

        flip:{
            rotate:"360deg"
        }
      }}

     initial='initial'
    //  whileHover='flip'
     animate={controls}
      
      
      >

      </motion.div>
        
    </div>
  )
}

export default AnimationControls