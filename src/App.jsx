import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'

function App() {


  return (
    <>
    <div className='relative pt-20'>
      <Navbar />
      <About />
      <Skills/>
   </div>
    </>
  )
}

export default App
