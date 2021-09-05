import React from 'react';
import { useState } from 'react';
import instance from '../utility/axios';
import { useEffect } from 'react';
import './Row.css'
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
    const baseUrl = "https://image.tmdb.org/t/p/";
    const fileSize = "original"
    return (
        <div className="Row">
            <h2>{props.title}</h2>
            <div className="Row__container">
                {movies.map(movie => (
                    // if there is any change or re-rendering required, instead of the whole row, it is going to render that particular movie, based on the movie.id which is unique
                    <img key={movie.id} className={`onePoster ${props.isLargeRow && "oneLargePoster"}`} src={`${baseUrl}${fileSize}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
