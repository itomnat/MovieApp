import { useEffect, useState, useContext } from 'react';
import UserContext from '../UserContext';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';

export default function Movies() {
    const { user } = useContext(UserContext);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
        setLoading(true);
        setError(null);
        
        fetch(`${process.env.REACT_APP_API_URL}/movies/getMovies`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch movies');
            }
            return res.json();
        })
        .then(data => {
            if (data.movies && Array.isArray(data.movies)) {
                setMovies(data.movies);
            } else {
                setMovies([]);
            }
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
            setError('Failed to load movies. Please try again later.');
            setMovies([]);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height: '400px'}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center">
                    <h4>Error</h4>
                    <p>{error}</p>
                    <button className="btn btn-primary" onClick={fetchData}>
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {(user.isAdmin === true) ?
                <AdminView moviesData={movies} fetchData={fetchData}/>
            :
                <UserView moviesData={movies}/>
            }
        </>
    );
}