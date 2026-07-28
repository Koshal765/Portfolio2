
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EducationInfo } from "../constant";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const leftCard = {
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const rightCard = {
  hidden: {
    opacity: 0,
    x: 120,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const circleVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: [0, 1.2, 1],
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Education = () => {

  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="education"
      className="relative overflow-hidden py-25 px-[8vw] lg:px-[15vw] bg-[#070B14]"
    >
      {/* Background Blur */}
      <div className="absolute -top-40 left-0 w-96 h-96 rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-[160px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
       

        <h2 className="mb-2 uppercase tracking-[5px] text-violet-400 font-semibold">
          Education
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-400">
          Every milestone has strengthened my technical foundation,
          problem-solving skills, and passion for software development.
        </p>
      </motion.div>

     
      <div ref={timelineRef} className="relative">

       
      {/* gray background */}
        <div className="absolute left-1/2 top-0 hidden md:block h-full w-[4px] -translate-x-1/2 rounded-full bg-white/10" />

        {/*  progress line */}
        <motion.div
          style={{
            scaleY: lineScale,
            transformOrigin: "top",
          }}
          className="absolute left-1/2 top-0 hidden md:block h-full w-[4px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_30px_rgba(168,85,247,.8)]"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-28"
        >
          {EducationInfo.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
            >
              {/* timeline Node */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.4 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ amount: 0.6 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.15 }}
                className="absolute left-0 md:left-1/2 -translate-x-1/2 z-20"
              >
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-purple-500 bg-[#0F172A] shadow-[0_0_40px_rgba(168,85,247,.45)]">

                  <span className="absolute inset-0 rounded-full animate-ping bg-purple-500/30"></span>

                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-12 h-12 rounded-full object-cover relative z-10"
                  />
                </div>
              </motion.div>

              {/* education card */}

              <motion.div
                variants={index % 2 === 0 ? leftCard : rightCard}
                whileHover={{
                  y: -10,
                  rotateX: 4,
                  rotateY: index % 2 === 0 ? 4 : -4,
                  transition: { duration: 0.35 },
                }}
                className={`group relative w-full md:w-[44%] ml-10 md:ml-0 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
              >

                {/* card glow */}

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                {/* glass effect */}

                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden">
                  {/* Top Gradient */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400"></div>
                  {/* Decorative Orb */}
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-purple-500/20 blur-3xl"></div>

                  {/* Header */}

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-white overflow-hidden shadow-lg">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>

                      <span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 mb-2"> {edu.date}</span>

                      <h3 className="text-2xl font-bold text-white"> {edu.degree} </h3>

                      <h4 className="text-slate-400 mt-1"> {edu.school} </h4>

                    </div>
                  </div>

                  {/* Divider */}

                  <div className="my-6 h-px bg-gradient-to-r from-purple-500/30 via-transparent to-cyan-500/30"></div> 
                  <p className="text-slate-400 leading-8">{edu.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Background Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none"
      />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />
    </section>
  );
};

export default Education;


