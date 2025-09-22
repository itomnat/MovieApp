# Movie Catalog Application

## Overview
This is a Movie Catalog application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse a catalog of movies, while providing admin functionality for managing the movie entries.

## Features
- User authentication (registration and login)
- CRUD operations for movies (Create, Read, Update, Delete)
- Admin dashboard for managing movies
- Responsive design for a seamless user experience

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd movie-catalog-app/backend
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `backend/src/utils/db.js`.

4. Start the backend server:
   ```
   npm start
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

### Usage
- Visit `http://localhost:3000` to access the application.
- Users can register and log in to access the movie catalog.
- Admins can manage movies through the admin dashboard.

## Folder Structure
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

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.