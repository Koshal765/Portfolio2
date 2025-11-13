import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Me from "../assets/Me.jpg";
import profile from "../assets/profile.png";
import Tilt from 'react-parallax-tilt';


const About = () => {
  return (
<section id="about"
className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lh:my-32'>
 <div className='flex flex-col-reverse md:flex-row  justify-center items-center'>
<div className='md:w-1/2 text-center md:text-left-8 md:mt-0 '>
<h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-1 leading-tight'>Hi, I am </h1>
<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight'>Koshal</h2>

{/* skills  */}

<h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white'>I am a 
    <span className='text-fuchsia-800 ml-2'>
        <Typewriter
            words={[" Full Stack Developer", "MERN Stack Developer", "Web Developer", "Programmer"]}
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1200}
            loop={0}
            cursor
            cursorStyle="|"
            
            cursorRenderer={(cursor) =>( <span className='text-fuchsia-800'>{cursor}</span>)}
        />
    </span>
</h3>
<p className='text-gray-400  text-base sm:text-sm md:text-sm leading-relaxed mb-10 mt-8'>
    I’m a fresher web developer passionate about building clean and interactive user interfaces.
            I enjoy working with React.js and JavaScript to create  responsive web applications and love turning ideas into real projects.
            I’m eager to learn, grow, and contribute to exciting opportunities in frontend development."
   
</p>
{/* resume button */}
<a
href='https://drive.google.com/file/d/1210C45cQF3IoilE-RfdGB4EfznV10iGV/view?usp=sharing'
target='_blank'
rel='noopener noreferrer'
className='inline-block bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-fuchsia-800 transition-colors duration-300'>
    DOWNLOAD CV
</a>
</div>
{/* imagie div */}
<div className='md:w-1/2 flex justify-center md:justify-end'>
<Tilt 

tiltAngleX={20}
tiltMaxAngleY={20}
perspective={1000}
scale={1.05} 
transitionSpeed={1000}
gyroscope={true}
>
<img src={profile} alt='Koshal' className='w-80 h-80 rounded-full object-cover mb-4 drop-shadow-[0_10px_20px_rgba(255,0,255,0.5)] border border-fuchsia-600'/>
</Tilt>
</div>
 </div>

</section>
  )
}

export default About