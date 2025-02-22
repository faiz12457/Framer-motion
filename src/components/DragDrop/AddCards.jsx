import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
function AddCards({setCards,column}) {
    const [active,setActive]=useState(false)
    const [text,setText]=useState('')

    const data={
        column,
        title:text,
        id:Math.random().toString()
        
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!text){
            return;
        }
        setCards((prev)=> [...prev,data])
        setText('')
        setActive(false)
    }
  return (
    <div>{

        active? (<>
            <motion.form layout onSubmit={handleSubmit}>
                <textarea
                placeholder='Add new text'
                autoFocus
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className='w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300
                focus:outline-0
                '
                >
                    
                </textarea>
                <div className='mt-1.5  flex items-center justify-end gap-1.5 '>
                <button onClick={()=>setActive(false)} className='
         px-3 py-1.5 text-xs text-neutral-400 transition-colors cursor-pointer hover:text-neutral-50 '>
            <span>Close</span>
            
        </button>

        <button  type='submit' className=' flex items-center gap-1.5 rounded bg-neutral-50
         px-3 py-1.5 text-xs text-neutral-950 transition-colors cursor-pointer hover:text-neutral-300 '>
            <span>Add</span>
            
        </button>
                </div>
            </motion.form>
        </>):(
            <motion.button layout onClick={()=>setActive(true)} className='w-full flex items-center gap-1.5
         px-3 py-1.5 text-xs text-neutral-400 transition-colors cursor-pointer hover:text-neutral-50 '>
            <span>Add card +</span>
        </motion.button>
        )
    }</div>
  )
}

export default AddCards