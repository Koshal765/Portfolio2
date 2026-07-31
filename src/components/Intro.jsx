import { motion } from "framer-motion";
import { useEffect } from "react";

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4200); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3.7,
        duration: 0.5,
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#060814] overflow-hidden"
    >
      <div className="text-center">

        {/* Welcome Text */}
        <motion.p
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: -40,
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
           
          }}
          className="text-lg md:text-2xl tracking-[10px] uppercase text-slate-300"
        >
          Welcome To
        </motion.p>

        {/* Logo */}
        <motion.h1
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: [120, 0, -40],
            opacity: [0, 1, 1],
          }}
          transition={{
            delay: 0.6,
            duration: 2,
            times: [0, 0.45, 1],
            ease: "easeInOut",
          }}
          className="mt-6 text-5xl md:text-8xl font-bold"
        >
          <span className="text-fuchsia-500">&lt;</span>

          <span className="text-white">ksh</span>

          <span className="text-fuchsia-500">/</span>

          <span className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Code
          </span>

          <span className="text-fuchsia-500">&gt;</span>
        </motion.h1>

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="mx-auto mt-8 h-[3px] w-48 origin-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
        />

      </div>

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute h-[500px] w-[500px] rounded-full bg-fuchsia-500 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500 blur-[180px]"
      />
    </motion.div>
  );
};

export default Intro;