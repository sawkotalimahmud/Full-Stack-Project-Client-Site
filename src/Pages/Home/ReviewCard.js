import React from "react";

const ReviewCard = ({review}) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={review.img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{review.name}</h2>
        <p>{review.customerReview}</p>
        <p>{review.location}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
