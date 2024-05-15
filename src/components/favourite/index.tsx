/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type";
import React from "react";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

const ProductLike = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex flex-col w-[228px] h-[313px] border rounded-xl border-gray-100 ">
      <div className="flex items-center pl-[30px] w-full relative py-3 rounded-xl bg-gray-100">
        <img
          src={product?.image}
          alt="by this you find some kind of things like belong to that image"
          className="w-[90%] h-[144px] object-cover"
        />
        <MdFavoriteBorder
          size={32}
          className="absolute top-4 cursor-pointer right-4 text-gray-300"
        />
      </div>
      <div className="flex p-2 flex-col">
        <p> {product.title.slice(0, 16)}..</p>
        <p className=" text-gray-400 text-sm p-1 tracking-wider">
          {" "}
          {product.price}$
        </p>
        <p className="text-md text-gray-600 font-bold tracking-widest">
          {product.category}
        </p>
        <button className="bg-yellow-500 mt-1 w-[130px] py-1 px-1 rounded-md gap-3 flex items-center justify-center font-semibold text-black">
          <MdOutlineShoppingCart color="black" size={22} />
          Savatga
        </button>
      </div>
    </div>
  );
};

export default ProductLike;
