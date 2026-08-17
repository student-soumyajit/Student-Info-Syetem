// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png"; 
import vercelLogo from "./assets/tech_logo/vercel.png";


import projectImg1 from "./assets/project/project1.png";
import projectImg2 from "./assets/project/project2.png";
import projectImg3 from "./assets/project/project2.png";
import projectImg4 from "./assets/project/project3.png";
import projectImg5 from "./assets/project/project4.png";
import projectImg6 from "./assets/project/project5.png";


import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";


// Education Section Logo's

import mbsilogo from "./assets/education_logo/mbsi_logo.png";
import bwulogo from "./assets/education_logo/BWU_logo.png";



export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: bwulogo,
    school: "Brainware University, Kolkata",
    date: "Aug 2023 - Jun 2027",
    grade: "82.52% till 6th semester ",
    desc: "I am pursuing my Bachelor (BTech) in Computer Science and engineering from Brainware University , Kolkata. Till now at Brainware University, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
  },
  {
    id: 1,
    img: mbsilogo,
    school: "makardah bamasundari institution, Howrah, West Bengal",
    date: " Apr 2020 - March 2022",
    grade: "83.8%",
    desc: "I completed my class 12 education from makardah bamasundari institution, Howrah, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
    degree: "WBCHSE(XII) - PCMB",
  },
  {
    id: 2,
    img: mbsilogo,
    school: " makardah bamasundari institution, Howrah, West Bengal",
    date: "Jan 2014 - March 2020",
    grade: "75.42%",
    desc: "I completed my class 10 education from makardah bamasundari institution, Howrah, West Bengal, under the WBBSE board.",
    degree: "WBBSE(X)",
  },
];



// Commented out projects - waiting for proper image imports
export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://shopnest-ip6b.onrender.com/",
    code: "https://github.com/student-soumyajit/Shopnest.git",
  },
  {
    title: "Recipe App",
    description:
      "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["React", "Tailwind CSS"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://react-recipe-app-blush.vercel.app/",
    code: "https://github.com/student-soumyajit/React-Recipe-App.git",
  },
  // {
  //   title: "Fitness Tracker",
  //   description:
  //     "A mobile app for tracking workouts, nutrition, and health metrics.",
  //   image: projectImg3,
  //   tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
  //   icons: [FaReact, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
  //   image: projectImg4,
  //   tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
  //   icons: [FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // },
  {
    title: "Chat App",
    description:
      "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://fullstack-realtime-chatapp-wgeo.onrender.com/",
    code: "https://github.com/student-soumyajit/fullstack-Realtime-Chatapp.git",
  },
  // {
  //   title: "AI Image Generator",
  //   description:
  //     "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // },
];
