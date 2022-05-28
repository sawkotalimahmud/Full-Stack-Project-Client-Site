import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://fathomless-coast-67251.herokuapp.com/orders?orderer=${user.email}`)
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
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((o, index) =><tr>
                <th>{index + 1}</th>
                <th>{o.ordererName}</th>
                <td>{o.productName}</td>
                <td>{o.price}</td>
                <td>{o.quantity}</td>
                <td>{o.address}</td>
              </tr>)
        }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrder;
