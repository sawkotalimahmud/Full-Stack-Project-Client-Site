import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://fathomless-coast-67251.herokuapp.com/orders/${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  console.log(user);
  return (
    <div>
      <h2>My Profile</h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 my-28 ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src='' alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Product Name: </h2>
            <p>Description: </p>
            <p>Min Order Quantity: </p>
            <p>Available Quantity: </p>
            <p>Price (Per Unit): </p>
          </div>
        </div>

        <div>
          <form>
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
              type="submit"
              value="submit"
              className="btn btn-primary w-full max-w-auto gap-4 mt-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
