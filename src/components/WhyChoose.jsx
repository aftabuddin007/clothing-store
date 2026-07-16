"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Uncompromising Quality",
    description: "Woven from 100% long-staple Egyptian cotton, our shirts offer exceptional softness and durability that only gets better with time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "The Perfect Fit",
    description: "Designed with an algorithmic approach to tailoring. Our modern cut flatters the silhouette while allowing complete freedom of movement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0 0a3 3 0 104.243 4.243 3 3 0 00-4.243-4.243z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ethically Crafted",
    description: "We partner exclusively with family-owned mills that guarantee fair wages, safe conditions, and sustainable water recycling practices.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Complimentary Returns",
    description: "Experience Aram risk-free. Enjoy free shipping on all orders and a seamless 30-day return policy if the fit isn't absolutely perfect.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variants for individual items fading up
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-black w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
            The Aram Difference
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Elevating the standard of menswear.
          </h3>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants}
              className="flex flex-col items-start text-left"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full text-white mb-6 border border-gray-800 shadow-sm">
                {feature.icon}
              </div>
              
              {/* Text */}
              <h4 className="text-xl font-serif text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}