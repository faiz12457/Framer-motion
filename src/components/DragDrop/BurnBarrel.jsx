import React, { useState } from 'react'
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function BurnBarrel({setCards}) {
    const [active ,setActive]=useState(false)

    function handleDragOver(e){
        e.preventDefault();
        setActive(true)
    }

    function handleDragLeave(){
        setActive(false)
    }

    function handleDragEnd(e){
        const id=e.dataTransfer.getData("cardId")
        setCards((prev)=>{
            return prev.filter((c)=>c.id!=id);
        })
        setActive(false)
    }

  return (
    <div onDragOver={handleDragOver}  onDrop={handleDragEnd} onDragLeave={handleDragLeave} className={`w-56  rounded border text-3xl h-56 grid place-content-center shrink-0 mt-10
    ${active?" border-red-800 bg-red-800/20 text-red-500":
    "border-neutral-500 bg-neutral-500/20 text-neutral-500"
    }
    `}>
        {
            active? <FaFire className='animate-bounce' />:<FiTrash />
        }
    </div>
  )
}

export default BurnBarrel