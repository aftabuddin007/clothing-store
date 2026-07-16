import React from "react";
import products from "@/data/products.json";
import ProductCard from "@/components/card/ProductCard";

const Product = () => {
  const featuredProducts = products;

  return (
    <div className="min-h-screen  py-10">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="mb-12 text-center text-5xl font-bold ">
          Our Products
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Product;