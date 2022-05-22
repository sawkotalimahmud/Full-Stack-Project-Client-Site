import React from "react";
import Banner from "./Banner";
import BestSellingProducts from "./BestSellingProducts";
import BusinessSummary from "./BusinessSummary";
import FirstBanner from "./FirstBanner";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <BestSellingProducts></BestSellingProducts>
      <FirstBanner></FirstBanner>
    </div>
  );
};

export default Home;
