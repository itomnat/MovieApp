import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Movies from './pages/Movies';
import MovieView from './pages/MovieView';
import { UserProvider } from './UserContext';
import AddMovie from './pages/AddMovie';


function App() {

    const [user, setUser] = useState({
        id: null,
        isAdmin: null
    });

    const unsetUser = () => {
      localStorage.clear();
    };

    useEffect(() => {

        fetch(`http://localhost:4000/users/details`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(res => res.json())
        .then(data => {
          
            if (typeof data.user !== "undefined") {

                setUser({
                  id: data.user._id,
                  isAdmin: data.user.isAdmin
                });

            } else {

                setUser({
                  id: null,
                  isAdmin: null
                });
            }
        })
    }, []);

    return (
        <UserProvider value={{user, setUser, unsetUser}}>
            <Router>
                <AppNavbar />
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/addMovie" element={<AddMovie />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:movieId" element={<MovieView />}/>
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
