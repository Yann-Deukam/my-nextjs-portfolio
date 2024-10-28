"use client";

import { Mouse } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="hero_header mt-12">
      <h1 className="font-extrabold text-6xl md:text-7xl lg:text-[6rem] outline-text text-center">
        FRONTEND ENGINEER
      </h1>
      <div className="-mt-24">
        <h1 className="text-7xl font-bold mb-5">Yann Donald</h1>
        <h2 className="font-semibold tex-2xl">Frontend developer</h2>
        <span className="flex flex-col items-center justify-center pt-10">
          <motion.div
            animate={{ y: [0, -20, 0] }} // Move up, then back down
            transition={{
              duration: 1.5, // Adjust the speed
              repeat: Infinity, // Loop the animation
              ease: "easeInOut", // Smooth transition
            }}
          >
            <Mouse size={40} />
          </motion.div>
          <span className="text-xs py-5 text-zinc-500">
            Scroll to get in touch
          </span>
        </span>
      </div>
    </header>
  );
};

export default Hero;
