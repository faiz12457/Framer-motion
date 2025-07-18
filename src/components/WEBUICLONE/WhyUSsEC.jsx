import { motion } from "framer-motion";
import React from "react";
import Parent from "./Parent";

function WhyUSsEC() {
  return (
    <Parent className="  mt-28 flex justify-between">
      <div className="w-[45%] p-4 space-y-3">
        <h1 className="text-5xl text-white font-semibold">
          <span className="text-[#16CDB7]">Why</span> Choose Us?
        </h1>
        <p className="text-white">
          Backed by industry experts and fueled by a mission to close the skill
          gap, EncryptEdge Labs delivers real-world cybersecurity training that
          prepares you for actual job roles — not just certifications.
        </p>

        <div className="space-y-3 pt-3">
          <InfoCard title={"Job-Role Aligned Internships"} />
          <InfoCard title={"Hands-on Practical Labs & Challenges"} />
          <InfoCard title={"Cutting-Edge, Certification-Level Curriculum"} />
          <InfoCard title={"Mentorship from Industry Experts"} />
          <InfoCard title={"Com letion Certificate + Hiring Opportunities"} />
        </div>
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <AnimatedCard />
      </div>
    </Parent>
  );
}

export default WhyUSsEC;

function AnimatedCard() {
  return (
    <div
      className="relative w-[600px] flex justify-center  overflow-hidden    items-center item h-[420px]
     rounded-3xl "
    >
      <div
        className="absolute inset-0 -z-20 "
        style={{ background: "rgb(12, 210, 164)" }}
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          // background: "linear-gradient(135deg, transparent, #106f70)",
          background:
            "conic-gradient(transparent 0%, transparent 50%, #106f70 100%)",
          filter: "blur(30px)",
        }}
        className="absolute -inset-[50%] -z-10    "
      />

      <div className="absolute inset-[10px] flex justify-center rounded-3xl   bg-black">
        <img
          src="./whyUs.jpg"
          alt="Why Us"
          className=" w-full h-full rounded-3xl"
        />
      </div>

      {/* 🖼️ Foreground Image or Content */}
    </div>
  );
}

function InfoCard({ title }) {
  return (
    <div className="flex gap-3 items-center">
      <div>
        <img src="./testIcon.png" className="w-12 h-auto" />
      </div>

      <p className="text-white text-[1.2rem]">{title}</p>
    </div>
  );
}
