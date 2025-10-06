import React from 'react'
import { FiMenu } from "react-icons/fi"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Link } from 'react-router';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  const handlleMenuItemClick = (sectionid) => {
    setActive(sectionid);
    setIsMenuOpen(false);
  }

  const menuItems = [
    {
      id: 'about', label: 'About'
    },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <>
      <nav className={`navbar fixed top-0 w-full z-50  bg-transparent rounded-b-2xl shadow-xl/30 shadow-fuchsia-500/50 px-[7vw] md:px-[7vw] lg:px-[20vw] } ${isScrolled ? 'backdrop-blur-md bg-black/30 border-b border-gray-700' : 'bg-transparent'}`}>
        <div className='  flex justify-around items-center py-5 text-white'>
          <div className='text-xl font-semibold cursor-pointer '>
            <span className='text-fuchsia-700'>&lt;</span>
            <span>ksh</span>
            <span className='text-fuchsia-700'>/</span>
            <span>Code</span>
            <span className='text-fuchsia-700'>&gt;</span>
          </div>
          { /* Desktop Menu */}
          <ul className='hidden md:flex '>
            {menuItems.map((item) => (
              <li key={item.id} className=' inline-block px-3 cursor-pointer font-medium text-sm hover:text-fuchsia-700 duration-300'>
                <button onClick={() => handlleMenuItemClick(item.id)}>{item.label}</button></li>
            ))}
          </ul>
          <div className='hidden md:flex space-x-4'>
            <a href="https://github.com/Koshal765"
              target='_blank'
              rel=' noopener noreferrer'
              className='text-gray-300 hover:text-fuchsia-800 duration-300 text-2xl'>
              <FaGithub size={24} />
            </a>

            <a href="https://github.com/Koshal765"
              target='_blank'
              rel=' noopener noreferrer'
              className='text-gray-300 hover:text-fuchsia-800 duration-300 text-2xl'>
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className='md:hidden backdrop-blur-2xl z-50'>
            {
              isMenuOpen ? (
                <FiX className='text-3xl text-fuchsia-500 cursor-pointer' onClick={() => setIsMenuOpen(false)} />
              ) : (
                <FiMenu className='text-3xl text-fuchsia-500 cursor-pointer' onClick={() => setIsMenuOpen(true)} />
              )

            }


          </div>

        </div>
        { /* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-opacity-75 backdrop-filter backdrop-blur-xl  z-50 border border-gray-700 rounded-b-2xl shadow-lg shadow-fuchsia-500/50 '>
            <ul className='flex flex-col  items-center space-y-4 text-gray-300 py-4 '>
              {menuItems.map((item) => (
                <li key={item.id} className={`cursor-pointer hover:text-white ${active === item.id ? "text-fuchsia-700" : ""}`}>
                  <button onClick={() => handlleMenuItemClick(item.id)}>{item.label}</button>
                </li>
              ))}
              <div className='flex space-x-6 '>
                <a href="https://github.com/Koshal765"
                  target='_blank'
                  rel=' noopener noreferrer'
                  className='text-gray-300 text-2xl'>
                  <FaGithub size={24} />
                </a>

                <a href="https://github.com/Koshal765"
                  target='_blank'
                  rel=' noopener noreferrer'
                  className='text-gray-300text-2xl'>
                  <FaLinkedin size={24} />
                </a>
              </div>

            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar;