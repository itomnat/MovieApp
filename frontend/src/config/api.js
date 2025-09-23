// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL || 'https://movie-gkllcstb3-itomnat-5742s-projects.vercel.app'
  : 'http://localhost:4000';

export default API_BASE_URL;
