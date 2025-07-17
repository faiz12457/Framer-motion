import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
const Grid = () => {
  return (
    <div className='min-h-screen bg-black px-4 py-12 text-zinc-50'>

   
    <div className='grid gap-4 grid-cols-12 mx-auto max-w-xl border '>
     <HeaderBlock/>
     <Block className={'col-span-6 '} />
     <Block  className={'col-span-6'}/>
     <Block className={'col-span-4'} />
     
 </div>
  </div>
  )
}


function Block({children,className}){
    return (
        <motion.div className={`border border-zinc-700 bg-zinc-800 p-6 rounded-lg ${className} `}>
     {children}
        </motion.div>
    )
}


function HeaderBlock(){
  return (
    <Block className={'col-span-12 row-span-2 md:col-span-6'}>
       <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
     <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Tom.{" "}
      <span className="text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
      <a href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
      
    </Block>
  )
}

export default Grid