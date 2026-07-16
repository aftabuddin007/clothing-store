"use client";

import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
const ProductCard = ({ product }) => {
  const {
    id,
    name,
    category,
    image,
    price,
    rating,
    inStock,
  } = product;

  return (
    <div className="group overflow-hidden rounded-2xl border border-[#14532D]/20 bg-[#FFFBEB] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-[#14532D] px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>

        {/* Stock */}
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            inStock
              ? "bg-[#FBBF24] text-black"
              : "bg-red-600 text-white"
          }`}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Name */}
        <h2 className="text-xl font-bold text-[#14532D]">
          {name}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <FaStar className="text-[#FBBF24]" />
          <span className="text-sm font-medium text-gray-700">
            {rating}
          </span>
        </div>

        {/* Price */}
        <h3 className="mt-3 text-2xl font-bold text-[#14532D]">
          ৳ {price}
        </h3>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">

          {/* View Details */}
          <Link
            href={`/products/${id}`}
            className="flex-1 rounded-xl border-2 border-[#14532D] py-2 text-center font-medium text-[#14532D] transition duration-300 hover:bg-[#14532D] hover:text-white"
          >
            View Details
          </Link>

          {/* Cart */}
          <button
            disabled={!inStock}
            className={`rounded-xl p-3 transition duration-300 ${
              inStock
                ? "bg-[#FBBF24] text-black hover:brightness-95"
                : "cursor-not-allowed bg-gray-400 text-white"
            }`}
          >
            <FaShoppingCart />
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;