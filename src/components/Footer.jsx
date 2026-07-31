import { useState , useEffect} from "react"
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import {motion} from "framer-motion";

const Footer = () => {
    const menuItems = [
    {
      id: 'about', label: 'About'
    },
    { id: 'skills', label: 'Skills' },
    {id:'experience',label:'Experience'},
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  const [active, setActive] = useState("");

useEffect(() => {
  const handleScroll = () => {
   
    const sections = menuItems.map((item) =>
      document.getElementById(item.id)
    );

    sections.forEach((section) => {
      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top <= 120 && rect.bottom >= 120) {
        setActive(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll(); // Set active on page load

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handlleMenuItemClick = (sectionid) => {
    setActive(sectionid);
    

    const section = document.getElementById(sectionid);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
  <section className="w-full bg-[#060814]  py-10 ">
    

  <motion.h1 
 initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
 transition={{ duration: 0.6 }}
  
  className="text-center font-bold font-serif text-white text-4xl md:text-5xl leading-10">Koshal Pothare</motion.h1>
     <motion.div
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 ,delay:0.4 }}
     
     className="w-full hidden md:flex justify-center mt-5 ">
        <ul className=''>
            {menuItems.map((item) => (
              <li key={item.id} className={`inline-block px-3 cursor-pointer font-semibold  text-sm hover:text-fuchsia-700 duration-300 ${active === item.id ? "text-fuchsia-700 " : "text-gray-600"}`}>
                <button onClick={() => handlleMenuItemClick(item.id)}>{item.label}</button></li>
            ))}
          </ul>
     </motion.div>
     <motion.div 
      initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6,delay:0.8 }}
     
     className="w-full flex justify-center gap-4 mt-4">
            <a
            href="https://github.com/Koshal-Pothare" target="_blank"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-violet-600 transition"
          >
            <FaGithub size={20} className="text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/koshal-pothare-b63806388/" target="_blank"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
          >
            <FaLinkedin size={20} className="text-white" />
          </a>

          <a
            href="https://www.instagram.com/newcoder7?igsh=MTlqODIyNTFxbGZ1NQ==" target="_blank"
            className="w-12 h-12 rounded-full  flex items-center justify-center hover:bg-pink-600 transition"
          >
            <FaInstagram size={20} className="text-white " />
          </a>

     </motion.div>
     <p className="text-center text-gray-600 mt-4">© 2026 Koshal Pothare. All rights reserved.</p>
  </section>
  )
}

export default Footer