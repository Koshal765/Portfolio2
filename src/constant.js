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
// import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from 'src/assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
// import gitLogo from './assets/tech_logo/git.png';
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

import itVedant from './assets/education/itvedant.png';
import rtmnu from './assets/education/rtmnu.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },

      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
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
      // { name: 'Git', logo: gitLogo },
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
    id:0,
    name: 'Appointment Scheduler',
    description: 'A web application that allows users to schedule and manage appointments efficiently with features like calendar integration and email reminders.',
    image: Appt,
    githubLink: 'https://github.com/Koshal765/appointment',
    liveLink: 'https://appointment-jet.vercel.app/',
    technologies: ['React JS', 'Tailwind', 'localStorage'],
    },
    {
        id:1,
    name: 'Shyayri Sagar',
    description: 'A poetry website that offers a vast collection of Shayari in various categories, allowing users to read, share, and express their emotions through words.',
    image: ShayariSagar,
    githubLink: 'https://github.com/Koshal765/Shayari-Sagar',
    liveLink: 'https://shayari-sagar.vercel.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    },
    {
        id:2,
    name: 'Currency Converter',
    description: 'A web application that enables users to convert currencies in real-time, providing accurate exchange rates and a user-friendly interface for seamless transactions.',
    image: Curr,
    githubLink: 'https://github.com/Koshal765/currency-Converter',
    liveLink: 'https://currency-converter-psi.vercel.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    },

]

export const EducationInfo = [
  {
    id: 0,
    img :itVedant,
    school:'ItVedant Java Full-Stack Web development',
    date:'May 2025-Jan 2026',
    desc:'I have completed this full-stack web development course from ItVedant where I learned various technologies like HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, etc.'

  },
    {
    id: 1,
    img :rtmnu,
    school:'Rashtrasant Tukadoji Maharaj Nagpur University',
    date:'Aug 2022- May 2025',
    desc:'Completed my  Bachelor of  Science(CS) from RTMNU with a first-class grade.'
    }
];


    