import React, { useState } from 'react'
import Card, { DragIndicator } from './Card';
import AddCards from './AddCards';
import { motion, AnimatePresence } from "framer-motion";

function Column({title,headingColor,column,cards,setCards}) {
    const [active,setActive]=useState(false);
    const filterCards=cards.filter((c)=> c.column===column)
    

    function handleDragStart(e,card){
        e.dataTransfer.setData("cardId",card.id);
        

    }

    function handleDragEnd(e){
        setActive(false)
        const id=e.dataTransfer.getData("cardId");
        
    
        let copy=[...cards];
    
        let cardToTransfer=copy.find((c)=>{
        return c.id===Number(id);
        })
        
           let c={...cardToTransfer,column};
 

     
     setCards((prev)=>{
        let copy=prev.filter((c)=>{
            return c.id!==Number(id);
 })
        copy.push(c);
        return copy;
     })
        
    }

    function handleDragOver(e){
        e.preventDefault()
        setActive(true)
    }
  return (
    <div className='w-56 '>
        <div className='mb-3 justify-between items-center'>
            <h3 className={`font-medium ${headingColor} `}>
                  {title}
            </h3>
            <span  className='rounded-2xl text-sm text-neutral-400'>{filterCards.length}</span>
        </div>

        <div onDragOver={handleDragOver} onDrop={handleDragEnd} onDragLeave={()=>setActive(false)} className={`w-full h-full transition-colors ${active?"bg-neutral-800/50":"bg-neutral-800/0"} `}>
               {
                filterCards.map((c)=> <Card key={c.id} {...c} handleDragStart={handleDragStart} />)
               }
               <DragIndicator beforeId='-1' column={column} />

               <AddCards setCards={setCards} column={column} />
        </div>
    </div>
  ) 
}

export default Column