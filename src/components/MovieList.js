import React from 'react';
import { moviesDataAndReviews } from '../moviesDataAndReviews';
import Movie from './Movie';

/* 
Need to import my moviesDataAndReviews, which is my database.
Need to import Movie in order to show them as a list.

Constant variable for MovieList that is a function that returns a movie by ID.
Using the map method, movie.id and movie are props with the key as movie.id.
*/

const MovieList = () => {
    return (

        /* Container for all the movie and their data. For each movie object
        it renders a Movie component. */
        <div>
            {moviesDataAndReviews.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList