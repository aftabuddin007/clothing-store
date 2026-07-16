import React from 'react';
import products from "@/data/products.json";
import ProductCard from '@/components/card/ProductCard';

const ProductSection = () => {
  const featuredProducts = products.slice(0, 8); 

  return (
    <div className="">
    <div className='max-w-7xl mx-auto py-20 '>
      <h2 className="font-bold text-center 
 text-4xl mb-10">Features Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductSection;