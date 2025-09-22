# Movie Catalog Application

## Overview
The Movie Catalog Application is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse a catalog of movies, while providing admin functionality for managing the movie database.

## Features
- User authentication (registration and login)
- CRUD operations for movies (Create, Read, Update, Delete)
- Admin dashboard for managing movies
- Responsive design for a seamless user experience

## Project Structure
```
movie-catalog-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── utils
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── movieApp.md
└── README.md
```

## Installation

### Backend
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your environment variables (e.g., MongoDB connection string).
4. Start the server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints
- **Movies**
  - `GET /api/movies` - Get all movies
  - `GET /api/movies/:id` - Get a movie by ID
  - `POST /api/movies` - Create a new movie
  - `PUT /api/movies/:id` - Update a movie by ID
  - `DELETE /api/movies/:id` - Delete a movie by ID

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in a user

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- Mongoose
- JWT for authentication

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.