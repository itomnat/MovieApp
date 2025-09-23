import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function EditMovie({ movie, fetchData }) {

	const [movieId, setMovieId] = useState('');

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [actors, setActors] = useState('');
	const [director, setDirector] = useState('');
	const [year, setYear] = useState(0);
	const [genre, setGenre] = useState('');

	const [showEdit, setShowEdit] = useState(false);

	const openEdit = (movieId) => {
		fetch(`http://localhost:4000/movies/getMovie/${movieId}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setMovieId(data._id);
			setTitle(data.title);
			setDescription(data.description);
			setActors(data.actors);
			setDirector(data.director);
			setYear(data.year);
			setGenre(data.genre);
		})

		setShowEdit(true)
	}

	const closeEdit = () => {
		setShowEdit(false);
		setTitle('')
		setDescription('')
	}

	const editMovie = (e, movieId) => {
		e.preventDefault();

		fetch(`http://localhost:4000/movies/updateMovie/${movieId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				title: title,
			   	director: director,
			   	year: year,
				description: description,
				genre: genre
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data.message === "Movie updated successfully") {
				Swal.fire({
					title: 'Success!',
					icon: 'success',
					text: 'Movie Successfully Updated'
				})
				closeEdit();
				fetchData();
				
			} else {
				Swal.fire({
					title: 'Error!',
					icon: 'error',
					text: 'Please try again'
				})
				closeEdit();
				fetchData();
			}
		})
	}

	return(
		<>
			<Button variant="primary" size="sm" onClick={() => openEdit(movie)} className="mx-3"> Edit </Button>

			<Modal show={showEdit} onHide={closeEdit}>
				<Form onSubmit={e => editMovie(e, movieId)}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Movie</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form.Group>
							<Form.Label>TItle</Form.Label>
							<Form.Control 
								type="text" 
								value={title} 
								onChange={e => setTitle(e.target.value)} 
								required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control as="textarea"
								value={description} 
								onChange={e => setDescription(e.target.value)} 
								required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Director</Form.Label>
							<Form.Control 
								type="text" 
								value={director} 
								onChange={e => setDirector(e.target.value)} 
								required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Year</Form.Label>
							<Form.Control 
								type="number" 
								value={year} 
								onChange={e => setYear(e.target.value)} 
								required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Genre</Form.Label>
							<Form.Control 
								type="text" 
								value={genre} 
								onChange={e => setGenre(e.target.value)} 
								required/>
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="success" type="submit">Update</Button>
					</Modal.Footer>
				</Form>
				
			</Modal>
		</>
		)
}