import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function DeleteMovie({ movie, fetchData }) {
    const deleteToggle = (movieId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${process.env.REACT_APP_API_URL}/movies/deleteMovie/${movieId}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to delete movie');
                    }
                    return res.json();
                })
                .then(data => {
                    if(data.message === "Movie deleted successfully") {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Movie has been deleted.',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false
                        });
                        fetchData();
                    } else {
                        throw new Error('Delete operation failed');
                    }
                })
                .catch(error => {
                    console.error('Delete error:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to delete movie. Please try again.',
                        icon: 'error'
                    });
                });
            }
        });
    }

    return (
        <Button 
            variant="danger" 
            size="sm" 
            onClick={() => deleteToggle(movie)} 
            className="mx-1"
        >
            Delete
        </Button>
    );
}