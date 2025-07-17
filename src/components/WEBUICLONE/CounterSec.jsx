import React, { useEffect, useRef } from "react";
import CountUp from "./MotionCounter";
import Parent from "./Parent";
import { useCountUp } from "react-countup";
import { useInView } from "framer-motion";
function CounterSec() {
  const counterRef = useRef(null);

  const isInView = useInView(counterRef, { threshold: 0.7, once: false });

  return (
    <Parent className=" flex justify-center mt-[80px]">
      <div
        ref={counterRef}
        className="border border-[#16CDB7] h-32 p-5 rounded-3xl flex justify-center items-center gap-3"
      >
        <Counter
          title={"Total Students"}
          to={1650}
          from={0}
          isInView={isInView}
        />
        <Counter
          title={"Total Internships"}
          to={15}
          from={0}
          isInView={isInView}
        />
        <Counter
          title={"Total Reviews"}
          to={350}
          from={0}
          isInView={isInView}
        />
      </div>
    </Parent>
  );
}

export default CounterSec;

function Counter({ from = 100, to = 1000, title, isInView }) {
  const countUpRef = useRef(null);
  const { countUp, start, reset } = useCountUp({
    start: from,
    end: to,
    duration: 2,
    startOnMount: false,
    ref: countUpRef,
    formattingFn: (n) => n.toLocaleString(), // optional formatting
  });
  useEffect(() => {
    if (isInView) {
      reset();
      start();
    }
  }, [isInView, start, reset]);

  return (
    <>
      <div className=" flex w-fit h-fit gap-1.5">
        <div>
          <img src="./testIcon.png" className="w-20 h-auto" />
        </div>
        <div className=" flex flex-col justify-center">
          <div>
            <span ref={countUpRef} className=" text-white text-5xl font-bold">
              {countUp}
            </span>

            <span className="text-white text-5xl font-bold">+</span>
          </div>
          <p className="text-[#06D597] text-xs ml-1.5">{title}</p>
        </div>
      </div>
    </>
  );
}
