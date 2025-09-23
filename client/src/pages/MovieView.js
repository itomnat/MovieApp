import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col, Modal, Form, Image } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

import CommentCard from '../components/CommentCard';

export default function MovieView() {

	const { movieId } = useParams();
	const { user } = useContext(UserContext);
	
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [actors, setActors] = useState('');
	const [director, setDirector] = useState('');
	const [year, setYear] = useState(0);
	const [genre, setGenre] = useState('');

	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);

	const [showEdit, setShowEdit] = useState(false);
	const [showComment, setShowComment] = useState(false);


	const openComment = (movieId) => {
		fetch(`http://localhost:4000/movies/${movieId}`)
		.then(res => res.json())
		.then(data => {
			setTitle(data.title);
		})

		setShowComment(true);
	}

	const closeComment = () => {
		setShowComment(false);
		setTitle("");
		setComment("");
	}

	const addComment = (e, movieId) => {
		e.preventDefault();

		fetch(`http://localhost:4000/movies/addComment/${movieId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				id: user.id,
				comment: comment
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data.message === "Movie updated successfully") {
				Swal.fire({
					title: 'Success!',
					icon: 'success',
					text: 'Movie Comment Added'
				})
				closeComment();
			} else {
				Swal.fire({
					title: 'Error!',
					icon: 'error',
					text: 'Please try again'
				})
				closeComment();
			}
		})
	}

	useEffect(()=> {

		fetch(`http://localhost:4000/movies/getMovie/${movieId}`, {
			headers: {
			    Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {

			console.log(data)

			setTitle(data.title);
			setDescription(data.description);
			setActors(data.actors);
			setDirector(data.director);
			setYear(data.year);
			setGenre(data.genre);

			const commentsArr = data.comments.map(comment => {
				console.log(comment)
		 		return (
		 			<CommentCard commentProp={comment} key={comment._id}/>
		 		)
		 	})

			setComments(commentsArr)
		});

	}, [movieId, comment]);


	return(
		<>

			<Container fluid className="pt-4">
					<Row className="mx-5">
						<Col className="mt-3 p-3 col-lg-4 text-center mx-auto">
							<Image fluid src="https://cdn-icons-png.freepik.com/512/2798/2798007.png" className='mb-2'/>
							<hr/>
							<h1 className='mt-1'> { title } </h1>
							<span> Year: {year} </span>
							<p><span> Genre: {genre} </span></p>
							<p> {description} </p>
							<p><strong>Director:</strong> {director}</p>
							<div className='p-3 mt-3'>
								<div className='my-5'>
									<h3>Comments</h3>
									<hr/>
									<p className='pt-3'>{comments.length > 0 ? comments : "No Comments Yet"}</p>
								</div>
								<div>
									{user.id !== null ? <Button variant="primary" size="sm" onClick={() => openComment(movieId)} className="mx-3"> Add Comment </Button> : "Please Login To Comment"}
								</div>

							</div>


						</Col>
					</Row>
			</Container>

			<Modal show={showComment} onHide={closeComment}>
				<Form onSubmit={e => addComment(e, movieId)}>
					<Modal.Header closeButton>
						<Modal.Title>Leave a Comment</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form.Group>
							<Form.Label>Your Comment:</Form.Label>
							<Form.Control 
								as="textarea" 
								rows={3}
								value={comment} 
								onChange={e => setComment(e.target.value)} 
								required/>
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	)
}