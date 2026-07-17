"use client";

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage
    useEffect(() => {
        const cart = localStorage.getItem("cartItems");

        if (cart) {
            setCartItems(JSON.parse(cart));
        }

        setIsMounted(true);
    }, []);

    // Save cart to localStorage
    useEffect(() => {
        if (!isMounted) return;

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems, isMounted]);

    // Add Product
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item
                );
            }

            return [
                ...prevItems,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
        toast.success("Product Add To Cart Successfully")
    };

    // Increase Quantity
    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease Quantity
    const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // Remove Item
    const removeItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
toast.error("Product Remove To Cart")
    };

    // Clear Cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Totals
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }

    return context;
};