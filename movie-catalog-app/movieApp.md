# Movie Catalog Application

## Overview
The Movie Catalog Application is a MERN stack application that allows users to browse a catalog of movies, while providing admin functionality for managing the movie entries. The application includes user authentication to ensure that only authorized users can perform certain actions.

## Features
- **User Authentication**: Users can register and log in to access the admin features.
- **CRUD Operations**: Admin users can create, read, update, and delete movie entries.
- **Movie Catalog**: Users can view a list of movies with details such as title, director, year, description, genre, and comments.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose

## File Structure
- **Backend**
  - `src/app.js`: Entry point for the backend application.
  - `src/controllers/movieController.js`: Handles CRUD operations for movies.
  - `src/models/movie.js`: Defines the Movie model schema.
  - `src/routes/movieRoutes.js`: Routes for movie-related endpoints.
  - `src/routes/authRoutes.js`: Routes for user authentication.
  - `src/middleware/authMiddleware.js`: Middleware for user authentication.
  - `src/utils/db.js`: Database connection logic.
  - `package.json`: Backend dependencies and scripts.
  - `README.md`: Documentation for the backend.

- **Frontend**
  - `src/components/MovieList.jsx`: Displays a list of movies.
  - `src/components/MovieForm.jsx`: Form for creating/updating movies.
  - `src/components/AuthForm.jsx`: Component for user authentication.
  - `src/pages/Home.jsx`: Home page displaying the movie catalog.
  - `src/pages/Admin.jsx`: Admin dashboard for managing movies.
  - `src/pages/Login.jsx`: Login page for user authentication.
  - `src/services/api.js`: API calls related to movies.
  - `src/services/auth.js`: Functions for user authentication.
  - `src/App.jsx`: Main application component.
  - `src/index.js`: Entry point for the frontend application.
  - `package.json`: Frontend dependencies and scripts.
  - `README.md`: Documentation for the frontend.

## Setup Instructions
1. Clone the repository.
2. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
3. Set up your MongoDB database and update the connection string in `src/utils/db.js`.
4. Start the backend server using `npm start`.
5. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
6. Start the frontend application using `npm start`.
7. Access the application in your web browser at `http://localhost:3000`.

## Usage
- Users can register and log in to access the admin dashboard.
- Admins can add new movies, edit existing ones, or delete movies from the catalog.
- All users can view the movie catalog on the home page.

## Future Enhancements
- Implement search and filter functionality for the movie catalog.
- Add user roles and permissions for more granular access control.
- Enhance the UI/UX for better user experience.