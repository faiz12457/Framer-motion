import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Parent from "./Parent";

import { FaStar } from "react-icons/fa6";
function SuccessStories() {
  return (
    <Parent className="mt-28">
      <Title />
      <Carousel />
    </Parent>
  );
}

export default SuccessStories;

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
      <h2 className="text-4xl text-white font-bold text-center">
        Success <span className="text-[#16CDB7]">Stories</span>
      </h2>

      <p className="text-white text-[1rem] text-center">
        Hear from our graduates who have successfully launched their
        cybersecurity careers after completing our
        <br /> training programs.
      </p>
    </motion.div>
  );
}

function Carousel() {
  const [current, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const totalSlides = 8;

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    sliderStart();
    return () => clearInterval(intervalRef.current);
  }, []);

  function sliderStart() {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  }

  function handlePrev() {
    const imglength = 8;
    setCurrentIndex((prev) => (prev === 0 ? imglength - 1 : prev - 1));
  }

  function handleNext() {
    const imglength = 8;
    setCurrentIndex((prev) => (prev === imglength - 1 ? 0 : prev + 1));
  }

  function handleClick(val) {
    clearInterval(intervalRef.current);

    setCurrentIndex(val);
    sliderStart();
  }

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - left, y: e.clientY - top });


  }
  return (
    <div
      onMouseMove={handleMouseMove}
      className="h-[398px] relative  mt-12 w-full  border flex flex-col  justify-around items-center border-[#16CDB7] rounded-[12px]"
    >
      <div className="overflow-hidden w-full">
        <motion.div
          animate={{
            x: `-${current * 100}%`,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="flex "
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex justify-center items-center"
            >
              <CarouselCard />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex shrink-0 gap-2 justify-center items-center">
        {Array.from({ length: 8 }).map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`size-2 cursor-pointer  rounded-full ${
                current == i ? "bg-[#27C5D7]" : "bg-white"
              } `}
            ></button>
          );
        })}
      </div>

      <div className="z-0 inset-0 pointer-events-none absolute"
      style={{
         background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(22, 205, 183, 0.15), transparent 400px)`,
      }}
      ></div>
    </div>
  );
}

function CarouselCard() {
  return (
    <div className=" w-[1180px] h-[292px]  space-y-5">
      <div className=" flex justify-center items-center">
        <img src="./person.png" className="size-20 rounded-full" />
      </div>

      <div className="flex justify-center items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="text-[#27C5D7]" size={22} />
        ))}
      </div>

      <div className="text-white text-center text-[18px]">
        <p>
          "The internship was highly practical and fast-paced. Working on real
          VM environments felt like actual hacking. I taught myself tools like
          Ettercap and PowerShell Empire, which was an invaluable learning
          experience."
        </p>
      </div>

      <div className="text-white flex flex-col justify-center items-center">
        <p className="font-bold ">Harsha Madhushanka Punchihewa</p>
        <p className="text-[14px]">Jr. Penetration Tester Intern</p>
      </div>
    </div>
  );
}
