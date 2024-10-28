"use client";
import React, { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="w-full px-6 py-4 fixed top-3 left-0 right-0">
        <div className="flex items-center justify-between mx-20">
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <a href="#home">G-ni Design</a>
          </h1>

          {/* Centered Nav Items for Desktop */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 glass rounded-full max-w-[500px] py-3 px-6">
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

          {/* Contact Button for Desktop */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="px-4 py-2 bg-zinc-900 rounded-lg hover:bg-zinc-950 hover:border border-white/20 transition-all ease-in-out"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileNavOpen && <MobileNav />}
      </nav>
    </div>
  );
};

export default Navbar;