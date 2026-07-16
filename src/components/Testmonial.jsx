"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "The drape and finish of these shirts is unmatched. Finding a tailormade fit off-the-rack used to be impossible, but Aram has completely cracked the code.",
    author: "Evelyn Thorne",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    quote: "Minimalist, structural, and unbelievably comfortable. The attention to detail in the collar architecture is what truly sets these shirts apart.",
    author: "Marcus Sterling",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    quote: "The packaging, the subtle stitching, and the exquisite Egyptian cotton make these shirts a masterclass in understated elegance. Pure luxury.",
    author: "Julian Vance",
    role: "Design Curator",
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fHww",
  },
];

export default function Testimonials() {
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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-[#FAF9F6] w-full overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
            Voices of Aram
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Loved by design purists.
          </h3>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              <div>
                {/* Large Stylized Quote Mark */}
                <span className="font-serif text-7xl text-gray-200 block h-6 select-none -translate-y-4">
                  “
                </span>
                
                <p className="text-gray-700 font-serif italic text-lg leading-relaxed relative z-10">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-10 pt-6 border-t border-gray-50">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover object-center"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-gray-950">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}