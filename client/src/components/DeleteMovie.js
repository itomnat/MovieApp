import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function DeleteMovie({ movie, fetchData }) {

	const deleteToggle = (movieId) => {
		fetch(`http://localhost:4000/movies/deleteMovie/${movieId}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.message === "Movie deleted successfully") {
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Movie successfully deleted'
				})
				fetchData();
			}else {
				Swal.fire({
					title: 'Something Went Wrong',
					icon: 'Error',
					text: 'Please Try again'
				})
				fetchData();
			}
		})
	}

	return(
		<>
			<Button variant="danger" size="sm" onClick={() => deleteToggle(movie)} className="mx-3">Delete</Button>
		</>
	)
}