"use client";

import Image from "next/image";
import {
  FaTimes,
  FaTrashAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import { useCart } from "@/context/CartContext";

const CartModal = ({ open, setOpen }) => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  if (!open) return null;

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 120 : 0;

 

  const total = subtotal + shipping ;

  return (
    <div className="fixed inset-0 z-50">

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Drawer */}

      <div className="absolute right-0 top-0 flex h-screen w-full max-w-lg flex-col bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">

          <h2 className="text-3xl font-bold text-gray-800">
            Shopping Cart
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-xl text-gray-500 transition hover:text-red-500"
          >
            <FaTimes />
          </button>
        </div>

        {/* Empty State */}

        {cartItems.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">

            <div className="text-center">

              <h2 className="text-2xl font-semibold">
                Your Cart is Empty
              </h2>

              <p className="mt-2 text-gray-500">
                Add some amazing products.
              </p>

            </div>

          </div>
        ) : (
          <>
            {/* Products */}

            <div className="flex-1 overflow-y-auto px-6 py-5">

              <div className="space-y-6">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b pb-5"
                  >

                    <div className="flex gap-4">

                      {/* Image */}

                      <div className="overflow-hidden rounded-xl bg-gray-100">

                        <Image
                          src={item.image}
                          alt={item.name}
                          width={110}
                          height={110}
                          className="h-[110px] w-[110px] object-cover"
                        />

                      </div>

                      {/* Product Info */}

                      <div className="flex flex-1 flex-col justify-between">

                        <div>

                          <div className="flex items-start justify-between">

                            <h3 className="font-semibold text-gray-800">
                              {item.name}
                            </h3>

                            <h3 className="text-lg font-bold">
                              ৳ {item.price}
                            </h3>

                          </div>

                          <p className="mt-1 text-sm text-green-600">
                            In Stock
                          </p>

                        </div>

                        {/* Bottom */}

                        <div className="mt-3 flex items-center justify-between">

                          {/* Remove */}

                          <button
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-500"
                          >
                            <FaTrashAlt />
                            Remove
                          </button>

                          {/* Quantity */}

                          <div className="flex items-center overflow-hidden rounded-lg border">

                            <button
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="border-r p-3 hover:bg-gray-100"
                            >
                              <FaMinus size={12} />
                            </button>

                            <span className="px-5 font-semibold">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="border-l p-3 hover:bg-gray-100"
                            >
                              <FaPlus size={12} />
                            </button>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* Summary */}

            <div className="border-t px-6 py-6">

              <div className="space-y-3 text-gray-700">

                <div className="flex justify-between">

                  <p>Subtotal</p>

                  <p>৳ {subtotal}</p>

                </div>

                <div className="flex justify-between">

                  <p>Shipping</p>

                  <p>৳ {shipping}</p>

                </div>

              </div>

              {/* Total */}

              <div className="mt-5 flex items-center justify-between border-t pt-5">

                <h2 className="text-2xl font-bold">
                  Total
                </h2>

                <h2 className="text-2xl font-bold text-[#14532D]">
                  ৳ {total}
                </h2>

              </div>

              {/* Checkout */}

              <button
                className="mt-6 w-full rounded-xl bg-[#14532D] py-4 font-semibold text-white transition hover:brightness-110"
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