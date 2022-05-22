import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({product}) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product.image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p>Minimum order quantity: {product.min_order_quantity}</p>
        <p>Available quantity: {product.available_quantity}</p>
        <p>Price (Pre Unit): ${product.per_unit_price}</p>
        <div className="card-actions">
          <button className="btn btn-primary"><NavLink to={"/purchase"} className="rounded-lg">
              Purchase Now
            </NavLink></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
