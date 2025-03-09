import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";

function NavSlide() {
  return (
    <div className='bg-neutral-100 grid place-content-center h-screen w-full'>
        <SlideButtons />
    </div>
  )
}

export default NavSlide




function SlideButtons(){
    const [position,setPosition]=useState({
        left:0,
        width:0,
        opacity:0
    })
    return (
        <>
            <ul
          
             className= ' relative border-black flex rounded-full bg-white p-1 border-2 mx-auto w-fit'>
                <Tab setPosition={setPosition} >Home</Tab>
                <Tab setPosition={setPosition} >Pricing</Tab>
                <Tab setPosition={setPosition} >Features</Tab>
                <Tab setPosition={setPosition} >Blogs</Tab>
                <Tab setPosition={setPosition} >Docs</Tab>
                <Cursor position={position} />
            </ul>
        </>
    )
}


function Tab({children,setPosition}){
    const ref=useRef(null)
    return(
        <>
        <li ref={ref}
        onMouseEnter={()=>{
            const {width}=ref.current.getBoundingClientRect();
            setPosition({
                width,
                opacity:1,
                left:ref.current.offsetLeft
            })
        }} 
        
        
        
        
        className='px-3 py-1.5 relative z-10   text-white uppercase cursor-pointer text-xs mix-blend-difference'>{children}</li>
        </>
    )
}

function Cursor({position}){
    const {width,opacity,left}=position;
    return (
        <motion.li 
        animate={position}
        className='z-0 absolute h-7 rounded-full w-36 bg-black'  />
    )
}