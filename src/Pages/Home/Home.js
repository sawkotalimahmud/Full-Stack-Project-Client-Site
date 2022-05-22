import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import FirstBanner from "./FirstBanner";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <FirstBanner></FirstBanner>
    </div>
  );
};

export default Home;
