"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  // add product

const addToCart = (product) => {

    const exist = cartItems.find(
        (item) => item.id === product.id
    );

    if (exist) {

        setCartItems(
            cartItems.map((item) =>
                item.id === product.id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item
            )
        );

    } else {

        setCartItems([
            ...cartItems,
            {
                ...product,
                quantity: 1,
            },
        ]);

    }

};


  // increase quantity

  const increaseQuantity = (id) => {

    setCartItems(
        cartItems.map((item) =>
            item.id === id
                ? {
                      ...item,
                      quantity: item.quantity + 1,
                  }
                : item
        )
    );

};


  // decrease quantity

 const decreaseQuantity = (id) => {

    setCartItems(
        cartItems
            .map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                      }
                    : item
            )
            .filter((item) => item.quantity > 0)
    );

};


  // remove item

  const removeItem = (id) => {

    setCartItems(
        cartItems.filter(
            (item) => item.id !== id
        )
    );

};


  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >

      {children}

    </CartContext.Provider>

  );

};


export const useCart = () => {

  return useContext(CartContext);

};