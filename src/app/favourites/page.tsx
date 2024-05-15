/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ProductLike from "@/components/favourite";
// import Loading from "@/components/loader";
import ProductCard from "@/components/product-card";
import useProductLikeStore from "@/store/product/favourite";
// import useProductStore from "@/store/product/product";
// import { ProductType } from "@/types/product.type";
import React, { useEffect } from "react";

const ProductsFavourite = () => {
  const {  products,  fetchThird } = useProductLikeStore();
  useEffect(() => {
    fetchThird();
  }, []);
  return (
    <div className="flex container max-w-7xl mx-auto  wrap">
      {/* {loading && <Loading />} */}
      {/* {error && <h1>{error}</h1>} */}
      {products  && (
        <div className="flex justify-between flex-wrap gap-4 items-center">
          {products.map((product: any) => (
            <ProductLike product={product} key={product.id} />
          ))}
        </div>
      ) }
    </div>
  );
};

export default ProductsFavourite;
