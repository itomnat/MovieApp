import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import API_BASE_URL from '../config/api';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    year: '',
    description: '',
    genre: ''
  });

  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movies`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setMovies(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch movies');
      setLoading(false);
    }
  }, [user.token]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingMovie) {
        await axios.put(
          `${API_BASE_URL}/movies/${editingMovie._id}`,
          formData,
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
      } else {
        await axios.post(
          `${API_BASE_URL}/movies`,
          formData,
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
      }

      setFormData({
        title: '',
        director: '',
        year: '',
        description: '',
        genre: ''
      });
      setShowAddForm(false);
      setEditingMovie(null);
      fetchMovies();
    } catch (error) {
      setError('Failed to save movie');
    }
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setFormData({
      title: movie.title,
      director: movie.director,
      year: movie.year,
      description: movie.description,
      genre: movie.genre
    });
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await axios.delete(`${API_BASE_URL}/movies/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        fetchMovies();
      } catch (error) {
        setError('Failed to delete movie');
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button
          className="add-movie-btn"
          id="addMovie"
          onClick={() => setShowAddForm(true)}
        >
          Add Movie
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {showAddForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingMovie ? 'Edit Movie' : 'Add New Movie'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Director:</label>
                <input
                  type="text"
                  name="director"
                  value={formData.director}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Year:</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Genre:</label>
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  {editingMovie ? 'Update' : 'Add'} Movie
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingMovie(null);
                    setFormData({
                      title: '',
                      director: '',
                      year: '',
                      description: '',
                      genre: ''
                    });
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="movies-table-container">
        <table className="movies-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Year</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(movie)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
