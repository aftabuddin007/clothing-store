"use client"
import React, { useState, useEffect } from 'react'; // Added useEffect
import products from "@/data/products.json";
import ProductCard from '@/components/card/ProductCard';
import Loading from './Loading';

const ProductSection = () => {
  const [loading, setLoading] = useState(true);
  const featuredProducts = products.slice(0, 8); 

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white text-neutral-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        
        {/* Keeping the header visible looks more polished during loading states */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-3">
            Curated Selection
          </p>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-neutral-900">
            Featured Products
          </h2>
        </div>

        {/* Dynamic content swap */}
        {loading ? (
          // Centered wrapper for your custom spinner to prevent footer jump shifts
          <div className="flex justify-center items-center min-h-[400px] w-full">
            <Loading />
          </div>
        ) : (
          /* Clean Responsive Grid - Spaced for luxury display */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featuredProducts.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductSection;