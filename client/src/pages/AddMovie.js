import { useState, useContext} from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';

import { Link } from 'react-router-dom';

export default function AddMovie() {

    const {user} = useContext(UserContext);

    const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [actors, setActors] = useState('');
	const [director, setDirector] = useState('');
	const [year, setYear] = useState(0);
	const [genre, setGenre] = useState('');

    console.log("12312312")

	const AddMovie = (e) => {
		e.preventDefault();

		fetch(`http://localhost:4000/movies/addMovie`, {
			method: 'POST',
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

			if(data._id) {
				Swal.fire({
					title: 'Success!',
					icon: 'success',
					text: 'Movie Successfully Added'
				})

                navigate("/movies")

			} else {
				Swal.fire({
					title: 'Error!',
					icon: 'error',
					text: 'Please try again'
				})

                navigate("/movies")

			}
		})
	}  

    console.log(user)

	return(
        (user.isAdmin === true)
        ?
		<>
            <div className='row mt-5'>
                <div className='col-md-6 mx-auto mt-5'>
                <Form onSubmit={e => AddMovie(e)}>
                    <h2 className='text-center'>
                        Add Movie
                    </h2>

                        <Form.Group>
                            <Form.Label>Title</Form.Label>
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
                        <div className='d-flex justify-content-center'>
                            <Button variant="success" type="submit" className='my-3 mx-3'>Add Movie</Button>
                            <Link className='btn btn-danger my-3 mx-3' to="/movies" >Cancel</Link>
                        </div>

                        
                </Form>
                </div>
            </div>

		</>
        :
        <Navigate to="/movies" />
	)
}