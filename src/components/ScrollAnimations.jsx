import React from 'react'
import { motion, AnimatePresence, useInView, useScroll, useSpring, useTransform } from "framer-motion";
function ScrollAnimations() {
   const {scrollYProgress}= useScroll();
   const scrollX=useSpring(scrollYProgress);
   const background=useTransform(scrollYProgress,[0,0.5,1],['#81d180','#57acce','#6b53c3'])
   
  return (
    <div className=' w-full  '>
    <motion.div className='w-full bg-blue-500 sticky top-0 h-2 origin-left' style={
        {/*scaleX:scrollX,*/background, scaleX:scrollYProgress}}></motion.div>
    <div className='w-[700px] mx-auto p-3 flex flex-col gap-5'>
        <p>the trees, carrying the faint scent of blooming flowers. Emily walked along the narrow path, her footsteps muffled by the soft earth beneath her. She had always loved this time of day—the quiet moments when the world seemed to pause, just before night fully settled in.

As she reached the old wooden bridge, she stopped and leaned against the railing, gazing at the calm river below. The water reflected the colors of the sky, rippling gently as a pair of ducks glided across. It was peaceful here, far removed from the noise of the city she had left behind.

Her mind wandered to the letter she had received that morning. A simple envelope with no return address, yet the handwriting was unmistakable. It had been years since she had seen it, but she knew. Heart pounding, she had unfolded the paper, scanning the words over and over again. "I need to see you," it read. No explanation, no signature—just those five words.</p>


<p>the trees, carrying the faint scent of blooming flowers. Emily walked along the narrow path, her footsteps muffled by the soft earth beneath her. She had always loved this time of day—the quiet moments when the world seemed to pause, just before night fully settled in.

As she reached the old wooden bridge, she stopped and leaned against the railing, gazing at the calm river below. The water reflected the colors of the sky, rippling gently as a pair of ducks glided across. It was peaceful here, far removed from the noise of the city she had left behind.

Her mind wandered to the letter she had received that morning. A simple envelope with no return address, yet the handwriting was unmistakable. It had been years since she had seen it, but she knew. Heart pounding, she had unfolded the paper, scanning the words over and over again. "I need to see you," it read. No explanation, no signature—just those five words.</p>

<p>the trees, carrying the faint scent of blooming flowers. Emily walked along the narrow path, her footsteps muffled by the soft earth beneath her. She had always loved this time of day—the quiet moments when the world seemed to pause, just before night fully settled in.

As she reached the old wooden bridge, she stopped and leaned against the railing, gazing at the calm river below. The water reflected the colors of the sky, rippling gently as a pair of ducks glided across. It was peaceful here, far removed from the noise of the city she had left behind.

Her mind wandered to the letter she had received that morning. A simple envelope with no return address, yet the handwriting was unmistakable. It had been years since she had seen it, but she knew. Heart pounding, she had unfolded the paper, scanning the words over and over again. "I need to see you," it read. No explanation, no signature—just those five words.</p>

<p>the trees, carrying the faint scent of blooming flowers. Emily walked along the narrow path, her footsteps muffled by the soft earth beneath her. She had always loved this time of day—the quiet moments when the world seemed to pause, just before night fully settled in.

As she reached the old wooden bridge, she stopped and leaned against the railing, gazing at the calm river below. The water reflected the colors of the sky, rippling gently as a pair of ducks glided across. It was peaceful here, far removed from the noise of the city she had left behind.

Her mind wandered to the letter she had received that morning. A simple envelope with no return address, yet the handwriting was unmistakable. It had been years since she had seen it, but she knew. Heart pounding, she had unfolded the paper, scanning the words over and over again. "I need to see you," it read. No explanation, no signature—just those five words.</p>

<p>the trees, carrying the faint scent of blooming flowers. Emily walked along the narrow path, her footsteps muffled by the soft earth beneath her. She had always loved this time of day—the quiet moments when the world seemed to pause, just before night fully settled in.

As she reached the old wooden bridge, she stopped and leaned against the railing, gazing at the calm river below. The water reflected the colors of the sky, rippling gently as a pair of ducks glided across. It was peaceful here, far removed from the noise of the city she had left behind.

Her mind wandered to the letter she had received that morning. A simple envelope with no return address, yet the handwriting was unmistakable. It had been years since she had seen it, but she knew. Heart pounding, she had unfolded the paper, scanning the words over and over again. "I need to see you," it read. No explanation, no signature—just those five words.</p>

<p>the trees, carrying the faint scent of blooming flowers. Emily walked along the narrow path, her footsteps muffled by the soft earth beneath her. She had always loved this time of day—the quiet moments when the world seemed to pause, just before night fully settled in.

As she reached the old wooden bridge, she stopped and leaned against the railing, gazing at the calm river below. The water reflected the colors of the sky, rippling gently as a pair of ducks glided across. It was peaceful here, far removed from the noise of the city she had left behind.

Her mind wandered to the letter she had received that morning. A simple envelope with no return address, yet the handwriting was unmistakable. It had been years since she had seen it, but she knew. Heart pounding, she had unfolded the paper, scanning the words over and over again. "I need to see you," it read. No explanation, no signature—just those five words.</p>

<p>the trees, carrying the faint scent of blooming flowers. Emily walked along the narrow path, her footsteps muffled by the soft earth beneath her. She had always loved this time of day—the quiet moments when the world seemed to pause, just before night fully settled in.

As she reached the old wooden bridge, she stopped and leaned against the railing, gazing at the calm river below. The water reflected the colors of the sky, rippling gently as a pair of ducks glided across. It was peaceful here, far removed from the noise of the city she had left behind.

Her mind wandered to the letter she had received that morning. A simple envelope with no return address, yet the handwriting was unmistakable. It had been years since she had seen it, but she knew. Heart pounding, she had unfolded the paper, scanning the words over and over again. "I need to see you," it read. No explanation, no signature—just those five words.</p>

<p>the trees, carrying the faint scent of blooming flowers. Emily walked along the narrow path, her footsteps muffled by the soft earth beneath her. She had always loved this time of day—the quiet moments when the world seemed to pause, just before night fully settled in.

As she reached the old wooden bridge, she stopped and leaned against the railing, gazing at the calm river below. The water reflected the colors of the sky, rippling gently as a pair of ducks glided across. It was peaceful here, far removed from the noise of the city she had left behind.

Her mind wandered to the letter she had received that morning. A simple envelope with no return address, yet the handwriting was unmistakable. It had been years since she had seen it, but she knew. Heart pounding, she had unfolded the paper, scanning the words over and over again. "I need to see you," it read. No explanation, no signature—just those five words.</p>
    </div>
    
</div>
  )
}

export default ScrollAnimations