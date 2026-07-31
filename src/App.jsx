import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Experience from './components/Experience.jsx'
import Intro from './components/Intro.jsx'

function App() {

  const [showIntro , setShowIntro] = useState(true);

  return (
    <>
    {showIntro ? (<Intro onFinish={()=>setShowIntro(false)}/>):(
      
    <div className='relative pt-18'>
      <Navbar />
      <Hero />
      <Skills/>
      <Experience/>
      <Projects />
      <Education/>
      <Contact/>
      <Footer/>
   </div>
  
    )}
    </>
  )
}

export default App
