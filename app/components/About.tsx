"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Awards data extracted from your old site
const awards = [
  { year: "2024", title: "Best Potential Award", org: "Laconic ERP Co.,Ltd." },
  { year: "2024", title: "Winner Web Design", org: "University of Sunderland" },
  {
    year: "2023",
    title: "Winner IT Challenge",
    org: "University of Sunderland",
  },
  {
    year: "2023",
    title: "Startup Challenge Cert",
    org: "Techstars Startup Weekend",
  },
  { year: "2023", title: "Beautiful Girlfriend", org: "Life Achievement 🏆" },
];

export default function AboutPage() {
  const container = useRef(null);

  return (
    <main className="bg-[#f0f0f0] min-h-screen pt-32 pb-20">
      {/* 1. HERO HEADER */}
      <section className="px-8 md:px-20 mb-20">
        <h1 className="text-[10vw] leading-[0.8] font-bold uppercase tracking-tighter mb-10 text-neutral-900">
          This is a <br />
          <span className="ml-[10vw] text-neutral-400">True Story.</span>
        </h1>
        <div className="w-full h-px bg-neutral-300" />
      </section>

      {/* 2. SPLIT LAYOUT (Sticky Image + Scrolling Text) */}
      <div
        ref={container}
        className="flex flex-col md:flex-row px-8 md:px-20 gap-10 md:gap-20 relative"
      >
        {/* Left Column: Sticky Image */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] sticky top-32">
          <div className="relative w-full h-full overflow-hidden bg-neutral-300 rounded-sm">
            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-white/20 uppercase font-bold text-4xl">
              About Image
            </div>
            <Image
              src="/images/profile.jpg"
              fill
              className="object-cover transition-all"
              alt="Thu Min"
            />
          </div>
        </div>

        {/* Right Column: Scrolling Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-20 md:pt-20 pb-40">
          <AnimatedText
            title="The Mission"
            text="Thu Min approaches challenges like a mission to the moon—not because they are easy, but because they are hard. I build APIs and resolve critical deployment issues hours before demos, ensuring seamless functionality when it matters most."
          />

          <AnimatedText
            title="The Bridge"
            text="With expertise in both frontend and backend, I bridge the gap between design and logic. Whether it's Java, PHP, or Node.JS, I use the best tools for the job while staying committed to clean, efficient code."
          />

          <AnimatedText
            title="The Impact"
            text="I identified and optimized performance bottlenecks, significantly improving system speed. My goal isn't just to complete tasks but to set new standards and push forward with determination."
          />
        </div>
      </div>

      {/* 3. AWARDS LIST */}
      <section className="px-8 md:px-20 mt-20">
        <h2 className="text-[6vw] font-bold uppercase tracking-tighter mb-12">
          Achivements
        </h2>
        <div>
          {awards.map((award, i) => (
            <AwardItem key={i} award={award} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}

// -- Sub Components --

function AnimatedText({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-neutral-500">
        {title}
      </h3>
      <p className="text-2xl md:text-4xl font-medium leading-tight text-neutral-900 indent-20">
        {text}
      </p>
    </motion.div>
  );
}

function AwardItem({ award, index }: { award: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-neutral-300 group hover:bg-white hover:px-8 transition-all duration-500 cursor-default"
    >
      <div className="flex items-baseline gap-10">
        <span className="text-sm font-mono opacity-50">0{index + 1}</span>
        <span className="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-neutral-500 transition-colors">
          {award.title}
        </span>
      </div>
      <div className="flex gap-4 md:gap-10 mt-4 md:mt-0 text-sm uppercase tracking-widest opacity-60">
        <span>{award.org}</span>
        <span>{award.year}</span>
      </div>
    </motion.div>
  );
}
