import React, { useEffect, useRef, useState } from "react";
import Parent from "./Parent";
import { GoKey } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import InternButton from "./InternButton";
import { animate, motion, useAnimation, useInView } from "framer-motion";

function OurIntershipsSec() {
  return (
    <Parent className="mt-20">
      <Title />
      <div className="mt-14 flex gap-6 pt-2 flex-wrap justify-center overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <InternshipCard index={i} key={i} />
        ))}
      </div>
      <div className=" mt-14 flex justify-center">
        <InternButton
          animationTextColor={"#27C5D9"}
          primaryTextColor={"black"}
          title={"View All Internships"}
          primaryBgColor={"#27C5D9"}
          animationBgColor={"black"}
          animationBorderColor={"#27C5D9"}
          initialWidth={200}
          animationWidth={220}
        />
      </div>
    </Parent>
  );
}

export default OurIntershipsSec;

function Title() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.7, once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } 
  }, [isInView]);

  return (
    <motion.div
      variants={{
        initial: { y: 15, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      }}
      transition={{
        duration: 0.5,
        delay: 0.025,
      }}
      initial="initial"
      animate={controls}
      ref={ref}
      className=" w-fit mx-auto space-y-2 "
    >
      <h2 className="text-5xl text-white font-bold text-center">
        Our <span className="text-[#16CDB7]">Internships</span>
      </h2>

      <p className="text-[#9CA3AF] text-xl text-center">
        Explore our practical cybersecurity internships covering offense,
        defense,
        <br /> intelligence, and compliance.
      </p>
    </motion.div>
  );
}

function InternshipCard({ index }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { threshold: 1, once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView]);
  const [hover, setIsHover] = useState(false);
  return (
    <motion.div
      variants={{
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      }}
      transition={{
        duration: 0.7,
        delay: 0.1 * index,
        ease: "easeInOut",
      }}
      initial="initial"
      animate={controls}
      ref={ref}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        boxShadow: hover ? "0px 1px 8px rgba(22, 205, 183, 0.4)" : "none",
        borderColor: hover && "rgba(22, 205, 183, 0.5)",
      }}
      className="w-[294px] group space-y-3 h-[318px]
     hover:-translate-y-1  border  cursor-pointer   bg-black border-zinc-700 rounded-[10px] p-6"
    >
      <div className="h-10  ">
        <GoKey className="text-[#16CDB7] " size={38} />
      </div>

      <h3 className="text-white group-hover:text-[#16CDB7] text-xl font-bold">
        Junior API Security Analyst
      </h3>

      <p className="text-[#9CA3AF]">
        Identify, exploit, and mitigate vulnerabilities in modern REST and
        GraphQL APIs.
      </p>

      <button className="text-[#16CDB7] cursor-pointer hover:underline  flex justify-center items-center gap-2 font-semibold ">
        Learn More <FaArrowRight size={13} />
      </button>
    </motion.div>
  );
}
