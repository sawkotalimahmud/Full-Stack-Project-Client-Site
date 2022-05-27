import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl font-bold text-center">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          <li>
              <Link to="/dashboard/order">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Review</Link>
          </li>
          <li>
            <Link to="/dashboard/users">All Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
