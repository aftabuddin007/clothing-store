"use client";

import { useState,useEffect } from "react";
import products from "@/data/products.json";
import ProductCard from "@/components/card/ProductCard";
import Loading from "@/components/Loading";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
const [loading, setLoading] = useState(true);
  // Remove duplicate categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products by category and search
  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // Sort products by price
  if (sortOption === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);
if(loading){
  return <Loading></Loading>
}
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <h2 className="mb-8 text-center text-5xl font-bold">
          All Products
        </h2>

        {/* Search + Sort */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#14532D] md:w-1/2"
          />

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-lg border text-gray-500 border-gray-300 px-4 py-3 outline-none focus:border-[#14532D]"
          >
            <option value="">Sort By Price</option>
            <option value="lowToHigh">
              Price: Low to High
            </option>
            <option value="highToLow">
              Price: High to Low
            </option>
          </select>

        </div>

        {/* Category Buttons */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`whitespace-nowrap rounded-full border cursor-pointer px-4 py-3 font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#14532D] text-white border-[#14532D]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#14532D] hover:text-[#14532D]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-500">
              No products found.
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default Product;