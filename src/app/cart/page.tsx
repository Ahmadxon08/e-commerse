/* eslint-disable @next/next/no-img-element */
"use client";
import { useContext } from "react";
import { CartContext } from "../context";
import { CartStoreType, CartType } from "@/types/cart.type";
import { MdFavoriteBorder } from "react-icons/md";

const CartPage = () => {
  const { cartItems, handleRemoveFromCart } = useContext<CartStoreType | any>(
    CartContext
  );


  
  console.log(cartItems);
  return (
    <div className="flex max-w-7xl mx-auto pt-[100px]">
      <div className="flex flex-col gap-[30px] w-full ">
        {cartItems.length > 0 ? (
          cartItems.map((item: CartType) => (
            <div className="flex w-[50%] border-b gap-2 " key={item.id}>
              <img
                src={item.thumbnail}
                alt="this is cart"
                className="flex w-[100px] h-[120px]"
              />
              <div className="flex items-start flex-col  p-2">
                <span className="flex text-[18px]">{item.title}</span>
                <span className="flex text-[18px]">{item.brand}</span>
                <span className="flex text-[18px]">{item.price}$</span>
                <span className="flex text-[18px]">{item.description}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="flex bg-red-400 px-2 rounded items-end relative right-0 justify-end"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center text-[33px] text-blue-400 font-bold">
            <MdFavoriteBorder />
            <span>Cart is empty</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
