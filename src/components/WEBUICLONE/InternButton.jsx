import React, { useState } from "react";
import { motion } from "framer-motion";

function InternButton({
  className="",
  primaryBgColor,
  animationBgColor,
  primaryBorderColor="none" ,
  animationBorderColor,
  title,
  primaryTextColor,
  animationTextColor,
  initialWidth=174,
  animationWidth=200
}) {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      variants={{
        initial: { width: initialWidth, height: 40 },
        scale: { width: animationWidth, height: 40 },
      }}
      initial="initial"
      animate={hover ? "scale" : "initial"}
      transition={{ duration: 0.6 }}

      style={{
        borderColor:hover?animationBorderColor :primaryBorderColor,
        backgroundColor:hover?animationBgColor:primaryBgColor,
        color:hover?animationTextColor:primaryTextColor
      }}
      className={`h-10 pt-1 pb-2 text-[1.2rem] border cursor-pointer
       transition-colors duration-[600ms]  font-semibold ${className} `}
    >
      {title}
    </motion.button>
  );
}

export default InternButton;
