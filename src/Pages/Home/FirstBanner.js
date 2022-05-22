import React from "react";

const FirstBanner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co/xHS2ncT/tools-4-1600x400-e2autover-201805161212.jpg)`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Let's Get A Deal</h1>
          <p class="mb-5">
            SARAH ENTERPRISE is one of the best manufacturer company for all
            kind of home improvement tool
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
