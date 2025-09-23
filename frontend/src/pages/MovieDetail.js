import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import API_BASE_URL from '../config/api';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [commentLoading, setCommentLoading] = useState(false);

  const fetchMovieDetails = useCallback(async () => {
    try {
      const [movieResponse, commentsResponse] = await Promise.all([
        axios.get(`${API_BASE_URL}/movies/${id}`),
        axios.get(`${API_BASE_URL}/movies/getComments/${id}`)
      ]);

      setMovie(movieResponse.data);
      setComments(commentsResponse.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch movie details');
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setCommentLoading(true);
    try {
      await axios.post(
        `${API_BASE_URL}/movies/addComment/${id}`,
        { comment: newComment },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      setNewComment('');
      fetchMovieDetails(); // Refresh comments
    } catch (error) {
      setError('Failed to add comment');
    }
    setCommentLoading(false);
  };

  if (loading) {
    return <div className="loading">Loading movie details...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!movie) {
    return <div className="error">Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail-container">
        <div className="movie-header">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="director">Director: {movie.director}</span>
            <span className="year">Year: {movie.year}</span>
            <span className="genre">Genre: {movie.genre}</span>
          </div>
        </div>

        <div className="movie-description">
          <h3>Description</h3>
          <p>{movie.description}</p>
        </div>

        <div className="comments-section">
          <h3>Comments</h3>

          {user && (
            <form onSubmit={handleAddComment} className="comment-form">
              <div className="comment-input-group">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  required
                />
                <button
                  type="submit"
                  className="comment-submit-btn"
                  disabled={commentLoading}
                >
                  {commentLoading ? 'Adding...' : 'Add Comment'}
                </button>
              </div>
            </form>
          )}

          <div className="comments-list">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p>{comment}</p>
                </div>
              ))
            ) : (
              <p className="no-comments">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
