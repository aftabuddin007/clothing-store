"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaStar, FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const { id, name, category, image, price, rating, reviewCount = 124, inStock } = product;

  const handleAddToCart = () => {
    if (!inStock) return;
    addToCart(product);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-sm border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

      {/* ── Image area ── */}
      <div className="relative overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className={`h-72 w-full object-cover transition duration-700 group-hover:scale-105 ${
            !inStock ? "opacity-60 grayscale" : ""
          }`}
        />

        {/* Category badge — top left */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#14532D] backdrop-blur-sm shadow-sm">
          {category}
        </span>

        {/* Stock badge — top right */}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide shadow-sm ${
            inStock
              ? "bg-[#FBBF24] text-[#78350F]"
              : "bg-gray-800 text-white"
          }`}
        >
          {inStock ? "In Stock" : "Sold Out"}
        </span>

        {/* Wishlist button — fades in on hover */}
        <button
          onClick={() => setWishlisted((w) => !w)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110"
        >
          {wishlisted ? (
            <FaHeart className="text-red-500 text-sm" />
          ) : (
            <FaRegHeart className="text-gray-400 text-sm" />
          )}
        </button>

        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <Link
            href={`/products/${id}`}
            className="translate-y-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#14532D] shadow-lg transition-all duration-300 group-hover:translate-y-0 hover:bg-[#14532D] hover:text-white"
          >
            Quick View
          </Link>
        </div>
      </div>

      {/* ── Product info ── */}
      <div className="flex flex-1 flex-col gap-3 p-5">

        {/* Name */}
        <h2 className="line-clamp-1 text-base font-semibold text-gray-900 leading-snug">
          {name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <FaStar className="text-[#FBBF24] text-xs" />
          <span className="text-sm font-semibold text-gray-800">{rating}</span>
          <span className="text-sm text-gray-400">/ 5</span>
          <span className="text-xs text-gray-400">({reviewCount} reviews)</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-[#14532D] tracking-tight">
          ৳{price.toLocaleString()}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Link
            href={`/products/${id}`}
            className="text-sm font-medium text-[#14532D] underline-offset-2 transition hover:underline hover:text-[#0d3b20]"
          >
            View Details →
          </Link>

          {inStock ? (
            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-all duration-300 cursor-pointer ${
                addedFeedback
                  ? "bg-green-600 text-white scale-95"
                  : "bg-[#14532D] text-white hover:bg-[#0d3b20] hover:scale-105"
              }`}
            >
              <FaShoppingCart className="text-xs" />
              {addedFeedback ? "Added!" : "Add to Cart"}
            </button>
          ) : (
            <span className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">
              Sold Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;