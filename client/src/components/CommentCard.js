import { Card, Container } from 'react-bootstrap';

export default function MovieCard({commentProp}) {

	console.log(commentProp);
	const { comment, userId } = commentProp;

	return (
		<Container className="col">
			<Card className="mt-3">
	            <Card.Body>
	                <Card.Subtitle className='my-3'>{comment}</Card.Subtitle>
	                <p>By: User {userId}</p>
	            </Card.Body>
	        </Card>
        </Container>
	)
}

