import { useState, useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import { Link } from 'react-router-dom';

export default function AdminView({ moviesData, fetchData }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (moviesData && Array.isArray(moviesData)) {
            const moviesArr = moviesData.map(movie => {
                return (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.description.length > 100 ? 
                            `${movie.description.substring(0, 100)}...` : 
                            movie.description}
                        </td>
                        <td>{movie.director}</td>
                        <td>{movie.year}</td>
                        <td>{movie.genre}</td>
                        <td className='text-center'>
                            <EditMovie movie={movie._id} fetchData={fetchData}/>
                            <DeleteMovie movie={movie._id} fetchData={fetchData}/>
                        </td>
                    </tr>
                )
            });
            setMovies(moviesArr);
        }
    }, [moviesData, fetchData]);

    return (
        <Container fluid className="px-4">
            <div className='text-center mb-5'>
                <h1 className="text-center my-4">Admin Dashboard</h1>
                <Link 
                    to="/addMovie" 
                    className='btn btn-primary btn-lg'
                    id="addMovie"
                >
                    Add Movie
                </Link>
            </div>

            {movies.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead className="table-dark">
                        <tr className="text-center">
                            <th>Title</th>
                            <th>Description</th>
                            <th>Director</th>
                            <th>Year</th>
                            <th>Genre</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies}
                    </tbody>
                </Table>
            ) : (
                <div className="text-center mt-5">
                    <h3>No movies available</h3>
                    <p className="text-muted">Add your first movie to get started!</p>
                </div>
            )}
        </Container>
    );
}