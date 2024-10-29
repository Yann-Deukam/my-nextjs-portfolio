"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  DribbbleIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "hugeicons-react";
import { Menu, X } from "lucide-react";

const MobileNav = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

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
    <div className="menu-container relative" ref={container}>
      <div className="menu-bar flex items-center justify-between px-5">
        <div className="menu-logo">
          <h1 className="text-2xl font-bold">
            <a href="#home">G-ni Design</a>
          </h1>
        </div>
        <div className="menu-open my-10 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      <div className={`menu-overlay ${isOpen ? "block" : "hidden"}`}>
        <div className="menu-overlay-bar flex justify-between items-center">
          <div className="menu-logo">
            <h1 className="text-2xl font-bold">
              <a href="#home">G-ni Design</a>
            </h1>
          </div>
          <div className="menu-close cursor-pointer" onClick={toggleMenu}>
            <X size={20} />
          </div>
        </div>

        <div className="menu-copy flex flex-col justify-between mx-5">
          <div className="menu-links">
            {["Home", "About", "Services", "Projects"].map((item) => (
              <div key={item} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="menu-link text-2xl font-medium"
                  >
                    {item}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info flex mt-20">
            <div className="menu-info-col gap-3">
              <a href="#" className="inline-flex items-center">
                <InstagramIcon /> &#8599;
              </a>
              <a href="#" className="inline-flex items-center">
                <TwitterIcon /> &#8599;
              </a>
              <a href="#" className="inline-flex items-center">
                <GithubIcon /> &#8599;
              </a>
              <a href="#" className="inline-flex items-center">
                <DribbbleIcon /> &#8599;
              </a>
            </div>
          </div>
        </div>
        {/* 
        <div className="menu-preview">
          <p>View something</p>
        </div> */}
      </div>
    </div>
  );
};

export default MobileNav;
