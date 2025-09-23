# Movie App - Vercel Deployment Guide

## Project Structure
```
├── index.js                 # Main server file
├── package.json             # Server dependencies
├── vercel.json              # Vercel configuration
├── routes/                  # API routes
├── models/                  # Database models
├── controllers/             # Route controllers
├── client/                  # React frontend
│   ├── package.json         # Client dependencies
│   ├── src/                 # React source code
│   └── public/              # Static assets
└── server/                  # (Removed - duplicates)
```

## Environment Variables Setup

### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

```
MONGODB_URI=mongodb+srv://admin:admin123@cluster0.zlyew.mongodb.net/movie-app?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_secure_jwt_secret_key_here
NODE_ENV=production
REACT_APP_API_URL=https://movieapp-api-lms1.onrender.com
```

### Important Notes:
- Your API is hosted on Render: `https://movieapp-api-lms1.onrender.com`
- The MongoDB URI is already configured
- Use a strong, random JWT secret key

## Deployment Steps

### Method 1: Root Directory Approach (Recommended)
1. **Push to GitHub**: Make sure all changes are committed and pushed
2. **Connect to Vercel**: Link your GitHub repository to Vercel
3. **Set Root Directory**: In Vercel project settings, set Root Directory to `client`
4. **Set Environment Variables**: Add the variables listed above
5. **Deploy**: Click deploy and wait for completion

### Method 2: Manual Configuration
1. **Push to GitHub**: Make sure all changes are committed and pushed
2. **Connect to Vercel**: Link your GitHub repository to Vercel
3. **Configure Build Settings**:
   - Framework Preset: **Create React App**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`
   - Root Directory: `client`
4. **Set Environment Variables**: Add the variables listed above
5. **Deploy**: Click deploy and wait for completion

**Important**: Since you're using Render for your API, Vercel will only serve the React frontend. The server files (`index.js`, `routes/`, etc.) are ignored via `.vercelignore`.

## API Configuration

Your app is configured to use:
- **API Server**: `https://movieapp-api-lms1.onrender.com` (hosted on Render)
- **Frontend**: Will be hosted on Vercel
- **Database**: MongoDB Atlas

The following routes are available on your Render API:
- `/movies` - Movie CRUD operations
- `/users` - User authentication and management

## Troubleshooting

### Common Issues:
1. **CORS Errors**: The CORS origin is set to your Render API URL
2. **Build Failures**: Ensure all dependencies are in package.json files
3. **Environment Variables**: Make sure `REACT_APP_API_URL` is set to your Render URL
4. **Database Connection**: Verify MongoDB URI is correct

### Local Development:
```bash
# Install dependencies
npm install
cd client && npm install

# Start development server
npm run dev
```

### Production Build:
```bash
npm run build
```

## Security Notes:
- Change the default MongoDB credentials
- Use a strong JWT secret
- Your Render API handles CORS for your Vercel frontend
- Consider using environment-specific configurations
