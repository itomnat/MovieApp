import { useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';

import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

export default function AdminView({ moviesData, fetchData }) {

	const [movies, setMovies] = useState([]);

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
	}, [moviesData, fetchData]);

	return(
		<>

			<div className='text-center mb-5'>
				<h1 className="text-center my-4"> Admin Dashboard</h1>
				<a href="/addMovie" className='btn btn-primary' >Add Movie</a>
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