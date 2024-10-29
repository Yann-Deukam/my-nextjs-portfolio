"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MobileNav = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 }); // Add "." before class selector

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.out",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen && tl.current) {
      tl.current.play();
    } else {
      tl.current?.reverse();
    }
  }, [isOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <h1 className="text-2xl font-bold">
            <a href="#home">G-ni Design</a>
          </h1>
        </div>
      </div>
      <div className="menu-open my-10" onClick={toggleMenu}>
        <Menu size={20} />
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <h1 className="text-2xl font-bold">
              <a href="#home">G-ni Design</a>
            </h1>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div className="menu-close-icon">
          <X size={20} />
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            <div className="menu-link-item">
              <div className="menu-link-item-holder" onClick={toggleMenu}>
                <a href="#home" className="menu-link">
                  Home
                </a>
              </div>
            </div>
            <div className="menu-link-item">
              <div className="menu-link-item-holder" onClick={toggleMenu}>
                <a href="#about" className="menu-link">
                  About
                </a>
              </div>
            </div>
            <div className="menu-link-item">
              <div className="menu-link-item-holder" onClick={toggleMenu}>
                <a href="#services" className="menu-link">
                  Services
                </a>
              </div>
            </div>
            <div className="menu-link-item">
              <div className="menu-link-item-holder" onClick={toggleMenu}>
                <a href="#projects" className="menu-link">
                  Projects
                </a>
              </div>
            </div>
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">Instagram &#8599;</a>
              <a href="#">X &#8599;</a>
              <a href="#">Github &#8599;</a>
              <a href="#">Dribbble &#8599;</a>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>View something</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
