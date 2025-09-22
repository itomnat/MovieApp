import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createMovie, updateMovie, getMovieById } from '../services/api';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [comments, setComments] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            getMovieById(id).then(movie => {
                setTitle(movie.title);
                setDirector(movie.director);
                setYear(movie.year);
                setDescription(movie.description);
                setGenre(movie.genre);
                setComments(movie.comments);
            });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const movieData = { title, director, year, description, genre, comments };
        if (isEditing) {
            await updateMovie(id, movieData);
        } else {
            await createMovie(movieData);
        }
        history.push('/admin');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Director:</label>
                <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
            </div>
            <div>
                <label>Year:</label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
            </div>
            <div>
                <label>Comments:</label>
                <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
            </div>
            <button type="submit">{isEditing ? 'Update Movie' : 'Add Movie'}</button>
        </form>
    );
};

export default MovieForm;