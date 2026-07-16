"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
   const { addToCart } = useCart();
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
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Product Image */}

      <div className="relative overflow-hidden">

        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Category Badge */}

        <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1 text-xs font-semibold text-[#14532D] shadow-md">
          {category}
        </span>

        {/* Stock Badge */}

        <span
          className={`absolute right-4 top-4 rounded-full px-4 py-1 text-xs font-semibold shadow-md ${
            inStock
              ? "bg-[#FBBF24] text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {inStock ? "Available" : "Sold Out"}
        </span>

        {/* Quick View Overlay */}

        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100">

          <Link
            href={`/products/${id}`}
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#14532D] shadow-lg transition hover:scale-105"
          >
            Quick View
          </Link>

        </div>
      </div>

      {/* Product Info */}

      <div className="space-y-4 p-6">

        {/* Name */}

        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {name}
        </h2>

        {/* Rating */}

        <div className="flex items-center font-bold gap-2">

          <FaStar className="text-[#FBBF24]" />

          <span className="text-sm  font-bold  text-gray-600">
            {rating} / 5 (123 review)
          </span>

        </div>

        {/* Price */}

        <h3 className="text-3xl font-bold text-[#14532D]">
          ৳ {price}
        </h3>

        {/* Bottom Section */}

        <div className="flex items-center justify-between pt-2">

          <Link
            href={`/products/${id}`}
            className="font-semibold text-[#14532D] transition hover:text-[#0d3b20]"
          >
            View Details →
          </Link>

          <button
           onClick={() => addToCart(product)}
            disabled={!inStock}
            className={`rounded-full p-4 shadow-sm transition duration-300 ${
              inStock
                ? "bg-[#14532D] text-white hover:scale-105 hover:bg-[#0d3b20]"
                : "cursor-not-allowed bg-gray-300 text-white"
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