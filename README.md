# MERN Movie Catalog Application

A full-stack MERN application for movie catalog management with user authentication and admin functionality.

## Features

### All Users
- View movies from catalog in card format
- Simple registration with email and password
- User login functionality

### Admin Users
- Admin dashboard with movie table display
- Create, update, and delete movies
- Add movie button with id="addMovie"

### Logged-in Users
- View detailed movie information
- Add comments to movies
- View movie comments

## Project Structure

```
movieAppClient/
├── .env
├── .gitignore
├── README.md
├── TODO.md
├── auth.js
├── errorHandler.js
├── index.js
├── package.json
├── controllers/
│   ├── authController.js
│   ├── movieController.js
│   └── userController.js
├── middleware/
│   ├── admin.js
│   └── authMiddleware.js
├── models/
│   ├── Movie.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   ├── movieRoutes.js
│   └── userRoutes.js
└── frontend/
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        ├── App.css
        ├── index.js
        ├── index.css
        ├── components/
        │   ├── Navbar.js
        │   ├── Navbar.css
        │   └── PrivateRoute.js
        ├── context/
        │   └── AuthContext.js
        └── pages/
            ├── Home.js
            ├── Home.css
            ├── Login.js
            ├── Register.js
            ├── Auth.css
            ├── AdminDashboard.js
            ├── AdminDashboard.css
            ├── MovieDetail.js
            └── MovieDetail.css
```

## Backend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create .env file with:
   ```
   PORT=4000
   MONGODB_URI=mongodb+srv://admin:admin123@cluster0.zlyew.mongodb.net/movie-app?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your-super-secret-jwt-key-here
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

## Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /users/register` - User registration
- `POST /users/login` - User login

### Movies
- `GET /movies` - Get all movies
- `GET /movies/:id` - Get single movie
- `POST /movies` - Create movie (Admin only)
- `PUT /movies/:id` - Update movie (Admin only)
- `DELETE /movies/:id` - Delete movie (Admin only)

### Comments
- `POST /movies/addComment/:id` - Add comment to movie
- `GET /movies/getComments/:id` - Get movie comments

## Admin Credentials
- Email: admin@mail.com
- Password: admin123

## Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Development Notes

- The application uses JWT for authentication
- Admin users have full CRUD access to movies
- Regular users can view movies and add comments
- All movie data includes: title, director, year, description, genre, comments
