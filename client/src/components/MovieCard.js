import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MovieCard({ movieProp }) {
    const { _id, title, director, year, description, genre } = movieProp;

    return (
        <Container className="col d-flex align-items-stretch mb-4">
            <Card className="movie-card w-100 h-100 shadow-sm">
                <Card.Img 
                    variant="top" 
                    src="https://cdn-icons-png.freepik.com/512/2798/2798007.png" 
                    className="movie-img p-3"
                    style={{height: '200px', objectFit: 'contain'}}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="h5 mb-2">{title}</Card.Title>
                    <Card.Text className="text-muted small mb-2">
                        <strong>Director:</strong> {director}<br/>
                        <strong>Year:</strong> {year}<br/>
                        <strong>Genre:</strong> {genre}
                    </Card.Text>
                    <Card.Text className="movie-description flex-grow-1">
                        {description && description.length > 100
                            ? `${description.substring(0, 100)}...`
                            : description
                        }
                    </Card.Text>
                    <Link 
                        className="btn btn-primary mt-auto" 
                        to={`/movies/${_id}`}
                    >
                        View Movie
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
}