"use client";

import { useCart } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const AddToCartButton = ({ product }) => {

    const { addToCart } = useCart();

    return (
        <button
            onClick={() => addToCart(product)}
            className="flex flex-1 items-center justify-center gap-2 cursor-pointer rounded-xl border-2 border-[#14532D] py-4 font-semibold text-[#14532D]"
        >
            <FaShoppingCart />

            Add To Cart
        </button>
    );
};

export default AddToCartButton;