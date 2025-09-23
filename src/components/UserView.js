import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MovieCard from './MovieCard';

export default function UserView({ moviesData }) {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const moviesArr = moviesData.map(movie => {
			return (
				<MovieCard movieProp={movie} key={movie._id}/>
			)
		})

		setMovies(moviesArr)
	}, [moviesData])

	return(
		<>
			<Container fluid className="px-5 py-4">
				<h1 className='text-center'>Explore Movies and TV Shows</h1>
				<Container className="d-flex justify-content-center">
					<Container className="row row-cols-1 row-cols-md-5 g-5 mt-3 ">
						{ movies }
					</Container>
				</Container>
			</Container>
		</>
		)
}