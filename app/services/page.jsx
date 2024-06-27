"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'I excel at crafting dynamic, high-performance applications with a keen eye for detail and a passion for delivering exceptional user experiences.',
  },
  {
    num: '02',
    title: 'UI/UX',
    description:
      'I specialize in creating intuitive and visually appealing user interfaces and experiences, ensuring that every interaction is seamless and engaging.',
  },
  {
    num: '03',
    title: 'Logo Design',
    description:
      'I have a talent for designing unique and impactful logos that effectively represent your brand\'s identity and values.',
  },
  {
    num: '04',
    title: 'AI/ML',
    description:
      'I also possess some knowledge of AI and machine learning related to data preprocessing, feature extraction, feature selection techniques, data boosting, and data oversampling.',
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <BsArrowDownRight/>
                </div>
                {/*heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration:500">{service.title}</h2>
                {/*description */}
                <p className="text-white/60">{service.description}</p>
                {/*border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
