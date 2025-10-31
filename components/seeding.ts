import { FaDocker, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiSocketdotio,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaInfinity } from "react-icons/fa6";

export const headerTitle = "Priya Kanwar";

export const userDetail = {
  name: "Priya kanwar",
  role: "MERN Stack Developer",
  email: "priyakanwar6140@gmail.com",
  phone: 8824956460,
  DOB: "March 29 2002",
  linkedin: "https://www.linkedin.com/in/priyakanwar11906114/",
  github: "https://github.com/Priya6140",
  twitter: "https://x.com/PriyaKanwar97561",
  leetcode: "https://leetcode.com/u/Priya6140/",
  instagram: "https://www.instagram.com/_priya_kanwar__/",
  resume:
    "https://drive.google.com/file/d/1WxhHAaAWmafRcu7NnVjeKN9HnPTvKyrG/view?usp=sharing",
  profileImg: "/PriyaProfile.png",
  description: `I’m an aspiring MERN Stack Developer who loves building web applications and learning new technologies. My goal is to grow as a full-stack developer by solving problems and creating meaningful digital experiences.`,
};

export const expertise = [
  {
    id: 1,
    name: "Frontend Development",
    description:
      "Building interactive and responsive user interfaces using React.js, JavaScript, and Tailwind CSS. Focused on creating clean, reusable components for a smooth user experience.",
    icon: "/icons/frontend.svg",
    level: "Intermediate",
    levelPercentage: 80,
  },
  {
    id: 2,
    name: "Backend Development",
    description:
      "Developing RESTful APIs using Node.js and Express.js. Ensuring performance, scalability, and smooth integration with databases like MongoDB.",
    icon: "/icons/backend.svg",
    level: "Intermediate",
    levelPercentage: 75,
  },
  {
    id: 3,
    name: "Database Management",
    description:
      "Using MongoDB to design, manage, and query databases efficiently. Familiar with CRUD operations, schema design, and Mongoose integration.",
    icon: "/icons/database.svg",
    level: "Intermediate",
    levelPercentage: 70,
  },
  {
    id: 4,
    name: "Version Control",
    description:
      "Using Git and GitHub for source code management, collaboration, and project tracking. Comfortable with branching, commits, and pull requests.",
    icon: "/icons/git.svg",
    level: "Intermediate",
    levelPercentage: 85,
  },
  
];

export const skills = [
  { id: 1, name: "JavaScript", icon: IoLogoJavascript, level: "Intermediate", className: "text-yellow-400", levelPercentage: 85 },
  { id: 2, name: "ReactJS", icon: FaReact, level: "Intermediate", className: "text-blue-500", levelPercentage: 85 },
  { id: 3, name: "NodeJS", icon: FaNode, level: "Intermediate", className: "text-green-500", levelPercentage: 80 },
  { id: 4, name: "Express.js", icon: SiExpress, level: "Intermediate", className: "text-gray-700", levelPercentage: 80 },
  { id: 5, name: "MongoDB", icon: SiMongodb, level: "Intermediate", className: "text-green-600", levelPercentage: 75 },
  { id: 6, name: "HTML/CSS", icon: FaHtml5, level: "Advanced", className: "text-orange-500", levelPercentage: 90 },
  { id: 7, name: "TailwindCSS", icon: SiTailwindcss, level: "Intermediate", className: "text-blue-400", levelPercentage: 85 },
  { id: 8, name: "Postman", icon: SiPostman, level: "Intermediate", className: "text-orange-500", levelPercentage: 80 },
  { id: 9, name: "Git & GitHub", icon: FaInfinity, level: "Intermediate", className: "text-gray-500", levelPercentage: 85 },
  { id: 10, name: "Firebase", icon: SiFirebase, level: "Beginner", className: "text-yellow-500", levelPercentage: 60 },
  { id: 11, name: "Next.js", icon: SiNextdotjs, level: "Beginner", className: "text-black", levelPercentage: 65 },
  { id: 12, name: "TypeScript", icon: SiTypescript, level: "Beginner", className: "text-blue-500", levelPercentage: 55 },

];

export const experiences = [
  {
    id: 1,
    title: "Engineer Intern (Service Delivery & Data Analysis)",
    company: "Vodafone Idea Limited",
    duration: "Jan 2023 - Oct 2023",
    description: `Worked on network performance monitoring and KPI analysis. Gained hands-on experience with automation scripts and data visualization tools. Developed problem-solving and teamwork skills applicable to software development.`,
  },
  
];

export const educations = [
  {
    id: 1,
    title: "B.Tech in Computer Science and Engineering",
    company: "Lovely Professional University",
    duration: "2019 - 2023",
    description: `Studied core computer science subjects such as Data Structures, Algorithms, Database Management, and Full Stack Development. Completed academic projects using MERN stack technologies.`,
  },
  {
    id: 2,
    title: "Senior Secondary (Class XII – Science Stream)",
    company: "Rajat Vidyapeeth, Sikar, Rajasthan",
    duration: "2018 - 2019",
    description: `Focused on Physics, Chemistry, and Mathematics. Developed logical thinking and analytical reasoning skills.`,
  },
  {
    id: 3,
    title: "Secondary School (Class X)",
    company: "Vidhya Bharti, Sikar, Rajasthan",
    duration: "2016 - 2017",
    description: `Completed secondary education with distinction, building a strong academic foundation and discipline toward learning.`,
  },

];

export const projects = [
    {
      id: 1,
      title: "Portfolio",
      description:
        "A personal portfolio website built using Next.js and Tailwind CSS to showcase my projects, education, and skills. Includes a responsive design and a contact form connected to an email API route.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      img: "/projects/portfolioimage.jpg",
      link: "https://your-vercel-link.vercel.app", // replace after deployment
      githubLink: "https://github.com/Priya6140/portfolio",
    },
  

];

export const links = [
  // {
  //   id: "profile",
  //   value: "Profile",
  // },
  {
    id: "experience",
    value: "Experience",
  },
  {
    id: "education",
    value: "Education",
  },
  {
    id: "skill",
    value: "Skill",
  },
  {
    id: "projects",
    value: "Projects",
  },
  {
    id: "expertise",
    value: "Expertise",
  },
  {
    id: "contact",
    value: "Contact",
  },
];
