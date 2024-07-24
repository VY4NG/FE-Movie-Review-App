import React, { useState } from 'react';

// Need to import useState hook from the React library.

const ReviewForm = ({ addReview }) => {

    // State to manage the text input for the review.
    const [reviewText, setReviewText] = useState('');

    // Function to handle the form submission.
    const handleSubmit = e => {
        e.preventDefault(); // Prevents the default form submission behavior.

        // Calls the addReview function, passing reviewText as parameter.
        addReview(reviewText); 

        // Clears the reviewText state after submitting a review.
        setReviewText('');
    };

    /* <textarea ... /> will display a multi-line text input field for users to 
    write their review. The text then gets binded and updated. Required
    means that the textarea is a required field in order to submit review. */
    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={reviewText}
                onChange={e => setReviewText(e.target.value)}
                placeholder='Write your review...'
                required
            />
            <br />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm