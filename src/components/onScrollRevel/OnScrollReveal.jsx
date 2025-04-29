import React, { useEffect, useRef } from 'react'
import {motion,useAnimationControls,useMotionTemplate,useMotionValue,animate, useInView, useAnimation,} from "framer-motion";
function OnScrollReveal() {
  return (
    <div className='w-full p-20 flex flex-col gap-10 min-h-screen h-fit bg-zinc-900'>
 
{
   Array.from({length:10}).map((_,idx)=>{
    return (
        <Reveal key={idx}>
            <Card />
        </Reveal>
    )
   })
}


    </div>
  )
}

export default OnScrollReveal


function Reveal({children}){
      const ref=useRef(null)
      const inView=useInView(ref,{once:true,})
      const  controls=useAnimation();
      const  slideControls=useAnimation();

      useEffect(()=>{
        if(inView){
            controls.start("visible")
            slideControls.start("visible")
        }
      },[inView])

    return (
        <div ref={ref} className='w-fit relative overflow-hidden'>
        <motion.div 
         variants={{
            hidden:{
                opacity:0,
                y:75
            },

            visible:{
                opacity:1,
                y:0
            }
         }}
         
         transition={{
            duration:0.5,
            delay:0.25,
         }}

         initial="hidden"
         animate={controls}

         className=''>
        
        {children}
        
        </motion.div>

        <motion.div
        variants={{
            hidden:{ left:0 },
            visible:{left:"100%"}
        
        }}

        initial="hidden"
       animate={slideControls}
    transition={{duration:0.5,ease:'easeInOut'}}
        
         className='bg-green-500 absolute z-50 left-0 right-0 top-1 bottom-1'>

</motion.div>
       
    </div>

    )
    

}



function Card(){
    return (
        <div className='text-xl size-96  font-semibold text-white'>
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
 </div>
    )
}