import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('/api/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div key={movie._id} className="movie-card">
                    <h3>{movie.title}</h3>
                    <p>Director: {movie.director}</p>
                    <p>Year: {movie.year}</p>
                    <p>Description: {movie.description}</p>
                    <p>Genre: {movie.genre}</p>
                    <p>Comments: {movie.comments}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;