import products from "@/data/products.json";
import Image from "next/image";
import { FaStar, FaShippingFast, FaMoneyBillWave, FaUndo, FaCheckCircle } from "react-icons/fa";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return notFound();
  }

  const {
    name,category,image,price,rating, colors,sizes, inStock, description,} = product;

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        
        {/* --- Breadcrumb --- */}
        <nav className="mb-10 text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-400">
          <span className="hover:text-black transition-colors cursor-pointer">Home</span>
          <span className="mx-2.5 text-neutral-300">/</span>
          <span className="hover:text-black transition-colors cursor-pointer">Catalog</span>
          <span className="mx-2.5 text-neutral-300">/</span>
          <span className="text-neutral-900 tracking-normal normal-case font-light">
            {name}
          </span>
        </nav>

        {/* --- Main Product Workspace --- */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">

          {/* LEFT SIDE: Media Gallery Container (Occupies 7/12 cols for dramatic presentation) */}
          <div className="lg:col-span-7 lg:sticky lg:top-12 bg-[#FAFAFA] border border-neutral-100 rounded-none overflow-hidden">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-w: 768px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-102"
                priority={true}
              />
            </div>
          </div>

          {/* RIGHT SIDE: Product Architecture Information (Occupies 5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col lg:pl-4">
            
            {/* Minimalist Context Tags */}
            <div className="flex items-center gap-3 mb-5">
              <span className="border border-neutral-200 px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-medium text-neutral-500 rounded-none">
                {category}
              </span>
              <span className={`text-[10px] uppercase tracking-[0.15em] font-semibold ${
                inStock ? "text-neutral-900" : "text-neutral-400 line-through"
              }`}>
                {inStock ? "• Available" : "• Sold Out"}
              </span>
            </div>

            {/* Editorial Title */}
            <h1 className="text-3xl sm:text-4xl font-serif tracking-tight text-neutral-950 uppercase leading-tight">
              {name}
            </h1>

            {/* Ratings & Social Proof */}
            <div className="mt-4 flex items-center gap-2.5 border-b border-neutral-100 pb-6">
              <div className="flex items-center gap-1 text-neutral-950">
                <FaStar className="text-neutral-950 text-xs" />
                <span className="text-xs font-bold tracking-wider">{rating}</span>
              </div>
              <span className="text-neutral-300 text-xs">|</span>
              <span className="text-xs text-neutral-400 font-light tracking-wide">
                128 Curated Client Notes
              </span>
            </div>

            {/* Architectural Pricing Presentation */}
            <div className="mt-6 py-2">
              <span className="text-3xl font-serif font-light tracking-tight text-neutral-950">
                ৳{price.toLocaleString()}
              </span>
              <p className="mt-1.5 text-[10px] tracking-widest uppercase font-medium text-neutral-400">
                Local duties & fulfillment taxes calculated at checkout
              </p>
            </div>

            {/* Detailed Description */}
            <div className="mt-6 border-t border-neutral-100 pt-6">
              <p className="text-sm leading-relaxed font-light text-neutral-600 tracking-wide">
                {description}
              </p>
            </div>

            {/* Interactive Section: Custom Colors */}
            <div className="mt-8 border-t border-neutral-100 pt-6">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-3">
                Select Colorway
              </h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className="border border-neutral-200 bg-white px-4 py-2.5 text-xs tracking-wider uppercase font-medium text-neutral-800 transition-all rounded-none hover:border-black hover:text-black cursor-pointer active:bg-neutral-50"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Section: Custom Sizes */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                  Select Measurement
                </h3>
                <button className="text-[10px] uppercase tracking-widest font-medium text-neutral-400 underline underline-offset-4 decoration-neutral-200 hover:text-black transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className="min-w-[48px] border border-neutral-200 bg-white px-3 py-3 text-center text-xs font-semibold text-neutral-800 transition-all rounded-none hover:border-black hover:text-black cursor-pointer active:bg-neutral-50"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Commitments Grid */}
            <div className="mt-10 border border-neutral-100 bg-[#FAFAFA] p-6 space-y-4 rounded-none">
              <div className="flex items-start gap-3.5 text-xs text-neutral-600 font-light tracking-wide">
                <FaShippingFast className="text-neutral-950 text-sm mt-0.5 shrink-0" />
                <span>Complimentary premium nationwide logistics</span>
              </div>
              <div className="flex items-start gap-3.5 text-xs text-neutral-600 font-light tracking-wide">
                <FaMoneyBillWave className="text-neutral-950 text-sm mt-0.5 shrink-0" />
                <span>Secure Cash On Delivery framework supported</span>
              </div>
              <div className="flex items-start gap-3.5 text-xs text-neutral-600 font-light tracking-wide">
                <FaUndo className="text-neutral-950 text-sm mt-0.5 shrink-0" />
                <span>7-Day boutique collection return coverage</span>
              </div>
              <div className="flex items-start gap-3.5 text-xs text-neutral-600 font-light tracking-wide">
                <FaCheckCircle className="text-neutral-950 text-sm mt-0.5 shrink-0" />
                <span>Guaranteed 100% authentic dynamic design merchandise</span>
              </div>
            </div>

            {/* Transaction Execution Triggers */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button 
                disabled={!inStock}
                className="flex-1 bg-neutral-950 text-white py-4.5 text-center text-xs font-semibold tracking-[0.2em] uppercase rounded-none shadow-sm transition-colors hover:bg-neutral-800 cursor-pointer disabled:opacity-30 disabled:pointer-events-none active:scale-98"
              >
                Express Checkout
              </button>
              <div className="flex-1">
                <AddToCartButton product={product} disabled={!inStock} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;