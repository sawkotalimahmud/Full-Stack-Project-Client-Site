import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const {
    name,
    image,
    description,
    min_order_quantity,
    available_quantity,
    per_unit_price,
  } = product;

  useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src={image}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            <p>{description}</p>
            <p>Minimum order quantity: {min_order_quantity}</p>
            <p>Available quantity: {available_quantity}</p>
            <p>Price (Per Unit): ${per_unit_price}</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
