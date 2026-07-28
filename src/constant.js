import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
// import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from 'src/assets/tech_logo/gsap.png';
// import materialuiLogo from 'src/assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import express from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from 'src/assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
 import git from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
// import postmanLogo from './assets/tech_logo/postman.png';
// import mcLogo from './assets/tech_logo/mc.png';
// import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

import Appt from './assets/Projects/Appt.png';
import ShayariSagar from './assets/Projects/ShayariSagar.png';
import Curr from './assets/Projects/Curr.png';
import WSB from  './assets/Projects/WSB.png';
import Laundry from './assets/Projects/Laundry.png'

import itvedant from './assets/education/itvedant.png';
import rtmnu from './assets/education/rtmnu.jpeg';
import Gcps from './assets/education/Gcps.jpg'
import Newenglish from './assets/education/Newenglish.jpeg'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },

      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: express },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
   
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
   
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: git },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    

      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];


export const ProjectsInfo = [
  {
    id: 0,
    name: "Appointment Scheduler",
    description:
      "A web application that allows users to schedule and manage appointments efficiently with features like calendar integration and email reminders.",
    image: Appt,
    githubLink: "https://github.com/Koshal765/appointment",
    liveLink: "https://appointment-jet.vercel.app/",
    technologies: ["JavaScript","React JS", "TailwindCSS", "LocalStorage"],
    team: "Self Project",

    theme: {
      border: "border-emerald-500/40",
      shadow: "hover:shadow-[0_0_40px_rgba(16,185,129,.35)]",
      badge: "bg-emerald-500/20 text-emerald-300",
      title: "text-emerald-300",
      gradient: "from-emerald-500 to-cyan-500",
      glow: "bg-emerald-500/20",
    },
  },

  {
    id: 1,
    name: "WildSprout Beauty",
    description:
      "WildSprout Beauty is a modern skincare website showcasing a curated range of natural products.",
    image: WSB,
    githubLink: "https://github.com/Koshal765/WidSprout-Beauty",
    liveLink: "https://wild-sprout-beauty.vercel.app/",
    technologies: [ "React JS","Tailwind", "REST API", "JavaScript", "Spring Boot", "MySQL",  "JWT" ],
team: "Self Project",
    theme: {
      border: "border-amber-500/40",
      shadow: "hover:shadow-[0_0_40px_rgba(245,158,11,.35)]",
      badge: "bg-amber-500/20 text-amber-300",
      title: "text-amber-300",
      gradient: "from-amber-400 to-orange-500",
      glow: "bg-amber-500/20",
    },
  },
   {
  id: 2,
  name: "ATHLaundry",
  description: "A full-stack laundry service web app for scheduling pickups, placing orders, secure online payments, and real-time order tracking with an admin dashboard.",
  image: Laundry,
  githubLink: "https://github.com/Ayush110704/AthLaundary",
  liveLink: "https://ath-laundary.vercel.app/",
  technologies: ["React JS", "Tailwind CSS", "Node.js", "Express.js",  "JWT", "REST API", "Razorpay","MongoDB"],
  team: "Team Project",
  theme: {
    border: "border-cyan-500/40",
    shadow: "hover:shadow-[0_0_45px_rgba(6,182,212,.35)]",
    badge: "bg-cyan-500/20 text-cyan-300",
    title: "text-cyan-300",
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    glow: "bg-cyan-500",
  },
},

  {
    id: 3,
    name: "Shayari Sagar",
    description:
      "A poetry website that offers a vast collection of Shayari in various categories. Where user can read ,save and also share the shayari",

    image: ShayariSagar,

    githubLink: "https://github.com/Koshal765/Shayari-Sagar",

    liveLink: "https://shayari-sagar.vercel.app/",

    technologies: ["HTML", "CSS", "JavaScript", "API" , "LocalStorage"],
team: "Self Project",
    theme: {
      border: "border-fuchsia-500/40",
      shadow: "hover:shadow-[0_0_40px_rgba(217,70,239,.35)]",
      badge: "bg-fuchsia-500/20 text-fuchsia-300",
      title: "text-fuchsia-300",
      gradient: "from-fuchsia-500 to-violet-500",
      glow: "bg-fuchsia-500/20",
    },
  },

  {
    id: 4,
    name: "Currency Converter",
    description:
      "A web application that enables users to convert currencies in real time.",

    image: Curr,

    githubLink: "https://github.com/Koshal765/currency-Converter",

    liveLink: "https://currency-converter-lilac-beta.vercel.app/",

    technologies: ["HTML", "CSS", "JavaScript", "API"],
team: "Self Project",
    theme: {
      border: "border-sky-500/40",
      shadow: "hover:shadow-[0_0_40px_rgba(59,130,246,.35)]",
      badge: "bg-sky-500/20 text-sky-300",
      title: "text-sky-300",
      gradient: "from-sky-500 to-blue-600",
      glow: "bg-sky-500/20",
    },
  },
 
];

export const EducationInfo = [
  {
    id: 0,
    img :itvedant,
    degree:'Java Full-Stack Web development',
    school:'ItVedant Java Full-Stack Web development',
    date:'May 2025-Jan 2026',
    desc:'I have completed this full-stack web development course from ItVedant where I learned various technologies like HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, etc.'

  },
    {
    id: 1,
    img :rtmnu,
    degree:'B.Sc(CS)',
    school:'Rashtrasant Tukadoji Maharaj Nagpur University',
    date:'Aug 2022- May 2025',
    desc:'Completed my  Bachelor of  Science(CS) from RTMNU with a first-class grade.'
    },
    {
     id:2,
     img:Newenglish,
     degree:" (XII)-PCM with IT",
     school:'New English High School',
     date:'2020-2022',
     desc:'Completed 12th(IT) from New English Collage. A well known Collage from Wardha.'
    },
    {
      id:3,
      img:Gcps,
      degree:'X-(CBSE)',
      school:'Gandhi City Public School',
      date:'Passed in year 2020',
      desc:'Completed my 10th(CBSE Board) from this school.'
    },

   
];

export const HeroSectionLogo =[
         { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     { name: 'React JS', logo: reactjsLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
       { name: 'Tailwind CSS', logo: tailwindcssLogo },
         { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
]


    
