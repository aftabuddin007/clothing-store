"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBanner() {
  // Animation variants for staggered text loading
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex flex-col-reverse lg:flex-row bg-[#FAFAFA] overflow-hidden">
      
      {/* Left Column: Text & CTA */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4"
          >
            Welcome to Aram Fashion
          </motion.h2>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-6"
          >
            Refine Your <br /> Everyday Style.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 mb-10 leading-relaxed"
          >
            Discover our curated collection of premium men&apos;s dress shirts. 
            Tailored for ultimate comfort, designed for complete confidence.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-gray-900 text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg"
            >
              Shop New Arrivals
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-transparent border border-gray-900 text-gray-900 text-sm font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column: Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full lg:w-1/2 h-[50vh] lg:h-full relative"
      >
        {/* 
          Using a standard <img> tag for drop-in ease. 
          If you switch to Next.js <Image />, remember to add 'images.pexels.com' 
          to your next.config.js remotePatterns. 
        */}
       
  <Image
    src="https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Aram Fashion - Assorted men's dress shirts"
    fill
    priority
    
    className="object-cover object-center shadow-2xl lg:rounded-l-2xl"
  />

        
        {/* Optional subtle overlay to blend the image edge slightly on desktop */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#FAFAFA] to-transparent"></div>
      </motion.div>
      
    </section>
  );
}