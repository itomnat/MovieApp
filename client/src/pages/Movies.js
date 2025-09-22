import { useEffect, useState, useContext } from 'react';

import UserContext from '../UserContext';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';

export default function Movies() {

	const { user } = useContext(UserContext);

	const [movies, setMovies] = useState([]);

	console.log(process.env.REACT_APP_API_URL)

	const fetchData = () => {
		fetch(`${process.env.REACT_APP_API_URL}/movies/getMovies`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {

			console.log(data)

		    if (typeof data.message !== "string") {
		    	setMovies(data.movies);
		    } else {
		    	setMovies([]);
		    }
		});
	}

	useEffect(() => {
		fetchData()
    }, []);

	return(
		<>
            {
            	(user.isAdmin === true) ?
            		<AdminView moviesData={movies} fetchData={fetchData}/>
            	:
            		<UserView moviesData={movies}/>
        	}
        </>
	)
}











