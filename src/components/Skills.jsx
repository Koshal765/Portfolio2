import React from 'react'
import { SkillsInfo } from '../constant'
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
  <section id="skills" className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lh:my-32'>

{/* section title */}
<div className='text-center mb-8'>
  <h2 className='text-3x sm:text-4xl font-bold text-white'>SKILLS</h2>
  <div className='w-24 h-1 bg-fuchsia-900 mx-auto mt-2'>

  </div>
  <p className='text-gray-400 mt-4 text-lg font-semibold '>The collection of my technical skills and expertise honed through various projects</p>
</div>

{/* skills categories */}
<div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
  {SkillsInfo.map((category) => (
    <div key={category.title} className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'> 
    <h3 className='text-2xl sm:text-3xdl font-semibold text-gray-400 mb-4 text-center'>{category.title}</h3>

    {/* skills item */}
    <Tilt 

tiltAngleX={20}
tiltMaxAngleY={20}
perspective={1000}
scale={1.05} 
transitionSpeed={1000}
gyroscope={true}
>
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 w-full'>
      {category.skills.map((skills) => (
        <div
        key={skills.name} className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-3 min-w-[100px] sm:min-w-[120px] mx-auto '>
<img src={skills.logo} alt={`${skills.name} logo `} className='w-6 h-6 sm:w-8 sm:h-8 object-contain'/>
<span className='text-xs sm:text-sm text-gray-300 text-center break-words'>{skills.name}</span>
        </div>
      ))}
    </div>
    </Tilt>
    </div>
  ))}
</div>
  </section>
  )
}

export default Skills