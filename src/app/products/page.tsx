/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Loading from "@/components/loader";
import ProductCard from "@/components/product-card";
import useProductStore from "@/store/product/product";
import { ProductType } from "@/types/product.type";
import React, { useEffect } from "react";

const Products = () => {
  const { loading, products, error, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex container max-w-7xl mx-auto pt-[85px] flex-col">
      <div className="flex items-center mb-[30px] gap-3">
          <span className="text-[22px] font-semibold ">
            Mahsulotlar 🔥🔥🔥
          </span>
        </div>
      {loading && <Loading />}
      {error && <h1>{error}</h1>}
      {products.length > 0 ? (
        <div className="flex justify-between flex-wrap gap-4 items-center">
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

export default Products;
