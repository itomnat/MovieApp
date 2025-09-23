const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');

// Create a new movie (Admin only)
router.post('/', authenticate, authorizeAdmin, movieController.createMovie);

// Get all movies
router.get('/', movieController.getAllMovies);

// Get a single movie by ID
router.get('/:id', movieController.getMovieById);

// Update a movie by ID (Admin only)
router.put('/:id', authenticate, authorizeAdmin, movieController.updateMovie);

// Delete a movie by ID (Admin only)
router.delete('/:id', authenticate, authorizeAdmin, movieController.deleteMovie);

// Add comment to movie
router.post('/addComment/:id', authenticate, movieController.addComment);

// Get comments for a movie
router.get('/getComments/:id', movieController.getComments);

module.exports = router;
