import React from "react";

const Banner = () => {
  return (
    <div className="mt-20" >
      <div className="hero h-96" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/yFwmjbC/Adobe-Stock-228601171-1024x553.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div >
            <h1 data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
             className="text-5xl font-bold">Find Your Need</h1>
            <p data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="900"
             className="py-6">
              we manufacture best products for your home improvement <br>
              </br> with good quality and with the best price
            </p>
            <button data-aos="zoom-in"
            data-aos-delay="1200"
             className="btn btn-primary">Purchase Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
