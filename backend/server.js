
// Import express for creating the server
// Import dotenv to load environment variables from a .env file
// Import the function to connect to MongoDB
import express from "express";
import dotenv from "dotenv"; 
import { connectDB } from "./config/db.js";

// Load environment variables (e.g., database connection string)
dotenv.config();

// Create an Express application
const app = express();

//middleware: allows us to accept JSON data in the req.body
//middleware: function that runs before you send response back to the client
app.use(express.json());

// Route to check if the server is working
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// Placeholder route to handle product-related requests (no response yet)
app.post("/api/products", async (req, res) => {
  const product = req.body; //user will send this data

  //check for the requirements
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all fields' });
  }

  //if all fields have data - check PASS - create a new product
  const newProduct = new Product(product);

  //we setup a try-catch => is a way to handle errors in JavaScript.
  //try: Runs the code that might cause an error.
  //catch: Runs if an error happens, so your app doesn't crash.
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error('Error in create product:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

//NEXT==> TO TESET IT OUT WITHOUT A FRONT END APPLICATION WE WILL USE 'POSTMAN' DESKTOP APP

// Start the server and connect to MongoDB
app.listen(5000, () => {
  connectDB(); // Connect to the database
  console.log("server started at http://localhost:5000");
});


