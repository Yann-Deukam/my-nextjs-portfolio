import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  stack: string;
  link: string;
  github: string;
  imageSrc: string;
}

const Project = ({
  title,
  category,
  description,
  stack,
  link,
  github,
  imageSrc,
}: ProjectProps) => {
  return (
    <div className="max-w-md mx-auto bg-zinc-500/20 glass rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={imageSrc}
            alt="project_image"
            width={30}
            height={40}
          />
        </div>
        <div className="p-8 project-desc">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            <Link href={link}>{link}</Link>
          </p>
          <p className="mt-2 text-slate-500">{description}</p>
          <p className="text-lg font-bold">{stack}</p>
          <Link href={github}>{github}</Link>
          <p>{category} </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
