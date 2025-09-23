import { useState, useEffect} from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import { Link } from 'react-router-dom';

export default function AdminView({ moviesData, fetchData }) {

	const [movies, setMovies] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [actors, setActors] = useState('');
	const [director, setDirector] = useState('');
	const [year, setYear] = useState(0);
	const [genre, setGenre] = useState('');

	const [showAdd, setShowAdd] = useState(false);

	useEffect(() => {
		const moviesArr = moviesData.map(movie => {
			return (
				<tr key={movie._id}>
					<td>{movie.title}</td>
					<td>{movie.description}</td>
					<td>{movie.actors}</td>
					<td>{movie.director}</td>
					<td>{movie.year}</td>
					<td>{movie.genre}</td>
					<td className='text-center'>
						<EditMovie movie={movie._id} fetchData={fetchData}/>	
						<DeleteMovie movie={movie._id} fetchData={fetchData}/>
					</td>
				</tr>
			)
		})

		setMovies(moviesArr)
	}, [moviesData]);

	const openAdd = () => {
		setShowAdd(true)
	}

	const closeAdd = () => {
		setShowAdd(false);
	}


	return(
		<>

			<div className='text-center mb-5'>
				<h1 className="text-center my-4"> Admin Dashboard</h1>
				<Link to="/addMovie" className='btn btn-primary' >Add Movie</Link>
			</div>

			<Table striped bordered hover responsive>
				<thead>
					<tr className="text-center">
						<th>Name</th>
						<th>Description</th>
						<th>Director</th>
						<th>Year</th>
						<th>Genre</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{ movies }
				</tbody>
			</Table>	
		</>
	)
}