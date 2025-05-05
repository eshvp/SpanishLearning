import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

// 1. Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// 2. Set up middleware
app.use(express.json());
app.use(cors());

// 3. Import and mount all routers from the 'routes' folder
const routesDir = path.join(__dirname, 'routes');

// Create 'uploads' directory if it doesn't exist
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Create 'temp' directory if it doesn't exist
const tempDir = path.join(__dirname, '..', 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Dynamically import and mount all routers
fs.readdirSync(routesDir).forEach(file => {
  if (file.endsWith('.ts') || file.endsWith('.js')) {
    const routeName = file.split('.')[0];
    try {
      // Using require instead of import for dynamic loading
      const router = require(path.join(routesDir, file)).default;
      app.use(`/${routeName}`, router);
      console.log(`Mounted route: /${routeName}`);
    } catch (error) {
      console.error(`Failed to load router from ${file}:`, error);
    }
  }
});

// 4. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

export default app;
