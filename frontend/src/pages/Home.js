import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movies`);
      setMovies(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch movies');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading movies...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home">
      <div className="home-header">
        <h1>Movie Catalog</h1>
        <p>Discover amazing movies in our collection</p>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie._id} className="movie-card">
            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-director">Director: {movie.director}</p>
              <p className="movie-year">Year: {movie.year}</p>
              <p className="movie-genre">Genre: {movie.genre}</p>
              <p className="movie-description">{movie.description}</p>
            </div>
            <div className="movie-actions">
              <Link to={`/movie/${movie._id}`} className="view-movie-btn">
                View Movie
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
