"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-28 bg-white border-t border-neutral-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Editorial Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-3">
              The Insider Circle
            </h2>
            <h3 className="text-4xl sm:text-5xl font-serif text-neutral-900 tracking-tight leading-tight mb-4">
              Join the World of Aram
            </h3>
            <p className="text-sm sm:text-base text-neutral-500 font-light leading-relaxed tracking-wide">
              Subscribe to receive priority access to seasonal product drops, private studio journal entry previews, and curated styling guides designed for the modern wardrobe.
            </p>
          </motion.div>

          {/* Right Side: Structured Minimalist Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="w-full"
          >
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-[#FAFAFA] border border-neutral-200 px-6 py-4 text-sm font-light text-neutral-900 placeholder-neutral-400 rounded-none outline-none focus:border-neutral-900 focus:bg-white transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-neutral-900 text-white hover:bg-neutral-800 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] rounded-none shadow-md transition-colors duration-300 whitespace-nowrap active:scale-98"
              >
                Subscribe
              </button>
            </form>
            
            {/* Fine print policy */}
            <p className="text-[11px] text-neutral-400 font-light mt-3 tracking-wide">
              By signing up, you consent to our privacy terms. Opt-out seamlessly at any time.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}