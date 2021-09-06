import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import instance from '../../utility/axios';
import requests from '../../service/request';
import "./Banner.css"
/**
 * This is the banner component
 * Thhe header will have a dynamic background image from the api
 * It will have a dynamic movie/series title from the api
 * Two buttons for "Play" and "MyList"
 * It will have the corresponding movie description
 * @returns Banner component
 */
function Banner() {
    // We need the movie
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchRandomMovie() {
            const randomMovieResponse = await instance.get(requests.fetchNetflixOriginals);
            // Randomly select one movie
            let movieArr = randomMovieResponse.data.results;
            let randomIndex = Math.floor(Math.random() * randomMovieResponse.data.results.length);
            let randomMovie = movieArr[randomIndex];
            setMovie(randomMovie);
            return randomMovieResponse;
        }
        fetchRandomMovie();
    }, [])
    /**
     * This function truncates the movie description to some what easier looking!
     * @param {String} text This is the description of the movie
     * @param {Integer} limit This is the limit after which we want to truncate
     * @returns the description, truncated or not depending on the limit given
     */
    function truncateDescription(text, limit) {
        let result = '';
        if (text != null && text.length > limit) {
            result = text.substring(0, limit - 1) + "...";
        } else {
            result = text;
        }
        return result;
    }
    let baseUrl = "https://image.tmdb.org/t/p/";
    let fileSize = "original";
    return (
        <header className="Banner" style={{ backgroundSize: "cover", backgroundImage: `url(${baseUrl}${fileSize}${movie?.backdrop_path})`, backgroundPosition: "center center" }}>
            <div className="Banner__contents">
                <h1 className="Banner__title">{movie?.title || movie?.name || movie?.orginal_name}</h1>
                <div className="Banner_buttons">
                    <button className="Banner__button">Play</button>
                    <button className="Banner__button">My list</button>
                </div>
                <h1 className="Banner__description">{truncateDescription(movie?.overview, 200)}</h1>
            </div>
            {/* This div is to create that fading effect of the banner with the content */}
            <div className="Banner__bottomFading"></div>
        </header>
    )
}

export default Banner
