import React from "react";

const FirstBanner = () => {
  return (
    <div
      class="hero h-96"
      style={{
        backgroundImage: `url(https://i.ibb.co/x5DnRDm/footer.png)`,
      }}
    >
      <div class="hero-overlay "></div>
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
