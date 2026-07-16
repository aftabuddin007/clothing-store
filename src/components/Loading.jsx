"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#FAFAFA] z-50">
      
      {/* Pulsing Brand Name */}
      <motion.h1
        animate={{ 
          opacity: [0.3, 1, 0.3],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, 
          ease: "easeInOut" 
        }}
        className="text-3xl md:text-4xl font-serif text-gray-900 uppercase tracking-[0.2em] ml-[0.2em]"
      >
        Aram
      </motion.h1>

      {/* Elegant minimalist loading line */}
      <div className="w-32 h-[1px] bg-gray-200 mt-6 relative overflow-hidden">
        <motion.div
          animate={{ 
            x: ["-100%", "100%"] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "easeInOut" 
          }}
          className="absolute inset-y-0 left-0 w-full bg-gray-900"
        />
      </div>

    </div>
  );
}