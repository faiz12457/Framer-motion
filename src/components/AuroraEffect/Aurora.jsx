import React, { useEffect } from 'react'
import { motion, useAnimationControls, useMotionTemplate, useMotionValue,animate} from "framer-motion";

function Aurora() {
    const Colors=['#13FFA','#1E67C6','#CE84CF','#DD335C']
    const color=useMotionValue(Colors[0]) 
    const backgroundImage=useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%, ${color})`
    const border=useMotionTemplate`1px solid ${color}`
    const boxShadow=useMotionTemplate`0px 4px 24px ${color}`

    useEffect(()=>{

        animate(color,Colors,{
            ease:'easeInOut',
            repeat:Infinity,
            duration:10,
            repeatType:'mirror'
        })

        
    },[])
  return (
    <>
        <motion.section className='h-screen w-full text-gray-200 grid place-content-center' style={{backgroundImage}}>
       <div className='flex flex-col items-center '>
        <span className='text-sm py-1.5 mb-1.5 rounded-full px-3 inline-block bg-gray-600/50'>Beat now live</span>
        <p className='text-center text-5xl font-medium max-w-3xl leading-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text '>Decrease Your Sass churn by over 90%</p>
     <motion.button 
      className='flex gap-1.5 transition-colors group mt-2.5 rounded-full px-4 py-2 
      items-center text-gray-50 bg-gray-950/10 ' style={{border,boxShadow}}>
            Start free trail
        </motion.button>
       </div>
        </motion.section>
    </>
  )
}

export default Aurora