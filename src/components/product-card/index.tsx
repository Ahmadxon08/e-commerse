/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type";
import React from "react";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex flex-col w-[228px] h-[313px] border rounded-xl border-gray-100 ">
      <div className="flex items-center pl-[30px] w-full relative py-3 rounded-xl bg-gray-100">
        <img
          src={product.thumbnail}
          alt="by this you find some kind of things like belong to that image"
          className="w-[90%] h-[144px] object-cover"
        />
        <MdFavoriteBorder
          size={32}
          className="absolute top-4 cursor-pointer right-4 text-gray-300"
        />
        <span className="absolute bottom-3 left-3 bg-red-500 px-2  rounded-2xl text-white font-semibold">
            {Math.round(product.discountPercentage)}%
        </span>
      </div>
      <p> {product.title}</p>
      <p className="line-through text-gray-400 text-sm p-1 tracking-wider"> {product.price}$</p>
      <p className="text-md text-red-400 font-bold tracking-widest">

        {(product.price - (product.price * product.discountPercentage)/100).toFixed(2)}$
      </p>
      <button className="bg-yellow-500 mt-1 w-[130px] py-1 px-1 rounded-md gap-3 flex items-center justify-center font-semibold text-black">
      <MdOutlineShoppingCart color="black" size={22} />
      Savatga
      </button>
    </div>
  );
};

export default ProductCard;
