"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[258px] h-[258px] xl:w-[458px] xl:h-[458px] relative z-5"
        >
          <Image
            src="/assets/profile.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full"
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="absolute top-0 left-0 w-[258px] h-[258px] xl:w-[458px] xl:h-[458px] z-10"
          fill="none"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray:"24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25","16 25 92 72","4 250 22 22" ],
              rotate:[120,360]
             }}
            transition={{ duration: 20,
              repeat:Infinity,
              repeatType:"reverse" }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
