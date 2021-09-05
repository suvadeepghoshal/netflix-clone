import React from 'react';
import { useState } from 'react';
import instance from '../utility/axios';
import { useEffect } from 'react';
/**
 * This function is one row component for the netflix website
 * Inside one row multiple movies will be displayed
 * @param {Object} props helps us to get all the parameters we are trying to pass from the component and use it 
 * @returns Row cmoponent
 */
function Row(props) {
    /* States: short time memory to intialise the movies array */
    const [movies, setMovies] = useState([]); /* intially it is going to be an empty array */
    /* When the Row loads we need to load the movie information */
    useEffect(() => {
        /**
         * This is asynchronous function to get the movies data
         */
        async function fetchData() {
            let fetchURL = props.fetchUrl;
            /**
             * Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected
             */
            const apiResponse = await instance.get(fetchURL);
            setMovies(apiResponse.data.results);
            return apiResponse;
        }
        fetchData();
        return () => {
            console.log(`Cleanup process after every content change is done`);
        }
    }, [props.fetchUrl]) /* Every time the fetchUrl changes we need to reload the userEffect to get the dynamic data */
    console.log(movies)
    const imageBaseURL = "https://image.tmdb.org/t/p/w200/";
    return (
        <div className="Row">
            <h2>{props.title}</h2>
            <div className="Row__container">
                {movies.map(movie => (
                    <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
