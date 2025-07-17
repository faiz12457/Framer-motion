import React from "react";
import { motion } from "framer-motion";

function BlurCircle({ position = "left", top = 300, radius = 500 }) {
  // Compute left value based on position
  const left = position === "left" ? 0 : position === "center" ? "50%" : "100%";

  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: [0.1, 0.2, 0.3, 0.2, 0.1] }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      style={{
        background: `radial-gradient(circle at ${left} ${top}px, rgba(22, 205, 183, 1), transparent ${radius}px)`,
      }}
      className="pointer-events-none z-50 absolute inset-0"
    />
  );
}

export default BlurCircle;
