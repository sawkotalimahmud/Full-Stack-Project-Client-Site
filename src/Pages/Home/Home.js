import React from "react";
import Banner from "./Banner";
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
      <FirstBanner></FirstBanner>
    </div>
  );
};

export default Home;
