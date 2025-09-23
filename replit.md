# Movie Catalog Application

## Overview

A full-stack movie catalog system built with the MERN stack (MongoDB, Express.js, React, Node.js). The application provides a movie browsing experience for regular users and administrative capabilities for managing the movie collection. Users can view movies, add comments, and administrators can perform full CRUD operations on the movie database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with functional components and hooks
- **UI Library**: React Bootstrap for responsive design and styling
- **Routing**: React Router DOM for client-side navigation
- **State Management**: React Context API for user authentication state
- **User Interface**: Card-based layout for movie browsing, table view for admin dashboard
- **Notifications**: SweetAlert2 for user feedback and notifications

### Backend Architecture
- **Framework**: Express.js with RESTful API design
- **Authentication**: JWT (JSON Web Tokens) with Bearer token authorization
- **Middleware**: Custom authentication and admin verification middleware
- **Controllers**: Separated business logic for users and movies
- **Route Protection**: Role-based access control for admin operations
- **Password Security**: bcrypt for password hashing

### Database Design
- **Database**: MongoDB with Mongoose ODM
- **User Schema**: Email, hashed password, admin flag
- **Movie Schema**: Title, director, year, description, genre, embedded comments array
- **Comments**: Nested within movie documents with user ID and comment text

### API Structure
- **User Endpoints**: Registration, login, profile retrieval
- **Movie Endpoints**: CRUD operations, comment management
- **Authentication Flow**: Token-based authentication with role verification
- **Admin Operations**: Protected routes requiring admin privileges

### Role-Based Access Control
- **Regular Users**: View movies, add comments, browse catalog
- **Admin Users**: Full CRUD operations, dashboard access, user management
- **Guest Users**: View-only access to movie catalog

## External Dependencies

### Core Technologies
- **Express.js**: Web application framework
- **MongoDB Atlas**: Cloud database service with connection string
- **Mongoose**: MongoDB object modeling
- **React**: Frontend UI library
- **React Bootstrap**: UI component library

### Authentication & Security
- **jsonwebtoken**: JWT token generation and verification
- **bcrypt**: Password hashing and comparison
- **CORS**: Cross-origin resource sharing configuration

### Development Tools
- **nodemon**: Development server auto-restart
- **Create React App**: React development environment

### UI/UX Libraries
- **SweetAlert2**: Enhanced alert and confirmation dialogs
- **Bootstrap**: CSS framework for responsive design
- **React Router DOM**: Client-side routing

### Deployment Configuration
- **Vercel**: Configured for full-stack deployment
- **Environment Variables**: API URL configuration for different environments
- **Build Process**: Separate client and API builds for Vercel deployment