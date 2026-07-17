"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";

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
    <div className="group relative flex flex-col bg-white border border-neutral-100 rounded-none transition-all duration-300 hover:border-neutral-300">

      {/* ── Lookbook Portrait Media Crop Area ── */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50 rounded-none">
        <Link href={`/products/${id}`} className="block w-full h-full">
          <Image
            src={image}
            alt={name}
            width={400}
            height={533} // Crisp 3:4 portrait optimization
            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-102 ${
              !inStock ? "opacity-50 grayscale" : ""
            }`}
          />
        </Link>

        {/* Minimalist Top-Left Category Tag */}
        <span className="absolute left-4 top-4 bg-white/90 border border-neutral-200/60 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-800 rounded-none backdrop-blur-xs shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          {category}
        </span>

        {/* Minimalist Absolute Stock Shield */}
        {!inStock && (
          <span className="absolute right-4 top-4 bg-neutral-950 text-white px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.15em] rounded-none">
            Sold Out
          </span>
        )}

        {/* Wishlist Toggle Action Pin */}
        <button
          onClick={() => setWishlisted((w) => !w)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center bg-white/90 border border-neutral-200/60 rounded-none text-neutral-400 transition-colors hover:text-neutral-950 cursor-pointer backdrop-blur-xs"
        >
          {wishlisted ? (
            <FaHeart className="text-neutral-950 text-xs" />
          ) : (
            <FaRegHeart className="text-neutral-400 text-xs" />
          )}
        </button>

        {/* Lookbook Sliding Quick View Tray */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center bg-white/90 py-3.5 backdrop-blur-xs transition-transform duration-300 group-hover:translate-y-0 border-t border-neutral-200/50">
          <Link
            href={`/products/${id}`}
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Quick View
          </Link>
        </div>
      </div>

      {/* ── Product Meta Details ── */}
      <div className="flex flex-1 flex-col p-4 bg-white">

        {/* Product Identity */}
        <h2 className="text-sm font-light tracking-wide text-neutral-800 line-clamp-1 mb-1 transition-colors group-hover:text-black">
          <Link href={`/products/${id}`}>{name}</Link>
        </h2>

        {/* Clean Rating Meta Row */}
        <div className="flex items-center gap-1.5 mb-2">
          <FaStar className="text-neutral-950 text-[10px]" />
          <span className="text-[11px] font-medium text-neutral-800">{rating}</span>
          <span className="text-[11px] text-neutral-200">|</span>
          <span className="text-[10px] text-neutral-400 font-light tracking-wide">({reviewCount})</span>
        </div>

        {/* Pricing Anchor */}
        <p className="text-sm font-medium text-neutral-950 tracking-wide mb-4">
          ৳{price.toLocaleString()}
        </p>

        
        <div className="mt-auto pt-2">
          {inStock ? (
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 text-[10px] font-semibold uppercase tracking-[0.15em] border transition-all duration-300 cursor-pointer rounded-none ${
                addedFeedback
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-900 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-950 hover:text-white"
              }`}
            >
              {addedFeedback ? "Item Added" : "Add To Cart"}
            </button>
          ) : (
            <button
              disabled
              className="w-full py-3 text-[10px] font-semibold uppercase tracking-[0.15em] border border-neutral-100 bg-neutral-50 text-neutral-400 cursor-not-allowed rounded-none text-center"
            >
              Out of Stock
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductCard;