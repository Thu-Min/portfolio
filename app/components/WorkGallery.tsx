"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    name: "Kalasa Art",
    category: "Restful API",
    src: "/kalasa.jpg",
    speed: 0,
  },
  {
    name: "Art Cannon",
    category: "Backend / API",
    src: "/artcannon.jpg",
    speed: -150,
  },
  {
    name: "Hades",
    category: "Portfolio Site",
    src: "/hades.jpg",
    speed: -75,
  },
  {
    name: "Mansory",
    category: "Static Web",
    src: "/mansory.jpg",
    speed: 50,
  },
];

export default function WorkGallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      id="work"
      ref={container}
      className="min-h-[150vh] bg-black text-white py-24 relative z-20 rounded-t-[40px] mt-10"
    >
      <div className="px-8 md:px-20 mb-32 flex justify-between items-end">
        <h2 className="text-[8vw] uppercase font-bold tracking-tighter leading-none">
          Selected <br /> Works
        </h2>
        <p className="hidden md:block text-sm uppercase tracking-widest mb-4 opacity-70">
          Backend & Frontend
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-32 px-4">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            container={container}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, container, index }: any) {
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Parallax logic
  const y = useTransform(scrollYProgress, [0, 1], [0, project.speed]);

  return (
    <motion.div
      style={{ y }}
      className={`relative w-full md:w-[35vw] aspect-3/4 ${
        index % 2 === 0 ? "mt-0" : "md:mt-40"
      }`}
    >
      <div className="w-full h-full relative overflow-hidden group rounded-sm bg-neutral-900">
        {/* Image would go here */}
        {/* <Image fill src={project.src} alt={project.name} className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" /> */}

        {/* Placeholder for now */}
        <div className="w-full h-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors duration-500 flex items-center justify-center text-neutral-600">
          Image: {project.src}
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-8 left-8 z-10 text-white mix-blend-difference">
          <p className="text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {project.category}
          </p>
          <h3 className="text-4xl font-bold uppercase tracking-tighter translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
            {project.name}
          </h3>
        </div>

        <div className="absolute inset-0 z-20 bg-black/70 flex items-center justify-center">
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white">
            Coming Soon
          </span>
        </div>
      </div>
    </motion.div>
  );
}
