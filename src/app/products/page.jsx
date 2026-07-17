"use client";

import { useState, useEffect } from "react";
import products from "@/data/products.json";
import ProductCard from "@/components/card/ProductCard";
import Loading from "@/components/Loading";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  // Remove duplicate categories cleanly
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
    filteredProducts.sort((a, b) => {
      const priceA = parseFloat(a.price.toString().replace(/[^0-9.]/g, ''));
      const priceB = parseFloat(b.price.toString().replace(/[^0-9.]/g, ''));
      return priceA - priceB;
    });
  } else if (sortOption === "highToLow") {
    filteredProducts.sort((a, b) => {
      const priceA = parseFloat(a.price.toString().replace(/[^0-9.]/g, ''));
      const priceB = parseFloat(b.price.toString().replace(/[^0-9.]/g, ''));
      return priceB - priceA;
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Clean 1.2s simulated load time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 py-24 w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 sm:px-16 lg:px-24">

        {/* --- Heading Area --- */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-3">
            Aram Catalog
          </p>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-neutral-900 uppercase">
            All Products
          </h2>
        </div>

        {/* --- Filter & Search Controls Container --- */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-neutral-100 pb-8">

          {/* Minimalist Search Input */}
          <input
            type="text"
            placeholder="Search our wardrobe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:max-w-md bg-[#FAFAFA] border border-neutral-200 rounded-none px-5 py-3.5 text-sm font-light text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-900 focus:bg-white transition-all duration-300"
          />

          {/* Minimalist Sort Dropdown */}
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full md:w-52 appearance-none bg-white border border-neutral-200 rounded-none px-5 py-3.5 text-xs uppercase tracking-wider font-medium text-neutral-700 outline-none focus:border-neutral-900 transition-all cursor-pointer pr-10"
            >
              <option value="">Sort By Price</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
            {/* Custom elegant arrow indicator for the unstyled select element */}
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

        </div>

        {/* --- Category Selector Bar --- */}
        <div className="mb-12 flex gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-neutral-100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap text-xs uppercase tracking-[0.2em] px-6 py-3 font-medium transition-all duration-300 rounded-none cursor-pointer ${
                selectedCategory === category
                  ? "bg-neutral-900 text-white border border-neutral-900"
                  : "bg-transparent text-neutral-400 border border-transparent hover:text-neutral-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Products Dynamic Layout Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="font-serif text-xl text-neutral-400 italic">
                No items match your criteria.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Product;