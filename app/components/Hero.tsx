"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="min-h-screen flex flex-col justify-center px-4 md:px-10 overflow-hidden relative pt-10"
    >
      <motion.div
        style={{ y }}
        className="relative z-10 gap-8 flex flex-col items-center md:items-start"
      >
        {/* ROW 1: CREATIVE [ICON] PROBLEM */}
        {/* Changed gap-2 to gap-[2vw] so spacing scales with text */}
        <div className="flex items-center gap-[2vw] w-full whitespace-nowrap overflow-hidden">
          <AnimatedWord text="CREATIVE" delay={2.5} />

          {/* Code Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
            className="w-[11vw] h-[11vw] md:w-[7vw] md:h-[7vw] bg-[#81a7f3] flex items-center justify-center rounded-full shrink-0"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-black w-[50%] h-[50%]"
            >
              <svg
                className="w-full h-full text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>
            </motion.div>
          </motion.div>

          <AnimatedWord text="PROBLEM" delay={2.6} />
        </div>

        {/* ROW 2: SOLVER [SPACER] WITH */}
        <div className="flex items-center gap-[3vw] w-full whitespace-nowrap overflow-hidden -mt-[3vw]">
          <AnimatedWord text="SOLVER" delay={2.7} />

          {/* Added a visual separator (Hyphen) to fix the merging issue clearly */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.9, duration: 0.5 }}
            className="h-[1vw] w-[6vw] bg-black rounded-full"
          />

          <AnimatedWord text="WITH" delay={2.8} />
        </div>

        {/* ROW 3: ELEGANT [ARROW] CODE */}
        <div className="flex items-center gap-[2vw] w-full whitespace-nowrap overflow-hidden -mt-[3vw]">
          <AnimatedWord
            text="ELEGANT"
            delay={2.9}
            textClass="text-neutral-400"
          />

          {/* Arrow Circle */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 3.2, duration: 0.8, type: "spring" }}
            className="w-[11vw] h-[11vw] md:w-[8vw] md:h-[8vw] bg-black rounded-full flex items-center justify-center shrink-0"
          >
            <span className="text-white text-[6vw] md:text-[4vw] -rotate-45">
              ➜
            </span>
          </motion.div>

          <AnimatedWord text="CODE" delay={3.0} textClass="text-neutral-400" />
        </div>
      </motion.div>

      {/* Description Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-4 md:left-10 w-full max-w-md px-4"
      >
        <p className="text-sm md:text-base uppercase tracking-widest leading-relaxed font-medium text-neutral-600">
          You are in the right place if you have a problem and don't know how to
          solve.
          <br />
          <span className="text-black font-bold">
            Text me and let's start work right away.
          </span>
        </p>
      </motion.div>
    </div>
  );
}

// Helper Component for the "Masked Slide Up" Text
function AnimatedWord({
  text,
  delay,
  textClass = "",
}: {
  text: string;
  delay: number;
  textClass?: string;
}) {
  return (
    <div className="overflow-hidden py-2 md:py-4">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
        className={`text-[12vw] md:text-[9vw] leading-[0.85] font-bold uppercase tracking-tighter ${textClass}`}
      >
        {text}
      </motion.h1>
    </div>
  );
}
