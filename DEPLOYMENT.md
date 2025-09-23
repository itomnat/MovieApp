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

### Current Configuration (Fixed)
The project now has a proper `vercel.json` configuration that should work automatically.

1. **Push to GitHub**: Make sure all changes are committed and pushed
2. **Connect to Vercel**: Link your GitHub repository to Vercel
3. **Set Environment Variables**: Add the variables listed above
4. **Deploy**: Click deploy and wait for completion

**No manual configuration needed** - Vercel will automatically:
- Detect the React app in the `client` folder
- Run `npm install` and `npm run build` in the client directory
- Serve the built files from `client/build`

### If Issues Persist:
1. **Clear Vercel Cache**: In Vercel dashboard, go to Settings → Functions → Clear Cache
2. **Redeploy**: Trigger a new deployment
3. **Check Build Logs**: Look for any specific error messages
4. **Check Console**: Open browser dev tools and check for JavaScript errors
5. **Verify Environment Variables**: Make sure `REACT_APP_API_URL` is set correctly

### Troubleshooting White Page:
- Check browser console for JavaScript errors
- Verify that static files (CSS, JS) are loading
- Ensure API calls are working (check Network tab)
- Make sure environment variables are set in Vercel

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
