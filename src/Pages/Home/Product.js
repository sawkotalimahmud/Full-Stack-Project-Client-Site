import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({product}) => {

  const  {_id, name, image, description, min_order_quantity, available_quantity, per_unit_price} = product;
  const navigate = useNavigate();

  const navigateProductDetail = id => {
    navigate(`/products/${_id}`);
  }

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Minimum order quantity: {min_order_quantity}</p>
        <p>Available quantity: {available_quantity}</p>
        <p>Price (Pre Unit): ${per_unit_price}</p>
        <div className="card-actions">
          <button onClick={() => navigateProductDetail(_id)} className="btn btn-primary rounded-lg">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
