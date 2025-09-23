# Movie Catalog Application

A MERN stack movie catalog system with authentication and admin functionality.

## Features

### All Users
- View movies from the catalog in card format
- Simple registration with email and password
- Login functionality
- View individual movie details with comments

### Admin Users
- Admin dashboard to display all movies in a table
- Create new movies with "Add Movie" button
- Edit and delete movies
- Full CRUD operations

## Tech Stack

- **Frontend:** React.js with Bootstrap
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Authentication:** JWT tokens
- **API:** RESTful endpoints

## API Integration

This application integrates with the Movie API at:
`https://movieapp-api-lms1.onrender.com`

### API Endpoints Used:
- `POST /users/login` - User authentication
- `POST /users/register` - User registration
- `GET /users/details` - Get user details
- `GET /movies/getMovies` - Get all movies
- `GET /movies/getMovie/:id` - Get single movie
- `POST /movies/addMovie` - Add new movie
- `POST /movies/addComment/:id` - Add comment to movie
- `GET /movies/getComments/:id` - Get movie comments

## Deployment on Vercel

### Prerequisites
- Vercel account
- Git repository

### Deployment Steps

1. **Fork/Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd movie-catalog-app
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Build the application**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the React app in the `client` folder
   - The `vercel.json` configuration ensures proper routing

5. **Environment Variables**
   - In Vercel dashboard, add environment variable:
   - `REACT_APP_API_URL=https://movieapp-api-lms1.onrender.com`

### Manual Deployment

If you prefer to deploy manually:

1. **Build the app**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy the build folder**
   - Upload the `client/build` folder to your hosting service
   - Ensure the API URL environment variable is set

## Local Development

1. **Start the backend server** (if running locally)
   ```bash
   npm install
   npm run dev
   ```

2. **Start the frontend**
   ```bash
   cd client
   npm install
   npm start
   ```

3. **Environment Setup**
   - Create `.env` file in client directory:
   ```
   REACT_APP_API_URL=http://localhost:4000
   ```

## Admin Credentials

- **Email:** admin@mail.com
- **Password:** admin123

## Project Structure

```
movie-catalog-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   └── App.js         # Main app component
│   ├── package.json
│   └── .env
├── server/                # Express backend (if needed)
├── vercel.json           # Vercel configuration
└── README.md
```

## Features Implemented

✅ **Movie Catalog Display**
- Movies displayed in responsive card layout
- Each movie shows title, director, year, description, genre
- "View Movie" button for detailed view

✅ **Authentication System**
- User registration with email/password
- Login functionality
- JWT token-based authentication
- Protected routes for admin features

✅ **Admin Dashboard**
- Table view of all movies
- Add Movie functionality with form
- Edit and delete movie operations
- Admin-only access control

✅ **Movie Details & Comments**
- Individual movie view with full details
- Comments system for logged-in users
- Movie metadata display

✅ **API Integration**
- All endpoints properly configured
- Error handling for API calls
- Token-based authentication

✅ **Deployment Ready**
- Optimized build configuration
- Vercel configuration included
- Environment variables setup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
