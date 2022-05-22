import React from "react";

const Banner = () => {
  return (
    <div className="mt-20" >
      <div class="hero h-96" >
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/yFwmjbC/Adobe-Stock-228601171-1024x553.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Find Your Need</h1>
            <p class="py-6">
              we manufacture best products for your home improvement <br>
              </br> with good quality and with the best price
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
