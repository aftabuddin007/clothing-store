"use client";

import Image from "next/image";
import {
  FaTimes,
  FaTrashAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

const CartModal = ({ open, setOpen }) => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  if (!open) return null;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 120 : 0;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">

      {/* Cinematic Overlay */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Structural Minimalist Drawer */}
      <div className="relative flex h-screen w-full max-w-md flex-col bg-white rounded-none shadow-2xl z-10 border-l border-neutral-100">

        {/* --- Header --- */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium mb-1">Your Wardrobe</span>
            <h2 className="text-2xl font-serif tracking-tight text-neutral-950">
              Shopping Bag
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-lg text-neutral-400 transition-colors hover:text-black cursor-pointer p-1"
          >
            <FaTimes strokeWidth={1} />
          </button>
        </div>

        {/* --- Empty State --- */}
        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center bg-[#FAFAFA]">
            <h2 className="font-serif text-xl tracking-tight text-neutral-800">
              Your Bag is Empty
            </h2>
            <p className="mt-2 text-xs text-neutral-400 max-w-xs font-light tracking-wide leading-relaxed">
              Curate your unique signature style by adding items from our new collections.
            </p>
          </div>
        ) : (
          <>
            {/* --- Product Scroll Feed --- */}
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="py-5 first:pt-2 last:pb-2"
                >
                  <div className="flex gap-4">

                    {/* Sharp Geometric Image Asset */}
                    <div className="overflow-hidden rounded-none bg-neutral-50 relative shrink-0 border border-neutral-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={125}
                        className="h-[110px] w-[90px] object-cover object-center rounded-none"
                      />
                    </div>

                    {/* Clean Meta Framing */}
                    <div className="flex flex-1 flex-col justify-between py-0.5">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-light tracking-wide text-neutral-800 leading-snug">
                            {item.name}
                          </h3>
                          <h3 className="text-sm font-medium text-neutral-950 whitespace-nowrap">
                            ৳ {item.price}
                          </h3>
                        </div>
                        <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                          In Stock
                        </p>
                      </div>

                      {/* Item Actions Block */}
                      <div className="mt-3 flex items-center justify-between">
                        
                        {/* Remove Action Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1.5 text-xs tracking-wider text-neutral-400 transition-colors cursor-pointer uppercase hover:text-red-600 font-medium"
                        >
                          <FaTrashAlt size={10} />
                          <span className="text-[10px]">Remove</span>
                        </button>

                        {/* Flat Quantity Controller Container */}
                        <div className="flex items-center border border-neutral-200 text-neutral-800 bg-[#FAFAFA] rounded-none">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="p-2.5 hover:bg-neutral-100 hover:text-black transition-colors cursor-pointer"
                          >
                            <FaMinus size={9} />
                          </button>

                          <span className="px-3 text-xs font-medium min-w-[24px] text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="p-2.5 hover:bg-neutral-100 hover:text-black transition-colors cursor-pointer"
                          >
                            <FaPlus size={9} />
                          </button>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* --- Checkout Summary Deck --- */}
            <div className="border-t border-neutral-100 bg-[#FAFAFA] px-6 py-6 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
              <div className="space-y-2.5 text-xs text-neutral-500 font-light tracking-wide">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="font-medium text-neutral-800">৳ {subtotal}</p>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-2.5">
                  <p>Shipping Est.</p>
                  <p className="font-medium text-neutral-800">৳ {shipping}</p>
                </div>
              </div>

              {/* Grand Total */}
              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-sm uppercase tracking-[0.15em] font-medium text-neutral-900">
                  Total Due
                </h2>
                <h2 className="text-xl font-serif font-medium text-neutral-950">
                  ৳ {total}
                </h2>
              </div>

              {/* Premium Block Action Key */}
              <button
                className="mt-6 w-full bg-neutral-950 text-white text-xs font-semibold uppercase tracking-[0.2em] py-4 rounded-none shadow-md transition-all duration-300 hover:bg-neutral-800 cursor-pointer active:scale-98"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;