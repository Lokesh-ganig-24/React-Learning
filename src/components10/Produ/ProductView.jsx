import React from "react";
import ProductCard from "./ProductCard";
import { products } from "./product";

const ProductView = () => {
  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductView;
