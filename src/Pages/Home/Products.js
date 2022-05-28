import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-coast-67251.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center uppercase font-bold my-20">
          Our Products
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-28">
        {products.map((product) => (
          <Product 
          key={product._id} 
          product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
