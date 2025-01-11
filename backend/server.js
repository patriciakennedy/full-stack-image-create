
// Import express for creating the server
// Import dotenv to load environment variables from a .env file
// Import the function to connect to MongoDB
import express from "express";
import dotenv from "dotenv"; 
import { connectDB } from './config/db.js';

// Load environment variables (e.g., database connection string)
dotenv.config();

// Create an Express application
const app = express();

// Route to check if the server is working
app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Placeholder route to handle product-related requests (no response yet)
app.get("/products", (req, res) => {});


// Start the server and connect to MongoDB
app.listen(5000, () => {
  connectDB(); // Connect to the database
  console.log('server started at http://localhost:5000');
});


