import React from "react";
import { BeakerIcon } from "@heroicons/react/solid";

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-5 w-5 text-blue-500" />
      <p>...</p>
    </div>
  );
}

const BusinessSummary = () => {
  return (
    <div className="my-28" style={{
        backgroundImage: `url(https://i.ibb.co/x5DnRDm/footer.png)`,
      }}>
      <h2 className="uppercase text-5xl text-center font-bold mt-10">
        Million Business Trust Us
      </h2>
      <h2 className="uppercase text-2xl text-center mt-5">
        Try To understand users expectation
      </h2>
      <div className="flex justify-center gap-2 mb-28">
        <div className="divider w-20 "></div>
        <div className="divider w-10 "></div>
        <div className="divider w-5 "></div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-10">
        <div className="stats shadow">
          <div className="stat items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <div className="stat-value">100+</div>
            <div className="stat-title">customers</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div className="stat-value">120M+</div>
            <div className="stat-title">Annual revenue</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="stat-value">33K+</div>
            <div className="stat-title">Reviews</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
            <div className="stat-value">50+</div>
            <div className="stat-title">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
