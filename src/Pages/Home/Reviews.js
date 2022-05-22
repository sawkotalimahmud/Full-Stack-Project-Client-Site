import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviews = [
        {
          _id: 1,
          name: "Joe Biden",
          customerReview:
            "I have found the best product from them, they are making good quality product",
          img: 'https://i.ibb.co/8xVByBc/people1.png',
          location: 'California, USA'
        },
        {
          _id: 2,
          name: "Xi Jinping",
          customerReview:
            "The most valuable and qualityful product they made for home and any home work tool",
          img: 'https://i.ibb.co/YN8xQT9/people2.png',
          location: 'Beijing, China'
        },
        {
          _id: 3,
          name: "Vladimir Putin",
          customerReview:
            "One of the best quality product they made for home improvement tools",
          img: 'https://i.ibb.co/8bK8T4P/people3.png',
          location: 'Moscow, Russia'
        },
      ];
    return (
        
        <div>
            <div>
                <h2 className='text-3xl text-center uppercase font-bold my-20'>Our Customer Feedback</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-28">
            {
                reviews.map(review => (<ReviewCard key={review._id} review={review}></ReviewCard>))
            }
        </div>
        </div>
    );
};

export default Reviews;