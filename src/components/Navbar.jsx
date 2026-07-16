"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  FaShoppingCart,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";
import CartModal from "./CartModal";

const Navbar = () => {
  const pathname = usePathname();

  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

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
    },
    {
      name: "Products",
      href: "/products",
    },
  ];
const [openCart, setOpenCart] = useState(false);

const { cartItems } = useCart();

const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
);
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-black/70">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
<Logo></Logo>
        {/* <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-[#14532D]"
        >
          ShopNest
        </Link> */}

        {/* Desktop Links */}

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-base font-medium transition-all duration-300 ${
                pathname === item.href
                  ? "text-[#14532D]"
                  : "text-gray-700 hover:text-[#14532D] dark:text-gray-300"
              }`}
            >
              {item.name}

              {pathname === item.href && (
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#FBBF24]" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Section */}

        <div className="hidden items-center gap-4 md:flex">

          {/* Cart */}

          <button
    onClick={() => setOpenCart(true)}
    className="relative rounded-full p-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
>
    <FaShoppingCart size={20} />

    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FBBF24] text-xs font-bold text-black">
        {totalItems}
    </span>
</button>

          {/* Theme Toggle */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <FaSun size={18} />
            ) : (
              <FaMoon size={18} />
            )}
          </button>

        </div>

        {/* Mobile Button */}

        {/* Mobile Navbar Actions */}

<div className="flex items-center gap-3 md:hidden">

  {/* Menu */}

  <button
    onClick={() => setOpen(!open)}
    className="rounded-lg p-2 transition hover:bg-gray-100"
  >
    {open ? (
      <FaTimes size={20} />
    ) : (
      <FaBars size={20} />
    )}
  </button>


  {/* Theme */}

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    {darkMode ? (
      <FaSun size={18} />
    ) : (
      <FaMoon size={18} />
    )}
  </button>


  {/* Cart */}

  <button
    onClick={() => setOpenCart(true)}
    className="relative rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    <FaShoppingCart size={18} />

    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FBBF24] text-xs font-bold text-black">
      {totalItems}
    </span>
  </button>

</div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="space-y-5 border-t border-gray-200 bg-white px-5 py-6 dark:border-gray-800 dark:bg-black">

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block text-lg font-medium ${
                pathname === item.href
                  ? "text-[#14532D]"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Cart */}

        
        </div>
        
      </div>
<CartModal
    open={openCart}
    setOpen={setOpenCart}
/>
    </nav>
    
  );
};

export default Navbar;
