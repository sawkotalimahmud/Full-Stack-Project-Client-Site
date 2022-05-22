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
          <Route
            path="/purchase"
            element={
              <PrivateRoute>
                <Purchase></Purchase>
              </PrivateRoute>
            }
          ></Route>
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
