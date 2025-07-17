import React, { useEffect, useRef, useState } from "react";
import Parent from "./Parent";
import { animate, motion, useAnimation, useInView } from "framer-motion";
import { LuNotebookText } from "react-icons/lu";

const arr = [
  {
    title: "Internship Application & Interview",
    content: `Candidates begin their journey by submitting an application for a specific cybersecurity domain. Each applicant is required to complete a technical assessment to demonstrate their skills and interest. Shortlisted candidates are invited to a formal interview to assess their suitability for the selected specialization.`,
  },
  {
    title: "Internship Selection",
    content: `Candidates are selected based on their performance in the assessment and interview. Once selected, each candidate is assigned to the cybersecurity domain they initially applied for. Onboarding instructions and internship details are shared upon confirmation.`,
  },

  {
    title: "Platform Orientation & Onboarding",
    content: `Selected candidates receive training on the Internship Management Platform. This includes guidance on accessing tasks, submitting reports, receiving feedback from mentors, and tracking overall progress throughout the internship.`,
  },

  {
    title: "Specialized Training",
    content: `Candidates undergo focused training in the specific cybersecurity domain assigned during the application process. This phase ensures each candidate is equipped with the foundational and role-specific knowledge necessary to complete their assigned tasks.`,
  },

  {
    title: "Practical Task Execution",
    content: `During the internship, candidates work on hands-on tasks and projects that simulate real-world cybersecurity challenges. Weekly task reports are submitted through the platform and evaluated by assigned mentors who provide detailed feedback and recommendations.

`,
  },

  {
    title: "Ongoing Technical Mentorship",
    content: `Throughout the internship, candidates have access to continuous mentorship and technical support. Regular guidance sessions and feedback ensure consistent growth and skill development in their chosen domain.`,
  },
  {
    title: "Completion & Credentials",
    content:
      "Upon successful completion of all internship requirements, candidates are awarded with Certificate of Completion, Letter of Experience, Letter of Recommendation (for high-performing candidates) and LinkedIn Skill Endorsements from mentors",
  },
  {
    title: "Post-Internship Career Support",
    content: `After completing the internship, candidates benefit from career development support including personalized resume reviews, LinkedIn profile enhancement, interview preparation tips, and job placement assistance tailored to the cybersecurity industry.`,
  },
];

function InternshipJourneySec() {
  return (
    <Parent className="mt-32">
      <Title />
      <Info />
    </Parent>
  );
}

export default InternshipJourneySec;

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
        Your <span className="text-[#16CDB7]">Internship Journey</span>
      </h2>

      <p className="text-white text-[1rem] text-center">
        Our structured internship program provides hands-on experience and
        mentorship to prepare you for a <br /> successful cybersecurity career.
      </p>
    </motion.div>
  );
}

function Info() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

   function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="border mt-14 border-[#16CDB7]   relative py-6 gap-8 flex flex-col rounded-[10px] "
    >
      {arr.map((info, i) => (
        <InfoCard
          key={i}
          title={info.title}
          content={info.content}
          index={i + 1}
        />
      ))}

      <div className=" z-0 top-8 bottom-3 w-0.5 bg-white absolute left-1/2"></div>

      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(22, 205, 183, 0.15), transparent 500px)`,
        }}
      ></div>
    </div>
  );
}

function InfoCard({ index = 1, title, content }) {
  const ref = useRef(null);
  const iconRef = useRef(null);
  const isInView = useInView(ref, { threshold: 0.8 });
  const isInViewIcon = useInView(iconRef, { threshold: 1 });
  const controls = useAnimation();
  const Iconcontrols = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }

    if (isInViewIcon) {
      Iconcontrols.start("iconAnimate");
    }
  }, [isInView, isInViewIcon]);

  return (
    <>
      <motion.div ref={ref} className="relative  overflow-hidden ">
        <motion.div
          variants={{
            initial: {
              x: index % 2 == 0 ? 100 : -100,
              opacity: 0,
            },

            animate: {
              x: 0,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          initial="initial"
          animate={controls}
          className={`w-[586px]  pl-3   space-y-1.5 px-8 ${
            index % 2 == 0 ? "ml-auto " : "mr-auto "
          }`}
        >
          <h3
            className={`text-[#16CDB7] font-bold ${
              index % 2 == 0 ? "text-left" : "text-right"
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-white  ${
              index % 2 == 0 ? "text-left" : "text-right"
            }`}
          >
            {content}
          </p>
        </motion.div>

        <motion.div
          ref={iconRef}
          variants={{
            initialIcon: { scale: 0 },
            iconAnimate: { scale: 1 },
          }}
          initial="initialIcon"
          animate={Iconcontrols}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="size-10 bg-[#27C5D9] rounded-full flex justify-center items-center absolute left-1/2 top-1/2 z-20 -translate-1/2 "
        >
          <LuNotebookText size={22} />
        </motion.div>
      </motion.div>
    </>
  );
}
