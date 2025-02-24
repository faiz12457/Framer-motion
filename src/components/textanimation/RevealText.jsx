import React from 'react'
import { motion,  easeInOut } from "framer-motion";

function RevealText() {
  return (
    <div className='w-full min-h-screen bg-green-400 grid place-content-center text-black gap-2'>
        <FlipLink href='#'>Facebook</FlipLink>
        <FlipLink href='#'>Linkedin</FlipLink>
        <FlipLink href='#'>Instagram</FlipLink>
        <FlipLink href='#'>Twitter</FlipLink>
    </div>

  )
}

export default RevealText


function FlipLink({children,href}){
    return (
        <>
              <motion.a
             initial='initial'
             whileHover='hovered'
              href={href} 
              className='relative block overflow-hidden 
             font-black whitespace-nowrap text-4xl uppercase 
        sm:text-7xl md:text-8xl lg:text-9xl'>
            <div>
                {children.split("").map((l,i)=>{
                    return <motion.span className='inline-block'
                    transition={{
                        duration:0.25,
                        ease:easeInOut,
                        delay:0.025*i
                    }}
                    variants={{
                        initial:{y:0},
                        hovered:{y:'-100%'}
                    }}
                    
                     key={i}>{l}</motion.span>
                })}

            </div>
            <div className='absolute inset-0'>
                {children.split("").map((l,i)=>{
                    return <motion.span className='inline-block'
                     transition={{
                        duration:0.25,
                        delay:0.025*i,
                        ease:easeInOut,
                    }}
                     variants={{
                        initial:{y:'100%'},
                        hovered:{y:0}
                    }}
                     key={i}>{l}</motion.span>
                })}
            </div>
        </motion.a>
           
            
    
        </>
    )

}


// function FlipLink({children,href}){
//     return (
//         <>
//             <motion.a
//             initial='initial'
//             whileHover='hovered'
//              href={href} 
//              className='relative block overflow-hidden 
//             font-black whitespace-nowrap text-4xl uppercase 
//             sm:text-7xl md:text-8xl lg:text-9xl'>
//             <motion.div variants={{
//                 initial:{y:0},
//                 hovered:{y:'-100%'}
//             }}>
//             {children}
//             </motion.div>

//             <motion.div className='absolute inset-0' variants={{
//                 initial:{y:'100%'},
//                 hovered:{y:0}
//             }}>
//             {children}
//             </motion.div>
           
            
//             </motion.a>
//         </>
//     )

// }