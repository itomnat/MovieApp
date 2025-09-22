import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../services/api';
import MovieForm from '../components/MovieForm';

const Admin = () => {
    const [movies, setMovies] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getAllMovies();
            setMovies(data);
        };
        fetchMovies();
    }, []);

    const handleEdit = (movie) => {
        setCurrentMovie(movie);
        setIsEditing(true);
    };

    const handleAddMovie = () => {
        setCurrentMovie(null);
        setIsEditing(true);
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={handleAddMovie}>Add Movie</button>
            {isEditing ? (
                <MovieForm movie={currentMovie} setIsEditing={setIsEditing} />
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.director}</td>
                                <td>{movie.year}</td>
                                <td>
                                    <button onClick={() => handleEdit(movie)}>Edit</button>
                                    {/* Add delete functionality here */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Admin;