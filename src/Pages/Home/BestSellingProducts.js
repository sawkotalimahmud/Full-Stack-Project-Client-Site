import React from "react";
import BestSellingProduct from "./BestSellingProduct";

const BestSellingProducts = () => {
  const BestSelling = [
    {
      _id: "1",
      name: "Hammer",
      img: "https://i.ibb.co/hmDWjH0/71t-TWyyp-TKL-AC-SL1500.png",
    },
    {
      _id: "2",
      name: "Hand Saw",
      img: "https://i.ibb.co/x7Hmp7X/7169-P7a-AMNL.png",
    },
    {
      _id: "3",
      name: "Tape Measure",
      img: "https://i.ibb.co/HYMbQsr/images.png",
    },
    {
      _id: "4",
      name: "Monkey Wrench",
      img: "https://i.ibb.co/RPwqMM1/8db00529-c47c-481a-a3c8-d247011b1c3a-1-0619eabd2ac69c6795af1718c509fe4a.png",
    },
    {
      _id: "5",
      name: "Jig Saw",
      img: "https://i.ibb.co/y0cs6zY/1271370.png",
    },
  ];
  return (
    <div>
      <div>
          <h2 className='text-3xl text-center uppercase font-bold my-20'>Our Best Selling Products</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {BestSelling.map((bestSell) => (
          <BestSellingProduct
            key={bestSell._id}
            bestSell={bestSell}
          ></BestSellingProduct>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
