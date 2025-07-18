import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Parent from "./Parent";

function AboutUs() {
  return (
    <Parent className="mt-28">
      <Title />

      <div className="mt-20 w-full relative flex flex-wrap  justify-center items-center gap-11 p-5">
        <AboutUsCard />
          <AboutUsCard />
            <AboutUsCard />

            <div
            style={{background: "linear-gradient(to bottom, #00f2fe, #00c9a7)"}}
             className="h-[50%] w-[80%] bg- -z-20 self-center  absolute"></div>
      </div>
    </Parent>
  );
}

export default AboutUs;

function Title() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.8, once: true });
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
      <h2 className="text-4xl text-white font-bold text-center">
        <span className="text-[#16CDB7]">About</span> US
      </h2>

      <p className="text-white text-[1rem] text-center">
        Welcome to EncryptEdge Labs — Where Cybersecurity Careers Begin. We’re
        not just another training provider.
        <br /> We’re your launchpad into the cybersecurity industry, offering
        hands-on, role-specific internship programs <br />
        designed to bridge the gap between theory and real-world practice.
      </p>
    </motion.div>
  );
}

function AboutUsCard() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.035,
        boxShadow: "0px 2px 8px rgba(22, 205, 183, 0.6)",
        
      }}
      transition={ { duration: 0.3, ease: "easeInOut" }}
      className="w-[371px]  z-10 rounded-[10px] bg-[#141B2A] px-2 py-10"
    >
      <div className="flex flex-col justify-center items-center h-full gap-3">
        <div className="flex items-center justify-center">
          <img src="./testIcon.png" className="w-20 h-auto" />
        </div>

        <h1 className="text-white text-3xl text-center">Our Mission</h1>

        <h3 className="text-[#06D597] text-center">
          Excellent. Intergrity. Innovation{" "}
        </h3>

        <p className="text-center text-white">
          We hold ourselves to the highest standards — delivering exceptional
          cybersecurity education with integrity, constantly innovating to stay
          ahead of evolving threats and industry needs.
        </p>
      </div>
    </motion.div>
  );
}
