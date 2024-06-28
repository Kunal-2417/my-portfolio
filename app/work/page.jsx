"use client"

import { motion } from 'framer-motion'
import React,{useState} from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {BsArrowUpRight,BsGithub} from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    num: '01',
    category: 'Fullstack',
    title: 'HoneyHill',
    description:
      'Hotel booking site developed using the MERN stack featuring hotel listings, search, booking, alongside implemented user authentication, responsive design, and testing.',
    stack: [
      { name: 'ReactJS' },
      { name: 'NodeJS' },
      { name: 'MongoDB' },
      { name: 'ExpressJS' },
      { name: 'Javascript' },
      { name: 'Html' },
      { name: 'Css' },
    ],
    image: [
      { img: '/assets/work/honeyhill/1.png' },
      { img: '/assets/work/honeyhill/2.png' },
      { img: '/assets/work/honeyhill/3.png' },
      { img: '/assets/work/honeyhill/4.png' },
      { img: '/assets/work/honeyhill/5.png' },
      { img: '/assets/work/honeyhill/6.png' },
      { img: '/assets/work/honeyhill/7.png' },
      { img: '/assets/work/honeyhill/8.png' },
      { img: '/assets/work/honeyhill/9.png' },
      { img: '/assets/work/honeyhill/10.png' }
    ],
    live:'',
    github: "https://github.com/Kunal-2417/Honey-hill-hotel-booking-site-.git"
  },
  {
    num: '02',
    category: 'Fullstack',
    title: 'Product Comparator',
    description: 'Comparing products from various online stores, showcasing data scraping skills using Python, alongside implemented user authentication, responsive design, and testing.',
    stack: [
      { name: 'ReactJS' },
      { name: 'NodeJS' },
      { name: 'MongoDB' },
      { name: 'ExpressJS' },
      { name: 'Javascript' },
      { name: 'Python' },
      { name: 'firebase' },
      { name: 'Rozarpay gateway' },
      { name: 'Html' },
      { name: 'Css' },
    ],
    image: [
      { img: '/assets/work/dental/1.png' },
      { img: '/assets/work/dental/2.png' },
      { img: '/assets/work/dental/3.png' },
      { img: '/assets/work/dental/4.png' },
      { img: '/assets/work/dental/5.png' },
      { img: '/assets/work/dental/6.png' }
    ],
    live: '',
    github: "https://github.com/Kunal-2417/Dummy-Project"
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Algorithm Visualizer',
    description: 'A fully responsive application to help understand and visualize various sorting algorithms via animations.',
    stack: [
      { name: 'ReactJS' },
      { name: 'Javascript' },
      { name: 'Html' },
      { name: 'Css' },
    ],
    image: [
      { img: '/assets/work/algo-visual/1.png' },
      { img: '/assets/work/algo-visual/2.png' },
      { img: '/assets/work/algo-visual/3.png' },
      { img: '/assets/work/algo-visual/4.png' },
      { img: '/assets/work/algo-visual/5.png' },
      { img: '/assets/work/algo-visual/6.png' },
    ],
    live: '',

    github: "https://github.com/Kunal-2417/algo-visualizer"
  },
  {
    num: '04',
    category: 'Machine Learning',
    title: 'Face Recognition Based Smart Attendance System',
    description: 'An advanced system for automated attendance using face detection and recognition technologies. The system leverages OpenCV for real-time face detection, scikit-learn for implementing the K-Nearest Neighbors (KNN) algorithm for classification, and pickle for data serialization, CSV file management, Win32com for text-to-speech, UI/UX enhancements via Streamlit',
    stack: [
      { name: 'Python' },
      { name: 'OpenCV' },
      { name: 'scikit-learn' },
      { name: 'Streamlit' },
      { name: 'Win32com' },
    ],
    image: [
      { img: '/assets/work/attandence/1.png' },
      { img: '/assets/work/attandence/2.png' },
    ],
    live: '',

    github: "https://github.com/Kunal-2417/face-attendance.git"
  },
  {
    num: '05',
    category: 'Frontend',
    title: 'Stone Paper Scissor Game',
    description: 'An interactive Stone Paper Scissor game using React and JavaScript. The game features dynamic DOM manipulation to provide real-time user interaction and updates. It includes an intuitive user interface, responsive design, and engaging animations to enhance the gaming experience. Players can enjoy a seamless and enjoyable gameplay experience on various devices.',
    stack: [
      { name: 'ReactJS' },
      { name: 'Javascript' },
      { name: 'Html' },
      { name: 'Css' },
    ],
    image: [
      { img: '/assets/work/stonepapper-game/1.png' },
      { img: '/assets/work/stonepapper-game/2.png' },
      { img: '/assets/work/stonepapper-game/3.png' },
      { img: '/assets/work/stonepapper-game/4.png' },
      { img: '/assets/work/stonepapper-game/5.png' },
      { img: '/assets/work/stonepapper-game/6.png' },
      { img: '/assets/work/stonepapper-game/7.png' }
    ],
    live: '',

    github: "https://github.com/Kunal-2417/stone-paper-seissors-game.git"
  },
  {
    num: '06',
    category: 'Frontend',
    title: 'Portfolio',
    description: 'A personal portfolio website using Next.js and Tailwind CSS. The portfolio showcases projects, skills, and experiences with a clean, modern design. Fully responsive for an optimal viewing experience on all devices.',
    stack: [
      { name: 'NextJS' },
      { name: 'Javascript' },
      { name: 'Html' },
      { name: 'Tailwind CSS' },
    ],
    image: [
      { img: '/assets/work/portfolio/1.png' },
      { img: '/assets/work/portfolio/2.png' },
      { img: '/assets/work/portfolio/3.png' },
      { img: '/assets/work/portfolio/4.png' }
    ],
    live: '',

    github: "https://github.com/Kunal-2417/my-portfolio.git"
  },
  {
    num: '07',
    category: 'Full Stack',
    title: 'Web Scraper',
    description: 'A full-stack project designed for web scraping, utilizing Node.js and HTML. It employs the puppeteer library for scraping data from multiple sites based on user search queries.',
    stack: [
      { name: 'NodeJS' },
      { name: 'ExpressJS' },
      { name: 'Javascript' },
      { name: 'Puppeteer' },
      { name: 'Html' },
      { name: 'Css' },
    ],
    image: [
      { img: '/assets/work/webscraping/1.png' },
      { img: '/assets/work/webscraping/2.png' },
      { img: '/assets/work/webscraping/3.png' },
    ],
    live: '',

    github: "https://github.com/Kunal-2417/web-scraping.git"
  },
  {
    num: '08',
    category: 'Frontend',
    title: 'Soldog',
    description: 'A dog dating app developed using HTML, CSS, and Bootstrap. The app is fully responsive for a seamless user experience across various devices.',
    stack: [
      { name: 'Javascript' },
      { name: 'Html' },
      { name: 'Css' },
    ],
    image: [
      { img: '/assets/work/soldog/1.png' },
      { img: '/assets/work/soldog/2.png' },
      { img: '/assets/work/soldog/3.png' },
      { img: '/assets/work/soldog/4.png' },
    ],
    live: '',

    github: "https://github.com/Kunal-2417/SolDog.git"
  },
  {
    num: '09',
    category: 'Frontend',
    title: 'News Buddy',
    description: 'A React application designed to fetch and display the latest news from an online news API. The app provides users with up-to-date news articles across various categories, featuring a clean and user-friendly interface.',
    stack: [
      { name: 'ReactJS' },
      { name: 'Javascript' },
      { name: 'News API' },
      { name: 'Html' },
      { name: 'Css' },
    ],
    image: [
      { img: '/assets/work/newbuddy/1.png' },
      { img: '/assets/work/newbuddy/2.png' },
      { img: '/assets/work/newbuddy/3.png' },
      { img: '/assets/work/newbuddy/4.png' },
    ],
    live: '',

    github: "https://github.com/Kunal-2417/News-App-using-class-base-comp.-.git"
  },
  {
    num: '10',
    category: 'Frontend',
    title: 'Text Utility',
    description: 'A simple React application designed for various text transformations. It allows users to convert text between uppercase and lowercase, copy text to the clipboard, and remove extra spaces from the text.',
    stack: [
      { name: 'ReactJS' },
      { name: 'Javascript' },
      { name: 'Html' },
      { name: 'Css' },
    ],
    image: [
      { img: '/assets/work/text-util/1.png' },
      { img: '/assets/work/text-util/2.png' },
      { img: '/assets/work/text-util/3.png' },
      { img: '/assets/work/text-util/4.png' },
      { img: '/assets/work/text-util/5.png' },
    ],
    live: '',

    github: "https://github.com/Kunal-2417/Text-Utility.git"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Adjust autoplay speed as needed
  pauseOnHover: true, // Pause autoplay on hover
};

const Work = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleNextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const project = projects[projectIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto ">

        <div className="flex justify-between mb-8 ">
          <div className='group'>

          <button
            onClick={handlePrevProject}
            className="bg-white/5 text-white px-4 py-2 rounded group-hover:text-accent transition-colors duration-300"
            >
            Previous
          </button>
            </div>
            <div className='group'>

          <button
            onClick={handleNextProject}
            className="bg-white/5 text-white px-4 py-2 rounded group-hover:text-accent transition-colors duration-300"
            >
            Next
          </button>
            </div>
        </div>

        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} Project
              </h2>
              <p className='text-white/60 '>{project.description}</p>
              <ul className=' grid grid-cols-2 xl:grid-cols-3 gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-accent'>
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex item-center gap-4'>
                <Link href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{project.live ? 'Live Project' : 'GitHub Repository'}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%] relative items-center justify-center h-[200px] mt-auto mb-auto'>
            <Slider {...settings} className='h-full'>
              {project.image.map((item, index) => (
                <div key={index} className='h-[460px]'>
                  <div className="">
                    <div className='relative w-full h-full'>
                      <Image
                        src={item.img}
                        alt={`Project ${project.title} Image ${index + 1}`}
                        width={500}
                        height={500}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      
      </div>
    </motion.section>
  );
};

export default Work;
