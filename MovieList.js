import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('/api/movies')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie._id}>
                        {movie.title} - {movie.genre} - {movie.year}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
