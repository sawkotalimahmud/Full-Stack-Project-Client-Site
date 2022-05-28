import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [user, loading] = useAuthState(auth);

  const {
    _id,
    name,
    image,
    description,
    min_order_quantity,
    available_quantity,
    per_unit_price,
  } = product;

  useEffect(() => {
    const url = `https://fathomless-coast-67251.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleBuyNow = (event) => {
    event.preventDefault();
    const ordersCollection = {
      ordererName: user.displayName,
      ordererEmail: user.email,
      productName: name,
      address: event.target.address.value,
      phone: event.target.phone.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };

    fetch("https://fathomless-coast-67251.herokuapp.com/orders", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(ordersCollection),
    })
      .then((Response) => Response.json())
      .then((Data) => {
        if(data.success){
          toast('Order Success')
        }
        event.target.reset();
      });
  };

  return (
    <div>
      <div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 my-28 ">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Product Name: {name}</h2>
              <p>Description: {description}</p>
              <p>Min Order Quantity: {min_order_quantity}</p>
              <p>Available Quantity: {available_quantity}</p>
              <p>Price (Per Unit): {per_unit_price}</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleBuyNow}>
              <input
                type="text"
                disabled
                value={user?.displayName}
                className="input input-bordered w-full max-w-auto gap-4 mt-3"
              />
              <input
                type="text"
                disabled
                value={user?.email || ""}
                className="input input-bordered w-full max-w-auto gap-4 mt-3"
              />
              <input
              required
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-auto gap-4 mt-3"
              />
              <input
              required
                type="text"
                name="address"
                placeholder="address"
                className="input input-bordered w-full max-w-auto gap-4 mt-3"
              />
              <input
              required
                type="text"
                name="price"
                placeholder="price"
                className="input input-bordered w-full max-w-auto gap-4 mt-3"
              />
              <input
              required
                type="text"
                name="quantity"
                placeholder="order quantity"
                className="input input-bordered w-full max-w-auto gap-4 mt-3"
              />

              <input
                type="submit"
                value="submit"
                className="btn btn-primary w-full max-w-auto gap-4 mt-3"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
