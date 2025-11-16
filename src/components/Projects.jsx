import React from 'react'
import { ProjectsInfo } from '../constant';
import { useState } from 'react';

const Projects = () => {

const [selectedProject, setSelectedProject] = useState(null);

const handleOpenModal = (project) => {
    setSelectedProject(project);
};
const handleCloseModal = () => {
    setSelectedProject(null);
}

  return (
  <section 
  id='projects' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>
<div className='text-center mb-16'>
    <h2 className='text-3xl font-bold text-white '>Projects</h2>
    <div className='w-32 h-1 bg-fuchsia-900 mx-auto mt-2'></div>
    <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of the Projects I have worked on, highlighting my skills and experience in various technologies</p>
</div>

{/* project grid */}
<div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{ProjectsInfo.map((project) =>(
    <div key={project.id} onClick={()=>handleOpenModal(project)}  className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300' >
        <div className='p-4'>
            <img src={project.image} alt={project.name} className='w-full h-48 object-cover rounded-xl'/> 
            </div>
            <div className='p-6'>
<h3 className='text-2xl font-bold text-white mb-2'> {project.name}</h3>
          <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>
            {project.description}</p> 
            <div className='mb-4'>
                {project.technologies.map((tech,index) =>(
                    <span key={index} className='inline-block bg-fuchsia-900 text-xs font-semibold text-purple-300 rounded-full px-2 py-1 mr-2 mb-2'>{tech}</span>
               ) )}
            </div>
             </div>
    </div>
))}
</div>

{/* modal project */}
{selectedProject && (
    <div className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50'>
        <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
            <div className='flex justify-end p-4'>
                <button onClick={handleCloseModal} className='text-white text-3xl font-bold hover:text-purple-500 '>
              &times;
                </button>
            </div>
            <div className='flex flex-col'>
                <div className='w-full flex justify-center bg-gray-900 px-4'>
                    <img src={selectedProject.image} alt={selectedProject.title} className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl'></img>
                </div>
                <div className='lg:p-8 p-6'>
                    <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>
                   {selectedProject.title}
                    </h3>
                    <p className='text-gray-400 mb-6 lg:text-base text-xs'>{selectedProject.description}</p>
                    <div className='flex flex-wrap gap-2 mb-6'>
                        {selectedProject.technologies.map((tech,index) =>(
                            <span key={index} className='bg-fuchsia-900 text-xs font-semibold text-purple-300 rounded-full px-2 py-1 '>{tech}</span>
                        ))}

                    </div>
                    <div className='flex gap-4'>
                        <a href={selectedProject.githubLink} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 py-1 rounded-xl lg:text-xl text-semibold text-center '>View Code</a>
                         <a href={selectedProject.liveLink} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-purple-600 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 py-1 rounded-xl lg:text-xl text-semibold text-center '>View Live</a>
                    </div>
                </div>
            </div>
        </div>
    </div>)}

  </section> 


  )
}

export default Projects