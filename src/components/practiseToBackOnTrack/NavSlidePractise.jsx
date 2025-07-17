import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";

export function NavSlidePractise() {

    const [position,setPosition]=useState({
        left:0,
        width:0,
        opacity:0,
    })
  return (
    <div className='h-10  bg-white relative flex  w-fit justify-center items-center px-1 border-2 border-black rounded-full'>
       <Tabs title={'Home'} setPosition={setPosition} />
       <Tabs title={'Pricing'} setPosition={setPosition} />
       <Tabs title={'Feature'} setPosition={setPosition} />
       <Tabs title={'Blogs'} setPosition={setPosition} />
       <Tabs title={'Docs'} setPosition={setPosition} />
       <Cursor  position={position} />


    </div>
  )



}




function Tabs({title,setPosition}){
       const ref=useRef(null);

       function handlePosition(e){
        const {width}=ref.current?.getBoundingClientRect();
        setPosition({
            width,
            opacity:1,
            left:ref.current.offsetLeft
        })

       }
    return (<>
        <div ref={ref} onClick={handlePosition} className='cursor-pointer z-10 px-3 py-1.5  text-xs uppercase mix-blend-difference text-white'>
            {title}
        </div>
    </>)
}



function Cursor({position}){
    return (
        <>
       <motion.div 
       animate={position}
        className='bg-black w-36 h-7 absolute z-0 rounded-full'>

       </motion.div>
        </>
    )
}

export default NavSlidePractise