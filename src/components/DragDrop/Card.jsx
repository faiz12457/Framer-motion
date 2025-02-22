import React from 'react'
import { motion} from "framer-motion";

function Card({title,id,column,handleDragStart}) {
  return (
    <>
    <DragIndicator beforeId={id} column={column} />
    <motion.div layout layoutId={id} draggable='true' onDragStart={(e)=>handleDragStart(e,{title,id,column})} className='rounded border-neutral-700 border bg-neutral-800 p-3 cursor-grab active:cursor-grabbing'>

           <p className='text-sm text-neutral-100 '>{title}</p> 

    </motion.div>
    </>
  )
}


export function DragIndicator({beforeId,column}){
    return <>
        <div data-before={beforeId||'-1'} data-column={column} className='my-0.5 h-0.5 bg-violet-700 w-full opacity-0'></div>
    </>
}

export default Card