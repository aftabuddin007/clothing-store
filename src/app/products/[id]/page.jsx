// ""

import products from "@/data/products.json";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { notFound } from "next/navigation";

const ProductDetails =async ({ params }) => {
   const { id } = await params;



  const {
    
    name,
    category,
    image,
    price,
    rating,
    colors,
    sizes,
    inStock,
    description,
  } = products.find((product) => product.id === parseInt(id)) || {};

  return (
<>

<div className="min-h-screen  py-14">

      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">

        {/* Left Side */}

        <div>
          <Image
            src={image}
            alt={name}
            width={700}
            height={700}
            className="rounded-3xl object-cover shadow-xl"
          />
        </div>

        {/* Right Side */}

        <div className="flex flex-col justify-center">

          <span className="w-fit rounded-full bg-[#14532D] px-4 py-2 text-sm font-semibold text-white">
            {category}
          </span>

          <h1 className="mt-4 text-5xl font-bold text-[#14532D]">
            {name}
          </h1>

          {/* Rating */}

          <div className="mt-4 flex items-center gap-2">
            <FaStar className="text-[#FBBF24]" />
            <span className="text-lg font-medium">
              {rating}
            </span>
          </div>

          {/* Price */}

          <h2 className="mt-5 text-4xl font-bold text-[#14532D]">
            ৳ {price}
          </h2>

          {/* Description */}

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            {description}
          </p>

          {/* Colors */}

          <div className="mt-8">
            <h3 className="mb-3 text-xl font-semibold text-[#14532D]">
              Available Colors
            </h3>

            <div className="flex gap-3">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[#14532D] px-4 py-2"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Sizes */}

          <div className="mt-8">
            <h3 className="mb-3 text-xl font-semibold text-[#14532D]">
              Available Sizes
            </h3>

            <div className="flex gap-3">
              {sizes.map((size, index) => (
                <span
                  key={index}
                  className="rounded-xl border border-[#14532D] px-4 py-2"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Stock */}

          <div className="mt-8">
            <span
              className={`rounded-full px-5 py-2 font-semibold ${
                inStock
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {inStock ? "In Stock" : "Out Of Stock"}
            </span>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex gap-4">

            <button className="rounded-xl bg-[#14532D] px-8 py-4 font-semibold text-white transition hover:brightness-110">
              Buy Now
            </button>

            <button
              disabled={!inStock}
              className="flex items-center gap-2 rounded-xl bg-[#FBBF24] px-8 py-4 font-semibold text-black transition hover:brightness-95"
            >
              <FaShoppingCart />
              Add To Cart
            </button>

          </div>

        </div>
      </div>
    </div>

</>

    
  );
};

export default ProductDetails;