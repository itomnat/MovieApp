import axios from 'axios';

const API_URL = 'https://movieapp-api-lms1.onrender.com/movies';

export const getAllMovies = async () => {
    const response = await axios.get(`${API_URL}/getMovies`);
    return response.data;
};

export const getMovieById = async (id) => {
    const response = await axios.get(`${API_URL}/getMovie/${id}`);
    return response.data;
};

export const createMovie = async (movieData) => {
    const response = await axios.post(`${API_URL}/addMovie`, movieData);
    return response.data;
};

export const updateMovie = async (id, movieData) => {
    const response = await axios.patch(`${API_URL}/updateMovie/${id}`, movieData);
    return response.data;
};

export const deleteMovie = async (id) => {
    const response = await axios.delete(`${API_URL}/deleteMovie/${id}`);
    return response.data;
};
