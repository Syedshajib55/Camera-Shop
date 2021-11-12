import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div id="services">
        <h2 className="text-primary my-5">All Reviews</h2>
        <div className="service-container">
            {
                reviews.map(service => <Review
                    key={service._id}
                    service={service}
                ></Review>)
            }
        </div>
    </div>
    );
};

export default Reviews;