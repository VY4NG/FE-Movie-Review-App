import React, { useState } from 'react';

// Need to import useState hook from the React library.

const Stars = () => {
    const [rating, setRating] = useState(0); // Initial rating is set to 0, no stars filled.

    const handleClick = (newRating) => {
        setRating(newRating); // Update the rating when a star is clicked.
    };

    const renderStars = () => {
        const stars = []; // stars is an empty array.
        const maxStars = 5; // Maximum number of stars to rate.

        for (let i = 1; i <= maxStars; i++) {
            stars.push(

                // <span> elements represent each star.
                <span
                    key={i}

                    /* Each star has a className based on whether its index is 
                    less than or equal to rating. Using ternary operator ?, this
                    allows the user to toggle between star filled and empty star. */
                    className={i <= rating ? 'star filled' : 'star'}

                    // Attached to each star to update the rating when clicked. 
                    onClick={() => handleClick(i)}
                >
                    ★
                </span>
            );
        }

        return stars;
    };

    // Users can click on how many stars they will rate the movie. 
    return (
        <div className="stars">
            {renderStars()}
            <p>Your Rating: {rating} Stars</p>
        </div>
    );
};

export default Stars