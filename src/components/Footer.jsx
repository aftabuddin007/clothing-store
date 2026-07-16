"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <Logo></Logo>

          <p className="text-sm leading-7">
            Discover premium products at the best prices. Shop
            smarter, faster, and easier with ShopNest.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="hover:text-indigo-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-indigo-400 transition"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/cart"
                className="hover:text-indigo-400 transition"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Newsletter
          </h3>

          <p className="text-sm mb-4">
            Subscribe to receive the latest offers and updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-l-lg px-4 py-3 text-black outline-none"
            />

            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 rounded-r-lg transition">
              <FaEnvelope />
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-pink-600 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-sky-500 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} ShopNest. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm">
          <Link
            href="/privacy-policy"
            className="hover:text-indigo-400 transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="hover:text-indigo-400 transition"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;