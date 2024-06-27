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

const project=[
  {
    num: '01',
    category:'Full stack',
    title:'HoneyHill',
    description:'Hotel booking site developed using the MERN stack featuring hotel listings, search, booking, alongside implemented user authentication, responsive design, and testing.',
    stack:[
      {name:'ReactJS'},
      {name:'NodeJS'},
      {name:'MongoDB'},
      {name:'ExpressJS'},
      {name:'Javascript'},
      {name:'Html'},
      {name:'Css'},
    ],
    image:[
      {img:'/assets/work/honeyhill/1.png'},
      { img: '/assets/work/honeyhill/2.png' },
      { img: '/assets/work/honeyhill/3.png' },
      { img: '/assets/work/honeyhill/4.png' },
      { img: '/assets/work/honeyhill/5.png' },
      { img: '/assets/work/honeyhill/6.png' },
      { img: '/assets/work/honeyhill/7.png' },
      { img: '/assets/work/honeyhill/8.png' },
      { img: '/assets/work/honeyhill/9.png' },
      { img: '/assets/work/honeyhill/10.png' },
      { img: '/assets/work/honeyhill/11.png' },
    ],
    github:"git@github.com:Kunal-2417/Honey-hill-hotel-booking-site-.git"  
  },
  {
    num: '02',
    category: 'Full stack',
    title: 'Product Comparator',
    description: '• Comparing products from various online stores, showcasing data scraping skills using Python, alongside implemented user authentication, responsive design, and testing.',
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
      { img: '/assets/work/dental/6.png' },
    ],
    github: "https://github.com/Kunal-2417/Dummy-Project"
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Algorithm Visualizer',
    description: 'It is a fully responsive application to help understand and visualize various sorting algorithms via animations.',
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
    description: 'Developed an advanced system for automated attendance using face detection and recognition technologies. The system leverages OpenCV for real-time face detection, scikit-learn for implementing the K-Nearest Neighbors (KNN) algorithm for classification, and pickle for data serialization, CSV file management, Win32com for text-to-speech, UI/UX enhancements via Streamlit',
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
    github: "https://github.com/Kunal-2417/face-attendance"
  },
  {
    num: '05',
    category: 'Frontend',
    title: 'Stone Paper Scissor Game',
    description: 'Developed an interactive Stone Paper Scissor game using React and JavaScript. The game features dynamic DOM manipulation to provide real-time user interaction and updates. It includes an intuitive user interface, responsive design, and engaging animations to enhance the gaming experience. Players can enjoy a seamless and enjoyable gameplay experience on various devices.',
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
      { img: '/assets/work/stonepapper-game/7.png' },
    ],
    github: "https://github.com/Kunal-2417/stone-paper-seissors-game"
  },
  {
    num: '06',
    category: 'Frontend',
    title: 'Portfolio',
    description: 'Developed a personal portfolio website using Next.js and Tailwind CSS. The portfolio showcases projects, skills, and experiences with a clean, modern design. Fully responsive, it ensures an optimal viewing experience on all devices.',
    stack: [
      { name: 'NextJS' },
      { name: 'Javascript' },
      { name: 'Html' },
      { name: 'Tailwind CSS' },
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
      { img: '/assets/work/honeyhill/10.png' },
      { img: '/assets/work/honeyhill/11.png' },
    ],
    github: "git@github.com:Kunal-2417/Honey-hill-hotel-booking-site-.git"
  },
  {
    num: '07',
    category: 'Frontend',
    title: 'Soldog',
    description: 'Developed a dog dating app, using HTML, CSS, and Bootstrap. The app is designed to be fully responsive, ensuring a seamless user experience across various devices.',
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
    github: "git@github.com:Kunal-2417/Honey-hill-hotel-booking-site-.git"
  },
  {
    num: '01',
    category: 'Full stack',
    title: 'HoneyHill',
    description: 'Hotel booking site developed using the MERN stack featuring hotel listings, search, booking, alongside implemented user authentication, responsive design, and testing.',
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
      { img: '/assets/work/honeyhill/10.png' },
      { img: '/assets/work/honeyhill/11.png' },
    ],
    github: "git@github.com:Kunal-2417/Honey-hill-hotel-booking-site-.git"
  },
  {
    num: '01',
    category: 'Full stack',
    title: 'HoneyHill',
    description: 'Hotel booking site developed using the MERN stack featuring hotel listings, search, booking, alongside implemented user authentication, responsive design, and testing.',
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
      { img: '/assets/work/honeyhill/10.png' },
      { img: '/assets/work/honeyhill/11.png' },
    ],
    github: "git@github.com:Kunal-2417/Honey-hill-hotel-booking-site-.git"
  },
  {
    num: '01',
    category: 'Full stack',
    title: 'HoneyHill',
    description: 'Hotel booking site developed using the MERN stack featuring hotel listings, search, booking, alongside implemented user authentication, responsive design, and testing.',
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
      { img: '/assets/work/honeyhill/10.png' },
      { img: '/assets/work/honeyhill/11.png' },
    ],
    github: "git@github.com:Kunal-2417/Honey-hill-hotel-booking-site-.git"
  },
  {
    num: '01',
    category: 'Full stack',
    title: 'HoneyHill',
    description: 'Hotel booking site developed using the MERN stack featuring hotel listings, search, booking, alongside implemented user authentication, responsive design, and testing.',
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
      { img: '/assets/work/honeyhill/10.png' },
      { img: '/assets/work/honeyhill/11.png' },
    ],
    github: "git@github.com:Kunal-2417/Honey-hill-hotel-booking-site-.git"
  },
]
const Work = () => {
  return (
    <div>
      Work Page
    </div>
  )
}

export default Work
