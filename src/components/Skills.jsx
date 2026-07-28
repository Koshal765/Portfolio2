
import React from "react";
import { SkillsInfo } from "../constant";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Laptop2, Database, Code2, Wrench, } from "lucide-react";

const Skills = () => {
  const colors = [
    {
      border: "border-violet-500/40",
      glow: "shadow-[0_0_40px_rgba(168,85,247,.18)]",
      title: "text-violet-400",
      bg: "bg-violet-500/10",
      icon: <Laptop2 size={24} className="text-violet-400" />,
    },

    {
      border: "border-green-500/40",
      glow: "shadow-[0_0_40px_rgba(34,197,94,.18)]",
      title: "text-green-400",
      bg: "bg-green-500/10",
      icon: <Database size={24} className="text-green-400" />,
    },

    {
      border: "border-blue-500/40",
      glow: "shadow-[0_0_40px_rgba(59,130,246,.18)]",
      title: "text-blue-400",
      bg: "bg-blue-500/10",
      icon: <Code2 size={24} className="text-blue-400" />,
    },

    {
      border: "border-pink-500/40",
      glow: "shadow-[0_0_40px_rgba(236,72,153,.18)]",
      title: "text-pink-400",
      bg: "bg-pink-500/10",
      icon: <Wrench size={24} className="text-pink-400" />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#060814] py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      </div>

      {/* Container */}

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-20 text-center"
        >
          <p className="mb-2 uppercase tracking-[5px] text-violet-400 font-semibold"> SKILLS  </p>

          <h2 className="text-5xl font-bold text-white"> Technologies I Work With </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My favourite technologies that I use to build modern,
            scalable and user-friendly web applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {SkillsInfo.map((category, index) => (

            <Tilt
              key={category.title}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              transitionSpeed={1500}
              scale={1.03}
              glareEnable={true}
              glareMaxOpacity={0.12}
            >

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: .4 }}
                viewport={{ once: true }}
                className={` relative  overflow-hidden  rounded-3xl  border  ${colors[index].border}  ${colors[index].glow}  bg-[#0B1220]/80 p-7 duration-300
                `}
              >

                {/* Gradient Glow */}

                <div
                  className={`absolute -top-24 right-0 h-44 w-44 rounded-full ${colors[index].bg} blur-[80px]`}
                />

                {/* Header */}
                <div className="relative z-10 flex items-center gap-4 mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors[index].bg}`}>
                    {colors[index].icon}
                  </div>

                  <h3 className={`text-xl font-semibold ${colors[index].title}`} > {category.title} </h3>

                </div>

                {/* Skills List */}

                <div className="relative z-10 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.05,
                      }}
                      whileHover={{
                        x: 8,
                        transition: { duration: 0.2 },
                      }}
                      className=" group  flex  items-center  gap-4  rounded-xl  p-2 transition-all  duration-300 hover:border-white/20 hover:bg-white/[0.06] " >
                      <div className="flex items-center justify-center rounded-lg bg-white/5 transition-all duration-300 group-hover:scale-110">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-6 w-6 object-contain"
                        />
                      </div>

                      <span className="font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Glow */}

                <div  className={`  absolute bottom-0 left-0 h-1  w-full  ${colors[index].bg} opacity-70 `} />

              </motion.div>
            </Tilt>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;