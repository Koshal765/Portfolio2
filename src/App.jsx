import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'

function App() {


  return (
    <>
    <div className='relative pt-20'>
      <Navbar />
      <About />
   </div>
    </>
  )
}

export default App
