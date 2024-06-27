"use client"

import { motion } from 'framer-motion'
import React,{useState} from 'react'

import {Swiper ,SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {BsArrowUpRight,BsGithub} from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from 'next/link'
import Image from 'next/image'

const project = [
  {
    num: '01',
    category: 'Full stack',
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
    github: "https://github.com/Kunal-2417/Honey-hill-hotel-booking-site.git"
  },
  {
    num: '02',
    category: 'Full stack',
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
      { img: '/assets/work/attendance/1.png' },
      { img: '/assets/work/attendance/2.png' },
    ],
    github: "https://github.com/Kunal-2417/face-attendance"
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
      { img: '/assets/work/stonepaper-game/1.png' },
      { img: '/assets/work/stonepaper-game/2.png' },
      { img: '/assets/work/stonepaper-game/3.png' },
      { img: '/assets/work/stonepaper-game/4.png' },
      { img: '/assets/work/stonepaper-game/5.png' },
      { img: '/assets/work/stonepaper-game/6.png' },
      { img: '/assets/work/stonepaper-game/7.png' }
    ],
    github: "https://github.com/Kunal-2417/stone-paper-scissors-game"
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
    github: "https://github.com/Kunal-2417/my-portfolio"
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
    github: "https://github.com/Kunal-2417/web-scraper"
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
    github: "https://github.com/Kunal-2417/dog-dating-app"
  },
  {
    num: '09',
    category: 'Full stack',
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
      { img: '/assets/work/newsbuddy/1.png' },
      { img: '/assets/work/newsbuddy/2.png' },
      { img: '/assets/work/newsbuddy/3.png' },
      { img: '/assets/work/newsbuddy/4.png' },
    ],
    github: "https://github.com/Kunal-2417/news-buddy"
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
      { img: '/assets/work/text-utility/1.png' },
      { img: '/assets/work/text-utility/2.png' },
      { img: '/assets/work/text-utility/3.png' },
      { img: '/assets/work/text-utility/4.png' },
      { img: '/assets/work/text-utility/5.png' },
    ],
    github: "https://github.com/Kunal-2417/text-utility"
  }
];


const Work = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {project.map((proj) => (
          <motion.div
            key={proj.num}
            className="p-4 bg-white shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-gray-600 mb-4">{proj.description}</p>
            <div className="flex space-x-4 mb-4">
              <TooltipProvider>
                <TooltipTrigger>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600"
                  >
                    <BsGithub className="mr-1" /> View on GitHub
                  </a>
                </TooltipTrigger>
              </TooltipProvider>
            </div>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {proj.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img.img}
                    alt={`Project ${proj.num} Image ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default Work
