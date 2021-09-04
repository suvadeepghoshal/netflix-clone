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
            const request = instance.get(fetchURL);
            console.log(request);
        }
        fetchData();
        // return () => {
        //     cleanup
        // }
    }, [movies])
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Row
