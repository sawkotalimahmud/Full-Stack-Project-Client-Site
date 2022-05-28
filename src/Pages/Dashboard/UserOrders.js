import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://fathomless-coast-67251.herokuapp.com/orders/${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  console.log(orders);
  return (
    <div>
      <h2>My Orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{o.productName}</td>
                <td>{o.price}</td>
                <td>{o.quantity}</td>
                <td>{o.address}</td>
                <td>
                  {o.price && !o.paid && (
                    <Link to={`/dashboard/payment/${o._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {o.price && o.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{o.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrders;
