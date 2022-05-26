import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
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
              <Route path="order" element={<MyOrder></MyOrder>}></Route>
              <Route path="profile" element={<MyProfile></MyProfile>}></Route>
              <Route path="review" element={<MyReview></MyReview>}></Route>
          </Route>
        </Routes>
        <Footer />
      </Navbar>
      <ToastContainer/>
    </div>
  );
}

export default App;
