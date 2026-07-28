
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import Me from "../assets/Me2.jpeg";
import {HeroSectionLogo} from "../constant"

const Hero = () => {
  

  return (
    <section id="about"
className="min-h-screen bg-[#070A14] pt-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_40%)] ">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-center md:text-left">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
           
            <motion.p
              className="text-xl text-gray-300 font-normal mb-1 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              Hi, I'm 
            </motion.p>

            {/* Koshal */}
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-serif text-white tracking-tight leading-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Koshal
            </motion.h1>

            {/* Full Stack Developer */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-purple-400 mt-1 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Typewriter
           words={[" Full Stack Developer", "Front-End Developer", "Web Developer", "Programmer"]}
           typeSpeed={100}
           deleteSpeed={80}
            delaySpeed={1200}
            loop={0}
            cursor
            cursorStyle="|"
            
            cursorRenderer={(cursor) =>( <span className='text-fuchsia-800'>{cursor}</span>)}
            />
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm md:text-lg text-gray-300 p-2 md:p-0 md:max-w-2xl leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I build clean, responsive and user-friendly web applications with modern technologies. Focused on creating impactful digital experiences.
            </motion.p>

            {/* Buttons with gradients */}
            <motion.div
              className="flex flex-wrap  gap-4 mb-12 ml-10 md:ml-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1h8apYmo_KyutVLQ4b4g9INnAn2j7HW4j/view?usp=drive_link" target="_blank"
                className="px-8 py-3 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View CV
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="border-t border-gray-700 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.h3
                className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                Tech Stack
              </motion.h3>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {HeroSectionLogo.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={tech.logo} className="w-10 h-10"/>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Avatar with Floating Cards */}
          <motion.div
            className="flex-1 flex flex-col items-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative">
              {/* Glow behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Avatar container*/}
              <motion.div
                className="w-64 h-64 md:w-90 md:h-120 rounded-3xl bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center shadow-2xl shadow-purple-500/30 relative z-10 border-4 border-purple-400/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
               
 <img src={Me} alt='Koshal' className='w-full h-full mt-4 rounded-3xl object-cover mb-4 drop-shadow-[0_10px_20px_rgba(255,0,255,0.5)] border border-fuchsia-600'/>
  
              </motion.div>

              {/* Floating Cards */}
              
              {/* Card 1 - Top Left (React) */}
              <motion.div
                className="absolute top-8 -left-8 bg-gradient-to-br from-cyan-500 to-blue-600 px-4 py-3 rounded-xl shadow-xl shadow-cyan-500/30 z-20 cursor-default"
                initial={{ opacity: 0, x: -30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: -5 }}
               
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚛️</span>
                  <div>
                    <p className="text-xs font-semibold text-white">React</p>
                    <p className="text-[10px] text-white/70">Framework</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Top Right (UI/UX) */}
              <motion.div
                className="absolute top-10 -right-16 bg-gradient-to-br from-purple-500 to-pink-600 px-4 py-3 rounded-xl shadow-xl shadow-purple-500/30 z-20 cursor-default"
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 50 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
               
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <p className="text-xs font-semibold text-white">UI/UX</p>
                    <p className="text-[10px] text-white/70">Design</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Bottom Left (Fast) */}
              <motion.div
                className="absolute bottom-8 -left-15 bg-gradient-to-br from-orange-500 to-red-600 px-4 py-3 rounded-xl shadow-xl shadow-orange-500/30 z-20 cursor-default"
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-xs font-semibold text-white">Fast</p>
                    <p className="text-[10px] text-white/70">Performance</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 - Bottom Right (Responsive) */}
              <motion.div
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-green-500 to-emerald-600 px-4 py-3 rounded-xl shadow-xl shadow-green-500/30 z-20 cursor-default"
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: -5 }}
               
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="text-xs font-semibold text-white">Responsive</p>
                    <p className="text-[10px] text-white/70">Mobile-first</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;