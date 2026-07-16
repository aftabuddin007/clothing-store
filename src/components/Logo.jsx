"use client";

import Image from 'next/image';

export default function Logo({ className = "", variant = 'default' }) {
  
  // Dynamic style configurations focusing on Red, Blue, and Gray typography
  const styles = {
    default: {
      title: "text-slate-800", // Sophisticated dark slate gray
      subtitle: "text-slate-500",
      imageFilter: "grayscale" // Keeps the asset unified gray
    },
    light: { // For light backgrounds
      title: "text-slate-900",
      subtitle: "text-slate-400",
      imageFilter: "grayscale"
    },
    dark: { // For dark backgrounds
      title: "text-white",
      subtitle: "text-slate-400",
      imageFilter: "invert brightness-200 grayscale" 
    },
    colorful: { // High-end Red and Blue gradient variant
      title: "bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold",
      subtitle: "text-slate-500 tracking-[0.3em]",
      imageFilter: "saturate-150 hue-rotate-[200deg]" // Warm color shift toward blues/reds
    },
    gray: { // Clean, high-fashion minimalist Gray variant
      title: "text-zinc-700 font-bold tracking-tight",
      subtitle: "text-zinc-400 tracking-[0.25em]",
      imageFilter: "grayscale opacity-80"
    }
  };

  // Fallback to default if a non-existent variant string gets passed
  const currentStyle = styles[variant] || styles.default;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      
      {/* --- Logo Graphic --- */}
      <div className="relative w-9 h-9 shrink-0">
        <Image
          height={100}
          width={100}
          src="/image.png"
          alt="Aram Fashion Logo"
          className={`object-contain transition-all duration-300 ${currentStyle.imageFilter}`}
          priority={true}
        />
      </div>

      {/* --- Text Branding --- */}
      <div className="flex flex-col justify-center leading-none">
        {/* Main brand name: aram */}
        <span className={`text-2xl tracking-tight font-serif ${currentStyle.title}`}>
          aram
        </span>
        
        {/* Subtitle: FASHION */}
        <span className={`font-medium text-[10px] tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300 ${currentStyle.subtitle}`}>
          Fashion
        </span>
      </div>
    </div>
  );
}