"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import About from "./About";
import Project from "./Project";

function ScrollProjectSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="flex flex-col text-center items-center justify-center gap-8 h-[90vh]">
              <span className="text-7xl font-bold">Projects</span>
              <span className="font-semibold text-lg mx-20 opacity-50">
                What I've been doing this whole time
              </span>
            </div>
          </div>
          <div className="scroll-section mt-5">
            <h3 className="project-title">
              <sup>01</sup> Project
            </h3>
            <Project
              imageSrc="/images/project-1.jpg"
              title="Online booking app"
              category="web app"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa dolore accusamus, nisi veniam magni deleniti perferendis odit nostrum voluptatibus unde quod aut ratione ullam illum esse voluptas. Consequuntur, error."
              stack="#nextjs #typescript"
              link="https://test.com"
              github="https://github.com"
            />
          </div>
          <div className="scroll-section mt-5">
            <h3 className="project-title">
              <sup>02</sup> Project
            </h3>
            <Project
              imageSrc="/images/project-1.jpg"
              title="Online booking app"
              category="web app"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa dolore accusamus, nisi veniam magni deleniti perferendis odit nostrum voluptatibus unde quod aut ratione ullam illum esse voluptas. Consequuntur, error."
              stack="#nextjs #typescript"
              link="https://test.com"
              github="https://github.com"
            />
          </div>
          <div className="scroll-section mt-5">
            <h3 className="project-title">
              <sup>03</sup> Project
            </h3>
            <Project
              imageSrc="/images/project-1.jpg"
              title="Online booking app"
              category="web app"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa dolore accusamus, nisi veniam magni deleniti perferendis odit nostrum voluptatibus unde quod aut ratione ullam illum esse voluptas. Consequuntur, error."
              stack="#nextjs #typescript"
              link="https://test.com"
              github="https://github.com"
            />
          </div>
          <div className="scroll-section mt-5">
            <h3 className="project-title">
              <sup>04</sup> Project
            </h3>
            <Project
              imageSrc="/images/project-1.jpg"
              title="Online booking app"
              category="web app"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa dolore accusamus, nisi veniam magni deleniti perferendis odit nostrum voluptatibus unde quod aut ratione ullam illum esse voluptas. Consequuntur, error."
              stack="#nextjs #typescript"
              link="https://test.com"
              github="https://github.com"
            />
          </div>
          <div className="scroll-section mt-5">
            <h3 className="project-title">
              <sup>05</sup> Project
            </h3>
            <Project
              imageSrc="/images/project-1.jpg"
              title="Online booking app"
              category="web app"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa dolore accusamus, nisi veniam magni deleniti perferendis odit nostrum voluptatibus unde quod aut ratione ullam illum esse voluptas. Consequuntur, error."
              stack="#nextjs #typescript"
              link="https://test.com"
              github="https://github.com"
            />
          </div>
          <div className="scroll-section mt-5">
            <h3 className="project-title">
              <sup>06</sup> Project
            </h3>
            <Project
              imageSrc="/images/project-1.jpg"
              title="Online booking app"
              category="web app"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa dolore accusamus, nisi veniam magni deleniti perferendis odit nostrum voluptatibus unde quod aut ratione ullam illum esse voluptas. Consequuntur, error."
              stack="#nextjs #typescript"
              link="https://test.com"
              github="https://github.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollProjectSection;
