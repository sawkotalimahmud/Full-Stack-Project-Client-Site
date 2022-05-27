import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import PrivateRoute from "./Authentication/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import SignUp from "./Pages/Login/SignUp";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReview from "./Pages/Dashboard/MyReview";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import UserOrders from "./Pages/Dashboard/UserOrders";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route
            path="/products/:productId"
            element={
              <PrivateRoute>
                <Purchase></Purchase>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }>
              <Route path="allOrder" element={<MyOrder></MyOrder>}></Route>
              <Route path="order" element={<UserOrders></UserOrders>}></Route>
              <Route index element={<MyProfile></MyProfile>}></Route>
              <Route path="review" element={<MyReview></MyReview>}></Route>
              <Route path="users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
              <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
              <Route path="manageProduct" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          </Route>
        </Routes>
        <Footer />
      </Navbar>
      <ToastContainer/>
    </div>
  );
}

export default App;
