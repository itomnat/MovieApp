import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MovieCard({ movieProp }) {

	const { _id, title, director, year, description, genre } = movieProp;

	return (
		<Container className="col d-flex align-items-stretch">
			<Card className="movie-card mt-3 p-0">
				<Card.Img variant="top" src="https://cdn-icons-png.freepik.com/512/2798/2798007.png" fluid className="movie-img"/>
	            <Card.Body>
	                <Card.Title>{ title }</Card.Title>
	                <Card.Text className="text-muted">
	                	<strong>Director:</strong> { director }<br/>
	                	<strong>Year:</strong> { year }<br/>
	                	<strong>Genre:</strong> { genre }
	                </Card.Text>
	                <Card.Text className="movie-description">
	                	{ description && description.length > 100
	                		? `${description.substring(0, 100)}...`
	                		: description
	                	}
	                </Card.Text>
			        <Link className="btn btn-primary w-100 mt-3" to={`/movies/${_id}`}>View Movie</Link>
	            </Card.Body>
	        </Card>
        </Container>
	)
}
