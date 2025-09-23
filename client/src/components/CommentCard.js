import { useState, useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MovieCard({commentProp}) {

	console.log(commentProp);
	const { _id, comment, userId } = commentProp;

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

