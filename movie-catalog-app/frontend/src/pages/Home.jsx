import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/api';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchMovies();
                setMovies(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Movie Catalog</h1>
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;