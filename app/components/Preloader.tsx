"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Speed of counter
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
    >
      <div className="flex flex-col items-center">
        <p className="text-[10vw] font-bold leading-none tracking-tighter">
          {count}%
        </p>
        <p className="text-sm uppercase tracking-widest opacity-60 mt-2">
          Thu Min
        </p>
      </div>
    </motion.div>
  );
}
