# Movie Catalog Application - Backend

## Overview
This is the backend for the Movie Catalog application built using the MERN stack (MongoDB, Express, React, Node.js). The backend provides RESTful API endpoints for managing a movie catalog, including CRUD operations for movies and user authentication.

## Features
- User authentication (registration and login)
- CRUD operations for movies
- Middleware for authentication and authorization
- MongoDB database connection using Mongoose

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd movie-catalog-app/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the backend directory and add your MongoDB connection string:
  ```
  MONGODB_URI=<your-mongodb-connection-string>
  JWT_SECRET=<your-jwt-secret>
  ```

### Running the Application
To start the server, run:
```
npm start
```
The server will run on `http://localhost:5000`.

### API Endpoints
- **Movies**
  - `GET /api/movies` - Get all movies
  - `GET /api/movies/:id` - Get a movie by ID
  - `POST /api/movies` - Create a new movie
  - `PUT /api/movies/:id` - Update a movie by ID
  - `DELETE /api/movies/:id` - Delete a movie by ID

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login a user

## Folder Structure
```
backend
├── src
│   ├── controllers        # Controllers for handling requests
│   ├── models             # Mongoose models
│   ├── routes             # API routes
│   ├── middleware         # Middleware for authentication
│   ├── utils              # Utility functions (e.g., database connection)
│   └── app.js             # Entry point of the application
├── package.json           # Backend dependencies and scripts
└── README.md              # Documentation for the backend
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.