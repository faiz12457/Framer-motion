import React, { useRef } from 'react'
import { motion, useAnimationControls, useScroll, useTransform} from "framer-motion";


const IMGPadding=12;
function TextParallex() {
  return (
    <div className='bg-white'>
    
    <TextContent imgUrl='https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww'
     heading='Collaborate'
     subHeading='Bulit for all of us'
      ></TextContent>

    <TextContent imgUrl='https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D'
     heading='Quality'
     subHeading='Never Compromise' 
    ></TextContent>
    <TextContent imgUrl='https://plus.unsplash.com/premium_photo-1681487675360-e4125238d519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJufGVufDB8fDB8fHww'
     heading='Modern'
     subHeading='Dress for the best'
     ></TextContent>

   
    
     </div>
  )
}

export default TextParallex



function TextContent({imgUrl ,heading,subHeading,children}){
    return(
        <>
        <div className='px-3'>
        <div className='h-[150vh] relative'>            
            <StickyImg imgUrl={imgUrl}  />
            <Overlay heading={heading} subHeading={subHeading} />
             </div>
            {children}
        </div>
        </>
    )
}



function StickyImg({imgUrl}){
    const targetRef=useRef(null)
    const {scrollYProgress}=useScroll({
        target:targetRef,
        offset:["end end","end start"]
    });

    const scale=useTransform(scrollYProgress,[0,1],[1,0.85]);
    
    const opacity=useTransform(scrollYProgress,[0,1],[1,0])
    return (
        <motion.div ref={targetRef} style={{
            background:`url(${imgUrl})` ,
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:`calc(100vh - ${IMGPadding*2}px)`,
            top:IMGPadding,
            scale,
           
        }} className=' sticky z-0 rounded-3xl overflow-hidden'>
        
            <motion.div className='absolute inset-0 bg-neutral-950/70' style={{opacity}} />
        </motion.div>
    )
}




const Overlay=({heading,subHeading})=>{
    return (
        <>
<motion.div className='absolute top-0 left-0 flex h-screen items-center justify-center flex-col text-white w-full'>
<p className='  text-xl  '>{subHeading}</p>
<p className='font-bold text-7xl'>{heading}</p>
</motion.div>

        </>
    )
}