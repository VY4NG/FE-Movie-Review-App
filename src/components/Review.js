import React from 'react';

const Review = ({ review }) => {
    return (

        // Renders the text of the review.
        <div>
            <p>{review.text}</p>
        </div>
    );
};

export default Review