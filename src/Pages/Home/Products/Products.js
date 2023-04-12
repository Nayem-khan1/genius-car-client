import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProducctCard/ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-xl font-bold text-[#FF3811] mb-5">
          Popular Products
        </h3>
        <h1 className="text-4xl font-bold mb-8">Browse Our Products</h1>
        <p className=" text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {data.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
