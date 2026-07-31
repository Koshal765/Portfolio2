import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AthenuraLogo from "../assets/AthenuraLogo.png";
import {motion} from 'framer-motion'

gsap.registerPlugin(ScrollTrigger);


const Experience = () => {

    const sectionRef = useRef(null);
const stickyRef = useRef(null);
const logoRef = useRef(null);
const cardRef = useRef(null);
useLayoutEffect(() => {
  const ctx = gsap.context(() => {

    gsap.set(cardRef.current, {
      x: -400,
      opacity: 0,
      scale: 0.9,
      filter: "blur(20px)",
    });

    gsap.set(logoRef.current, {
      y: 400,
      opacity: 0,
      scale: 0.7,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2500",
        scrub: true,
        pin: stickyRef.current,
        anticipatePin: 1,
      },
    });

    tl.to(logoRef.current, {
      y: 50,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    })
      .to({}, { duration: 0.5 })
      .to(logoRef.current, {
        x: -350,
        scale: 1,
        duration: 1,
      })
      .to(
        cardRef.current,
        {
          x: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        "<"
      );

  }, sectionRef);

  return () => ctx.revert();
}, []);


    return (
      
      <>
      
  <section
    id="experience"
    ref={sectionRef}
    className="relative overflow-hidden bg-[#060814] hidden md:block"
  >
    

    {/* Background */}
    <div className="absolute inset-0 overflow-hidden">

      <div className="absolute -left-44 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[180px]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
linear-gradient(to right,#fff 1px,transparent 1px),
linear-gradient(to bottom,#fff 1px,transparent 1px)
`,
          backgroundSize: "70px 70px",
        }}
      />

    </div>

  

    {/* Sticky Section */}
    <div
      ref={stickyRef}
      className="relative z-20 flex h-screen items-center justify-center overflow-hidden"
    >

      {/* Heading */}
      <motion.div 
       initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
      
      className="absolute top-20 left-1/2 -translate-x-1/2 text-center">

        <p className="mb-3 uppercase tracking-[6px] text-violet-400 font-semibold">
          EXPERIENCE
        </p>

        <h2 className="text-4xl font-bold text-white">
          Companies I've Worked With
        </h2>

      </motion.div>

      {/* main container */}
      <div className="relative flex w-full max-w-7xl items-center justify-center h-screen px-8">

      

        <div
          ref={logoRef}
          className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
        >

          <div className="relative flex h-72 w-72  items-center justify-center">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse" />

            {/* Main Circle */}
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-cyan-400 bg-[#0D1325] shadow-[0_0_60px_rgba(34,211,238,.45)]">

              <img
                src={AthenuraLogo}
                alt="Athenura"
                className="h-100 w-100 object-cover mt-4"
              />

            </div>

          </div>

        </div>

  {/* card */}

        <div
          ref={cardRef}
          className="absolute right-0 w-[640px] top-50 "
        >

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
             <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            {/* Top Border */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />

            {/* Glow */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-[120px]" />

            <div className="relative p-5">

              {/* Company */}

              <span className="inline-flex rounded-full bg-violet-500/15 px-4 py-2 text-xs font-semibold tracking-widest text-violet-300 uppercase">
                Frontend Developer Intern
              </span>

              <h3 className="mt-6 text-4xl font-bold text-white">
                Athenura 
              </h3>

              <p className="mt-3 text-slate-400">
                May 2026 - Present
              </p>

              <div className="my-8 h-px bg-gradient-to-r from-violet-500/30 via-white/10 to-cyan-500/30" />

              {/* Description */}

              <p className="leading-8 text-slate-400">
                Worked on developing responsive web applications using
                React.js, Tailwind CSS and modern frontend technologies.
                Built reusable UI components, integrated REST APIs,
                optimized performance and collaborated with the development
                team to deliver scalable user experiences.
              </p>

              {/* Tech Stack */}

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "React",
                  "Tailwind",
                  "JavaScript",
                  "REST API",
                  "Git",
                  "Responsive UI",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

        

      </div>
    

    </div>

    </section>

<section className="block md:hidden bg-[#060814] py-20 px-6">

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-14"
  >
    <p className="uppercase tracking-[6px] text-violet-400 font-semibold">
      EXPERIENCE
    </p>

    <h2 className="mt-3 text-3xl font-bold text-white">
      Companies I've Worked With
    </h2>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 80, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
  >

    {/* Top Border */}
    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />

    {/* Glow */}
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

    <div className="p-6">

      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 120,
        }}
        className="mb-6 flex justify-center"
      >
        <div className="flex h-24 w-24 items-center justify-center  rounded-full border-4 border-cyan-400 bg-[#0D1325] shadow-[0_0_35px_rgba(34,211,238,.45)]">

          <img
            src={AthenuraLogo}
            alt="Athenura"
            className="h-16 w-16 object-contain"
          />

        </div>
      </motion.div>
<div className="w-full text-center">
      <span className="inline-flex rounded-full  bg-violet-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-300">
        Frontend Developer Intern
      </span>

      <h3 className="mt-5 text-3xl font-bold text-white">
        Athenura
      </h3>

      <p className="mt-2 text-slate-400">
        May 2026 - Present
      </p>

      </div>

      <div className="my-6 h-px bg-gradient-to-r from-violet-500/30 via-white/10 to-cyan-500/30" />

      <p className="leading-7 text-slate-400">
        Worked on developing responsive web applications using React.js,
        Tailwind CSS and modern frontend technologies. Built reusable UI
        components, integrated REST APIs and collaborated with the
        development team.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "React",
          "Tailwind",
          "JavaScript",
          "REST API",
          "Git",
          "Responsive UI",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
          >
            {tech}
          </span>
        ))}

      </div>

    </div>

  </motion.div>

</section>

</>

);

          
    
}

export default Experience