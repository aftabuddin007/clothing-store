"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  // Sophisticated delayed animations for editorial elements
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const lineReveal = {
    hidden: { width: 0 },
    visible: { 
      width: "100px", 
      transition: { duration: 1.2, delay: 0.4, ease: "easeInOut" } 
    }
  };

  return (
    <section className="relative w-full h-screen bg-neutral-950 text-white overflow-hidden flex items-center justify-center">
      
      {/* 1. Full-Bleed Campaign Image with Subtle Scale Animation */}
      <motion.div 
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Aram Fashion Editorial Campaign"
          fill
          priority
          className="object-cover object-center select-none"
        />
        {/* Soft luxury cinematic overlay to ensure typography pops */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/40 mix-blend-multiply" />
      </motion.div>

      {/* 2. Editorial Micro-Texts (Top Left & Right Corner details from reference layout) */}
      <div className="absolute top-8 left-8 lg:left-16 z-20 hidden sm:block pointer-events-none">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-light">
          Aram Atelier / Premium Line
        </p>
      </div>
      <div className="absolute top-8 right-8 lg:right-16 z-20 hidden sm:block pointer-events-none text-right">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-light">
          Collection <span className="text-white">2026</span>
        </p>
      </div>

      {/* 3. Main Immersive Typography Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 flex flex-col justify-end h-full pb-20 lg:pb-28">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Accent Label with Horizontal Indicator Line */}
          <div className="flex items-center gap-4 mb-4">
            <motion.div variants={lineReveal} className="h-[1px] bg-white/60" />
            <motion.p 
              variants={fadeUp}
              className="text-xs lg:text-sm uppercase tracking-[0.4em] text-neutral-200 font-medium"
            >
              The New Heritage Collection
            </motion.p>
          </div>

          {/* Huge Editorial Display Headline */}
          <motion.h1 
            variants={fadeUp}
            className="text-6xl sm:text-8xl lg:text-9xl font-serif text-white uppercase tracking-tight leading-none mb-6 select-none"
          >
            Aram
          </motion.h1>

          {/* Subtext description laid out elegantly */}
          <motion.p 
            variants={fadeUp}
            className="text-sm lg:text-base text-neutral-300 font-light tracking-wide max-w-md leading-relaxed mb-10"
          >
            Experience a masterclass in clean geometry and unparalleled fabric structure. Engineered for those who appreciate understated luxury.
          </motion.p>

          {/* 4. Action Element: Sleek Integrated Campaign Button */}
          <motion.div variants={fadeUp}>
            <button
              className="group relative inline-flex items-center justify-center bg-white text-black px-10 py-4 overflow-hidden rounded-none shadow-2xl transition-transform duration-300 active:scale-95"
            >
              {/* Sliding hover effect line background */}
              <span className="absolute inset-0 w-full h-full bg-neutral-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out" />
              
              <Link href={"/products"} className="relative text-xs uppercase font-semibold tracking-[0.2em] flex items-center gap-2">
                Order Now
                <svg 
                  className="w-3 h-3 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* 5. Minimal Bottom Corner Collection Stamp */}
      <div className="absolute bottom-8 right-8 lg:right-16 z-20 hidden md:block border border-white/20 px-4 py-2 pointer-events-none backdrop-blur-xs">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/80">
          Limited Edition Vol. 01
        </p>
      </div>

    </section>
  );
}