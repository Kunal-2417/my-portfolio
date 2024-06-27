"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
import { MdDataObject } from "react-icons/md";

//about data
const about = [
  {
    title: "About me",
    description:
      "Hi, My name is Gagan Singh and I am from Himachal Pradesh,India. I am a full stack web developer & programmer. I make web applications mostly using MERN stack. I love making making rich interactive websites and am passionate about learning new skills. Currently pursing bachelors in Computer Science at IIIT Jabalpur.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Gagan Singh Rathore",
      },
      {
        fieldName: "Phone",
        fieldValue: "+91 8626841891",
      },
      {
        fieldName: "Nationality",
        fieldValue: "India",
      },
      {
        fieldName: "Email",
        fieldValue: "gaganjnv2001@gmail.com",
      },
      {
        fieldName: "FreeLance",
        fieldValue: "Available",
      },
    ],
  },
];

//experience data
const experience = [
  {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    items: [
      {
        company: "Pyrax Dental Mart",
        position: "Full Stack Developer",
        duration: "May 2023 - Jan 2024",
        description:
          "Full-stack MERN project for comparing products from multiple online shopping apps. Front-end: React.js — Back-end: Node.js Express.js, MongoDB — Data scraping: Python. Showcases data scraping skills and full-stack development.",
      },
      {
        company: "Travel Junction Indo Company pvt. ltd.",
        position: "Full Stack Developer",
        duration: "April 2023 - May 2023",
        description:
          "Collaborated closely with a diverse team of developers, designers, and content creators to deliver high-quality projects on time.",
      },
    ],
  },
];

//Education
const education = [
  {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "",
    items: [
      {
        institution: "Indian Institute Of Information Technology Jabalpur",
        degree: "Bachelor of Technology in Computer Science Engineering",
        duration: "Nov 2021 - May 2025",
      },
      {
        institution: "JNV NAHAN",
        degree: "AISSCE (CLASS XII)",
        duration: "Apr 2019 - Mar 2020",
      },
    ],
  },
];

//Skills data
const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDB",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <PiFileCpp />,
      name: "C,C++",
    },
    {
      icon: <MdDataObject />,
      name: "Data Structures and Algorithms",
    },
  ],
};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto p-0">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/**Content */}
          <div className="min-h-[70vh] w-full p-0">
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about[0].title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about[0].description}
                </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620] mx-auto xl:mx-0">
                    {about[0].info.map((item, index) => (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="font-semibold text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education[0].title}</h3>
                <ScrollArea className="h-[400px] max-w-[600px] mx-auto xl:mx-0">
                  <ul className="text-white/60 list-none p-0 space-y-4">
                    {education[0].items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1">
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="font-semibold text-white">{item.institution}</p>
                        </div>
                        <span className=" text-white/60">{item.degree}</span>
                        <span className="text-accent">{item.duration}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience[0].title}</h3>
                <ScrollArea className=" h-[400px] max-w-[600px] mx-auto xl:mx-0">
                  <ul className="text-white/60 list-none p-0 space-y-4">
                    {experience[0].items.map((item, index) => (
                      <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1">
                        <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="font-semibold text-white">{item.company}</p>
                        </div>
                        <span className="text-xl max-w-[260px] text-center lg:text-left text-white">{item.position}</span>
                        <span className="text-accent">{item.duration}</span>
                        <p className="text-white/60">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                             {skill.icon}                              
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              {skill.name}
                              </p>
                            </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
