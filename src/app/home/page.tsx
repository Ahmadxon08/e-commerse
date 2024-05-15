/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Loading from "@/components/loader";
import ProductCard from "@/components/product-card";
import useProductStore from "@/store/product/product";
import { ProductType } from "@/types/product.type";
import React, { useEffect } from "react";

const ProductHome = () => {
  const { loading, products, error, fetchSecondy } = useProductStore();
  useEffect(() => {
    fetchSecondy();
  }, []);
  return (
    <div className="flex container max-w-7xl mx-auto  wrap">
      {loading && <Loading />}
      {error && <h1>{error}</h1>}
      {products.length > 0 ? (
        <div className="flex justify-between flex-wrap gap-2 w-full items-center">
          {products.map((product: ProductType) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        !loading && <h1>No products</h1>
      )}
    </div>
  );
};

export default ProductHome;
