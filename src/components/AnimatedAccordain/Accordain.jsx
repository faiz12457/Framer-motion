import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)} 
      className="p-4 bg-blue-500 m-4 rounded-xl text-white cursor-pointer w-64"
    >
      <div className="font-semibold">Click to toggle</div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3,  }}
        className="overflow-hidden"
      >
        <div className="mt-2">
          This is the hidden content. It appears when the accordion is open.
        </div>

        <div className="mt-2">
          This is the hidden content. It appears when the accordion is open.
        </div>


        <div className="mt-2">
          This is the hidden content. It appears when the accordion is open.
        </div>


        <div className="mt-2">
          This is the hidden content. It appears when the accordion is open.
        </div>
      </motion.div>
    </div>
  );
}

export default Accordion;
