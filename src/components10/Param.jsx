import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./product";

function Param() {
  const { prodId } = useParams();
  console.log("hello", prodId);

  console.log("data",products);
  let filterdData = products.filter((value) => value.id == prodId);
  console.log("filtered data",filterdData);
  
  return (
    <div>
      {filterdData.map((product) => {
        return (
          <>
            <h1>Product is : {product.title}</h1>
            <img src={product.image} />
          </>
        );
      })}
    </div>
  );
}

export default Param;