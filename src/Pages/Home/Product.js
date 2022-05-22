import React from "react";

const Product = ({product}) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={product.image}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p>Minimum order quantity: {product.min_order_quantity}</p>
        <p>Available quantity: {product.available_quantity}</p>
        <p>Price (Pre Unit): ${product.per_unit_price}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
