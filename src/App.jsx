import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

function App() {


  return (
    <>
    <div className='relative pt-20'>
      <Navbar />
      <About />
      <Skills/>
      <Projects />
      <Education/>
      <Contact/>
   </div>
    </>
  )
}

export default App
