import React from 'react'
import { ProjectsInfo } from '../constant';
import { useState } from 'react';
import {motion} from "framer-motion" ;

const Projects = () => {



  return (
  <section 
  id='projects' className='relative overflow-hidden bg-[#060814] py-28'>


      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6">

 <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-20 text-center"
        >
      <p className="mb-2 uppercase tracking-[5px] text-violet-400 font-semibold"> PROJECTS </p>
    <h2 className="text-5xl font-bold text-white"> Things I have built so far </h2>
    <p className="mx-auto mt-5 max-w-2xl text-slate-400">A showcase of the Projects I have worked on, highlighting my skills and experience in various technologies</p>
</motion.div>

{/* Project Grid */}
<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
  {ProjectsInfo.map((project) => (
    <div
      key={project.id}
      
      className={`relative flex flex-col overflow-hidden rounded-3xl cursor-pointer group bg-[#0B1220] border ${project.theme.border} ${project.theme.shadow} transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]`}
    >
      {/* Background Glow */}
      <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 ${project.theme.glow}`} />

      {/* Top Gradient */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.theme.gradient}`} />

      {/* Image */}
      <div className="relative p-5">

  <img
    src={project.image}
    alt={project.name}
    className="w-full h-48 object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
  />

  {/* Gradient Overlay */}
  <div className={`absolute inset-5 rounded-2xl bg-gradient-to-t ${project.theme.gradient} opacity-10`} />

  {/* Team Badge */}
  <span className="absolute bottom-8 right-8 z-20 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-lg">
    {project.team}
  </span>

</div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pb-6">

        <h3 className={`text-2xl font-bold mb-4 ${project.theme.title}`}>
          {project.name}
        </h3>

        <p className="text-slate-400 leading-7 line-clamp-4 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${project.theme.badge}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Push Buttons to Bottom */}
        <div className="mt-auto pt-8 flex gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex-1 py-3 rounded-xl border text-center text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${project.theme.border} ${project.theme.badge}`}
          >
            View Code
          </a>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex-1 py-3 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r ${project.theme.gradient} transition-all duration-300 hover:scale-105`}
          >
            Live Demo
          </a>
        </div>

      </div>

      {/* Bottom Border */}
      <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${project.theme.gradient}`} />
    </div>
  ))}
</div>


    </div>

  </section> 


  )
}

export default Projects