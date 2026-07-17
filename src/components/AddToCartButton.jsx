"use client";

import { useCart } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const AddToCartButton = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <button
            disabled={!product.inStock}
            onClick={() => addToCart(product)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 py-6 px-3 font-semibold transition-all ${
                product.inStock
                    ? "cursor-pointer border-[#14532D] text-[#14532D] hover:bg-[#0c111a] hover:text-white"
                    : "cursor-not-allowed border-zinc-700 text-zinc-500 opacity-50"
            }`}
        >
            <FaShoppingCart />

            {product.inStock ? "Add To Cart" : "Out Of Stock"}
        </button>
    );
};

export default AddToCartButton;