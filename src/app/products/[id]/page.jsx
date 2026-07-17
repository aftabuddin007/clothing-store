import products from "@/data/products.json";
import Image from "next/image";
import { FaShoppingCart, FaStar, FaShippingFast, FaMoneyBillWave, FaUndo, FaCheckCircle } from "react-icons/fa";
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
    name,
    category,
    image,
    price,
    rating,
    colors,
    sizes,
    inStock,
    description,
  } = product;

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white antialiased">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        
        {/* --- Breadcrumb --- */}
        <nav className="mb-8 text-xs font-medium tracking-wider uppercase text-zinc-500">
          <span className="hover:text-zinc-300 transition-colors cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-zinc-300 transition-colors cursor-pointer">Products</span>
          <span className="mx-2">/</span>
          <span className="text-[#14532D] font-semibold tracking-normal normal-case">
            {name}
          </span>
        </nav>

        {/* --- Main Product Workspace --- */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* LEFT SIDE: Media Gallery Container */}
          <div className="lg:sticky lg:top-8 rounded-3xl bg-zinc-900/40 p-2 border border-zinc-800/50 backdrop-blur-sm overflow-hidden">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-800">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-w: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority={true} // Crucial LCP optimization for performance
              />
            </div>
          </div>

          {/* RIGHT SIDE: Product Architecture Information */}
          <div className="flex flex-col">
            
            {/* Category & Inventory Badges */}
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-[#14532D]/20 border border-[#14532D]/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                {category}
              </span>
              <span className={`rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider ${
                inStock 
                  ? "bg-emerald-950/40 text-emerald-400 border border-emerald-800/30" 
                  : "bg-rose-950/40 text-rose-400 border border-rose-800/30"
              }`}>
                {inStock ? "In Stock" : "Out Of Stock"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {name}
            </h1>

            {/* Social Proof / Ratings */}
            <div className="mt-4 flex items-center gap-3 border-b border-zinc-800 pb-6">
              <div className="flex items-center gap-1 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                <FaStar className="text-amber-400 text-sm" />
                <span className="text-sm font-bold text-zinc-200">{rating}</span>
              </div>
              <span className="text-sm text-zinc-400 font-medium">
                (128 Verified Reviews)
              </span>
            </div>

            {/* Premium Pricing Engine */}
            <div className="mt-6 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-5">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-white">
                  ৳{price.toLocaleString()}
                </span>
              </div>
              <p className="mt-1 text-xs tracking-wide uppercase font-semibold text-emerald-500/90">
                Inclusive of all regional fulfillment taxes
              </p>
            </div>

            {/* Editor's Editorial Description */}
            <div className="mt-8">
              <h3 className="sr-only">Description</h3>
              <p className="text-base leading-relaxed text-zinc-300">
                {description}
              </p>
            </div>

            {/* Interactive Section: Custom Colors */}
            <div className="mt-8 border-t border-zinc-800 pt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Select Colorway
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className="rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-2 text-sm font-medium text-zinc-200 transition-all hover:border-[#14532D] hover:bg-[#14532D]/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Section: Custom Sizes */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                  Select Measurement
                </h3>
                <button className="text-xs font-semibold text-emerald-400 underline decoration-emerald-400/30 hover:text-emerald-300">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className="min-w-[54px] rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-center text-sm font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Commitments Matrix */}
            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5 space-y-3.5">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <FaShippingFast className="text-[#14532D] text-lg shrink-0" />
                <span>Complimentary premium nationwide delivery</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <FaMoneyBillWave className="text-[#14532D] text-lg shrink-0" />
                <span>Secure Cash On Delivery options supported</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <FaUndo className="text-[#14532D] text-lg shrink-0" />
                <span>7-Day seamless boutique returns guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <FaCheckCircle className="text-[#14532D] text-lg shrink-0" />
                <span>Guaranteed 100% authentic designer merchandise</span>
              </div>
            </div>

            {/* Transaction Execution Triggers */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button 
                disabled={!inStock}
                className="flex-1 rounded-xl  cursor-pointer bg-[#14532D] py-4 text-center text-sm font-bold tracking-wider uppercase text-white shadow-lg transition-all hover:bg-[#1b6639] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
              >
                Express Checkout
              </button>
              <div className="flex-1">
                <AddToCartButton product={product} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;