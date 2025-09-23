const Movie = require('../models/Movie');

// Create a new movie (Admin only)
exports.createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create movie' });
  }
};

// Get all movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get movies' });
  }
};

// Get a single movie by ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get movie' });
  }
};

// Update a movie by ID (Admin only)
exports.updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update movie' });
  }
};

// Delete a movie by ID (Admin only)
exports.deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete movie' });
  }
};

// Add comment to movie
exports.addComment = async (req, res) => {
  try {
    const { comment } = req.body;
    const movieId = req.params.id;

    if (!comment) {
      return res.status(400).json({ message: 'Comment is required' });
    }

    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Add comment to movie
    movie.comments.push(comment);
    await movie.save();

    res.status(200).json({
      message: 'Comment added successfully',
      movie: movie
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add comment' });
  }
};

// Get comments for a movie
exports.getComments = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json({ comments: movie.comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get comments' });
  }
};
