import React from 'react';
import Review from './Review';

// Need to import Review in order to show the reviews in the list.

const ReviewList = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews</h3>
            {reviews.map(review => (

                // Renders the reviews for each movie by ID.
                <Review key={review.id} review={review} /> 
            ))}
        </div>
    );
};

export default ReviewList