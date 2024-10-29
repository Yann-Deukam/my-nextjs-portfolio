"use client";
import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Update screen size check when the window resizes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileNav />;
  }

  return (
    <div className="relative z-50">
      <nav className="w-full px-6 py-4 fixed top-3 left-0 right-0">
        <div className="flex items-center justify-between mx-5 md:mx-10 lg:mx-20">
          <h1 className="text-2xl font-bold">
            <a href="#home">G-ni Design</a>
          </h1>

          <div className="hidden md:flex flex-1 justify-center space-x-6 glass bg-zinc-500/30 rounded-full md:max-w-[400px] lg:max-w-[500px] py-3 px-6 text-md">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </div>

          <div className="hidden md:flex">
            <a
              href="#contact"
              className="px-4 py-2 bg-zinc-900 rounded-lg hover:bg-zinc-950 hover:border border-white/20 transition-all ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
