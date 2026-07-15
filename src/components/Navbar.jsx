"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  // Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      name: "Products",
      href: "/products",
      icon: <FaShoppingBag />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto h-20 px-5 flex items-center justify-between">
        {/* Left - Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-indigo-600"
        >
          ShopNest
        </Link>

        {/* Middle - Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 text-lg font-medium transition duration-300 ${
                pathname === item.href
                  ? "text-indigo-600"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right - Cart & Theme */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/cart"
            className={`flex items-center gap-2 text-lg font-medium transition duration-300 ${
              pathname === "/cart"
                ? "text-indigo-600"
                : "text-gray-700 dark:text-gray-300 hover:text-indigo-600"
            }`}
          >
            <FaShoppingCart />
            Cart
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <FaSun size={20} />
            ) : (
              <FaMoon size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-5 pb-5 space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 text-lg ${
                pathname === item.href
                  ? "text-indigo-600"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 text-lg ${
              pathname === "/cart"
                ? "text-indigo-600"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <FaShoppingCart />
            Cart
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-3 text-lg"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;