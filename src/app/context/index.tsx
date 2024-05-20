// import { CartStoreType, CartType } from "@/types/cart.type";
"use client";

import { CartStoreType, CartType } from "@/types/cart.type";
import { createContext, useState } from "react";

interface GlobalContextProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartStoreType | undefined>(undefined);

const GlobalContext = ({ children }: GlobalContextProps) => {
  const [cartItems, setCart] = useState<CartType[]>([]);

  const handleAddToCart = (item: CartType) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log("Item added to cart:", item);
    console.log("Cart items:", cartItems);
  };

  

  const handleRemoveFromCart = (id: CartType | number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    console.log("Item removed from cart:", id);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, handleRemoveFromCart, handleAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default GlobalContext;
