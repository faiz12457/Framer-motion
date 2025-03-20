import { motion,AnimatePresence } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import React from 'react'

function TiltCard() {
  return (
    <div className="grid place-content-center h-screen w-full bg-blue-500">
        <Card />
    </div>
  )
}

export default TiltCard



function Card(){

    function handleMove(e){
        const{width,height,top,left}=e.target.getBoundingClientRect()
        const mouseX=e.clientX-left;
        const mouseY=e.clientY-top;

        console.log({'MOUSEx':mouseX,"mOUSEy":mouseY})
    }






    return (
        <div onMouseMove={handleMove} style={{transformStyle:"preserve-3d"}} 
        className="h-96 w-72 rounded-xl relative bg-gradient-to-br from-indigo-300 to-violet-300">

            <div style={{transformStyle:"preserve-3d" ,translate:"translateZ(75px)"}}
             className="absolute inset-4 grid place-content-center shadow-xl rounded-xl bg-white">
                <FiMousePointer className="text-4xl mx-auto" style={{transformStyle:"preserve-3d" ,transform:"translateZ(75px)"}} />
                <p className="text-2xl font-bold text-center"
                 style={{transformStyle:"preserve-3d" ,transform:"translateZ(50px)"}}>
                    Hover me
                 </p>
             </div>
        </div>
    )
}