"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaArrowRight,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="flex flex-col space-y-6">
          <div className="text-white">
            <Logo />
          </div>
          <p className="text-sm font-light leading-relaxed text-neutral-400 max-w-xs">
            Meticulously tailored everyday essentials for the modern wardrobe. 
            Understated luxury, exceptional quality.
          </p>
        </div>

        {/* Collection Links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6">
            Shop
          </h3>
          <ul className="space-y-4 text-sm font-light">
            <li>
              <Link href="/products?category=new" className="hover:text-white transition-colors duration-300">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="/products?category=shirts" className="hover:text-white transition-colors duration-300">
                Dress Shirts
              </Link>
            </li>
            <li>
              <Link href="/products?category=classic" className="hover:text-white transition-colors duration-300">
                The Timeless Collection
              </Link>
            </li>
          </ul>
        </div>

        {/* Brand Links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6">
            Our World
          </h3>
          <ul className="space-y-4 text-sm font-light">
            <li>
              <Link href="/story" className="hover:text-white transition-colors duration-300">
                The Aram Story
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:text-white transition-colors duration-300">
                Ethical Craftsmanship
              </Link>
            </li>
            <li>
              <Link href="/journal" className="hover:text-white transition-colors duration-300">
                Editorial Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* Editorial Newsletter */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6">
            The Aram Letter
          </h3>
          <p className="text-sm font-light text-neutral-400 mb-6 leading-relaxed">
            Subscribe to receive seasonal collection previews and exclusive updates.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex items-center border-b border-neutral-800 focus-within:border-white transition-colors duration-300 pb-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent text-sm font-light text-white outline-none placeholder-neutral-600 rounded-none"
              required
            />
            <button 
              type="submit" 
              aria-label="Subscribe"
              className="text-neutral-400 hover:text-white transition-colors duration-300 ml-2"
            >
              <FaArrowRight className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>

      {/* Divider Line */}
      <div className=" ">
        <div className="border-t border-neutral-900" />
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-light tracking-wide">
        
        {/* Copyright */}
        <p className="text-neutral-500 order-2 sm:order-1">
          © {new Date().getFullYear()} Aram Fashion. All rights reserved.
        </p>

        {/* Socials & Legal Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 order-1 sm:order-2">
          {/* Subtle Social Media Anchors */}
          <div className="flex gap-6 border-b sm:border-b-0 sm:border-r border-neutral-900 pb-4 sm:pb-0 sm:pr-8">
            <a href="#" aria-label="Instagram" className="text-neutral-500 hover:text-white transition-colors duration-300">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="text-neutral-500 hover:text-white transition-colors duration-300">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Pinterest" className="text-neutral-500 hover:text-white transition-colors duration-300">
              <FaPinterestP className="w-4 h-4" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-neutral-500">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;