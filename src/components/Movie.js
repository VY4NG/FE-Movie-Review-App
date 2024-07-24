import React, { useState } from 'react';
import Stars from './Stars'
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

/*
Need to import useState hook from the React library.
Need to import Stars in order to show clickable stars.
Need to import ReviewList in order to have the list of reviews.
Need to import ReviewForm in order to have the user write a review.
*/

const Movie = ({ movie }) => {

    // State to manage reviews.
    const [reviews, setReviews] = useState(movie.reviews); 

    // Function to add a new review.
    const addReview = review => {
        const newReview = { id: reviews.length + 1, text: review };
        setReviews([...reviews, newReview]);
    };

    // How the page will render each movie, the order of what we will see on the page.
    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.imageUrl} alt={movie.title} style={{ width: '400px', height: 'auto' }} />
            <p>{movie.synopsis}</p>
            <h3>Rating</h3>
            <p>
                {movie.rating} / 5 Stars
            </p>
            <Stars />
            <ReviewList reviews={reviews} />
            <ReviewForm addReview={addReview} />
        </div>
    );
};

export default Movie