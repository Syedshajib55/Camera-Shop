import React from 'react';

const Review = ({ service }) => {
    const {  name, review, rating } = service; 
    return (
            <div className="service pb-3 border rounded border-success">
            <h4 className="ms-5 me-5 mt-3">{name}</h4>
            <p>Rating : {rating} Star.</p>
            <p className="px-5 mx-5 p-3 mt-3 ms-2 me-2"><span className="text-primary text-xl">Review :</span> {review}</p>
        </div>
    );
};

export default Review;